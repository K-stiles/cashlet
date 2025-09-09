import "dotenv/config";
import mongoose from "mongoose";
import connectDatabase from "../config/database.config";
import UserModel from "../models/user.model";
import TransactionModel, {
  PaymentMethodEnum,
  RecurringIntervalEnum,
  TransactionStatusEnum,
  TransactionTypeEnum,
} from "../models/transaction.model";
import ReportModel, { ReportStatusEnum } from "../models/report.model";
import ReportSettingModel, {
  ReportFrequencyEnum,
} from "../models/report-setting.model";
import { hashValue } from "../utils/bcrypt";

async function seed() {
  await connectDatabase();

  console.log("🌱 Seeding database...\n");

  // Clean existing data
  await Promise.all([
    TransactionModel.deleteMany({}),
    ReportModel.deleteMany({}),
    ReportSettingModel.deleteMany({}),
    UserModel.deleteMany({}),
  ]);
  console.log("🐷 Deleted all existing data");

  console.log("👤 Creating users...");
  // Create users
  const users = await UserModel.insertMany([
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      password: await hashValue("Password123!"),
      profilePicture: null,
    },
    {
      name: "Bob Williams",
      email: "bob@example.com",
      password: await hashValue("Password123!"),
      profilePicture: null,
    },
  ]);

  console.log(`Created ${users.length} users`);

  // Transactions for each user
  const [alice, bob] = users;
  const now = new Date();

  // Helper to clamp a date within month
  const safeDate = (year: number, month: number, day: number) => {
    return new Date(year, month, Math.min(day, 28));
  };

  // Generate Alice's transactions from last year to Nov 30 this year with pronounced spikes
  const aliceTransactions: any[] = [];
  const startYear = now.getFullYear() - 1;
  const endYear = now.getFullYear();
  const endMonthInclusive = 10; // 0-based: 10 => November

  for (let year = startYear; year <= endYear; year++) {
    const monthStart = year === startYear ? 0 : 0;
    const monthEnd = year === endYear ? endMonthInclusive : 11;
    for (let month = monthStart; month <= monthEnd; month++) {
      const periodDate = new Date(year, month, 1);

      // Base income: Salary
      aliceTransactions.push({
        userId: alice._id,
        title: "Monthly Salary",
        type: TransactionTypeEnum.INCOME,
        amount: 5200.0,
        category: "Salary",
        description: "Primary job salary",
        date: safeDate(year, month, 1),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
        isRecurring: true,
        recurringInterval: RecurringIntervalEnum.MONTHLY,
      });

      // Bonus spikes on Mar, Jun, Sep, Dec
      if ([2, 5, 8, 11].includes(month)) {
        const bonusAmounts = [3200, 4500, 6000, 8000];
        const idx = [2, 5, 8, 11].indexOf(month);
        aliceTransactions.push({
          userId: alice._id,
          title: "Quarterly Bonus",
          type: TransactionTypeEnum.INCOME,
          amount: bonusAmounts[idx],
          category: "Bonus",
          description: "Performance bonus",
          date: safeDate(year, month, 5),
          status: TransactionStatusEnum.COMPLETED,
          paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
          isRecurring: false,
        });
      }

      // Side hustle income on some months to add variability
      if ([1, 4, 6, 9].includes(month)) {
        aliceTransactions.push({
          userId: alice._id,
          title: "Side Gig Payment",
          type: TransactionTypeEnum.INCOME,
          amount: [600, 900, 1200, 1500][[1, 4, 6, 9].indexOf(month)],
          category: "Freelance",
          description: "Consulting/side project",
          date: safeDate(year, month, 12),
          status: TransactionStatusEnum.COMPLETED,
          paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
          isRecurring: false,
        });
      }

      // Fixed expense: Rent
      aliceTransactions.push({
        userId: alice._id,
        title: "Apartment Rent",
        type: TransactionTypeEnum.EXPENSE,
        amount: 1850.0,
        category: "Housing",
        description: "Monthly rent",
        date: safeDate(year, month, 3),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.AUTO_DEBIT,
        isRecurring: true,
        recurringInterval: RecurringIntervalEnum.MONTHLY,
      });

      // Utilities
      aliceTransactions.push({
        userId: alice._id,
        title: "Utilities",
        type: TransactionTypeEnum.EXPENSE,
        amount: 180 + (month % 3) * 20,
        category: "Bills",
        description: "Electricity, water, internet",
        date: safeDate(year, month, 7),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.CARD,
        isRecurring: true,
        recurringInterval: RecurringIntervalEnum.MONTHLY,
      });

      // Groceries (two variations per month)
      aliceTransactions.push({
        userId: alice._id,
        title: "Groceries",
        type: TransactionTypeEnum.EXPENSE,
        amount: 120 + (month % 4) * 15,
        category: "Food",
        description: "Weekly grocery shopping",
        date: safeDate(year, month, 10),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.CARD,
        isRecurring: false,
      });
      aliceTransactions.push({
        userId: alice._id,
        title: "Groceries",
        type: TransactionTypeEnum.EXPENSE,
        amount: 85 + (month % 5) * 10,
        category: "Food",
        description: "Top-up groceries",
        date: safeDate(year, month, 20),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.CARD,
        isRecurring: false,
      });

      // Gym Membership
      aliceTransactions.push({
        userId: alice._id,
        title: "Gym Membership",
        type: TransactionTypeEnum.EXPENSE,
        amount: 49.99,
        category: "Health",
        description: "Monthly subscription",
        date: safeDate(year, month, 2),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.AUTO_DEBIT,
        isRecurring: true,
        recurringInterval: RecurringIntervalEnum.MONTHLY,
      });

      // Travel spikes: summer and December
      if ([5, 6, 7, 11].includes(month)) {
        aliceTransactions.push({
          userId: alice._id,
          title: "Travel Expense",
          type: TransactionTypeEnum.EXPENSE,
          amount: [1200, 1600, 2200, 2500][[5, 6, 7, 11].indexOf(month)],
          category: "Travel",
          description: "Flights and hotels",
          date: safeDate(year, month, 15),
          status: TransactionStatusEnum.COMPLETED,
          paymentMethod: PaymentMethodEnum.CARD,
          isRecurring: false,
        });
      }

      // Occasional medical expense spikes
      if ([2, 9].includes(month)) {
        aliceTransactions.push({
          userId: alice._id,
          title: "Medical Bills",
          type: TransactionTypeEnum.EXPENSE,
          amount: month === 2 ? 750 : 1300,
          category: "Health",
          description: "Checkups and prescriptions",
          date: safeDate(year, month, 18),
          status: TransactionStatusEnum.COMPLETED,
          paymentMethod: PaymentMethodEnum.CARD,
          isRecurring: false,
        });
      }

      // Investment contribution lows (negative spikes for cashflow as expenses)
      if ([0, 3, 8].includes(month)) {
        aliceTransactions.push({
          userId: alice._id,
          title: "Investment Contribution",
          type: TransactionTypeEnum.EXPENSE,
          amount: [400, 900, 1500][[0, 3, 8].indexOf(month)],
          category: "Investments",
          description: "Brokerage/retirement",
          date: safeDate(year, month, 25),
          status: TransactionStatusEnum.COMPLETED,
          paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
          isRecurring: false,
        });
      }
    }
  }

  // Keep Bob's sample transactions simple/current
  const bobTransactions = [
    {
      userId: bob._id,
      title: "Freelance Project",
      type: TransactionTypeEnum.INCOME,
      amount: 1200.0,
      category: "Freelance",
      description: "Website redesign",
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        Math.max(1, now.getDate() - 10)
      ),
      status: TransactionStatusEnum.COMPLETED,
      paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
      isRecurring: false,
    },
    {
      userId: bob._id,
      title: "Coffee Shop",
      type: TransactionTypeEnum.EXPENSE,
      amount: 18.5,
      category: "Food",
      description: "Coffee with client",
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        Math.max(1, now.getDate() - 1)
      ),
      status: TransactionStatusEnum.COMPLETED,
      paymentMethod: PaymentMethodEnum.CARD,
      isRecurring: false,
    },
  ];

  const transactions = [...aliceTransactions, ...bobTransactions];

  console.log("💰 Creating transactions...");
  const createdTx = await TransactionModel.insertMany(transactions);
  console.log(`Created ${createdTx.length} transactions`);

  console.log("🔍 Creating report settings...");
  // Report settings
  const reportSettings = await ReportSettingModel.insertMany([
    {
      userId: alice._id,
      frequency: ReportFrequencyEnum.MONTHLY,
      isEnabled: true,
      nextReportDate: new Date(now.getFullYear(), now.getMonth() + 1, 1),
      lastSentDate: new Date(now.getFullYear(), now.getMonth(), 1),
    },
    {
      userId: bob._id,
      frequency: ReportFrequencyEnum.MONTHLY,
      isEnabled: false,
    },
  ]);
  console.log(`Created ${reportSettings.length} report settings`);

  console.log("🔍 Creating reports...");
  // Reports: monthly periods from last year to Nov this year for Alice
  const reportDocs: any[] = [];
  for (let year = startYear; year <= endYear; year++) {
    const monthStart = 0;
    const monthEnd = year === endYear ? endMonthInclusive : 11;
    for (let month = monthStart; month <= monthEnd; month++) {
      const period = `${year}-${String(month + 1).padStart(2, "0")}`;
      reportDocs.push({
        userId: alice._id,
        period,
        sentDate: new Date(year, month, 28),
        status: ReportStatusEnum.SENT,
      });
    }
  }
  const reports = await ReportModel.insertMany(reportDocs);
  console.log(`Created ${reports.length} reports`);

  console.log("\n✅ Seeding complete.");
}

seed()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
