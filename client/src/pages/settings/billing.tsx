import { Separator } from "@/components/ui/separator";
import BillingCurrentPlanCard from "./_components/billing-current-plan-card";
import BillingPlanCard from "./_components/billing-plan-card";

const Billing = () => {
  return (
    <div className="space-y-6 w-full">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing information
        </p>
      </div>
      <Separator />

      <div className="w-full grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-3">
          <BillingCurrentPlanCard
            planName="Free"
            status="Active"
            nextInvoice={null}
            paymentMethod={null}
            upgradeLink="https://tinyurl.com/extended-stripe-integration"
          />
        </div>
      </div>

      {/* Upgrade Options */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <BillingPlanCard
          title="Pro - Monthly"
          price="$9 / month"
          features={[
            "Unlimited transactions",
            "AI receipt scanning",
            "Advanced analytics",
            "Automated monthly reports",
            "Email support",
          ]}
          ctaLink="https://tinyurl.com/extended-stripe-integration"
        />
        <BillingPlanCard
          title="Pro - Yearly"
          price="$90 / year"
          features={[
            "Everything in Pro Monthly",
            "2 months free",
            "Priority email support",
          ]}
          ctaLink="https://tinyurl.com/extended-stripe-integration"
        />
      </div>
    </div>
  );
};

export default Billing;
