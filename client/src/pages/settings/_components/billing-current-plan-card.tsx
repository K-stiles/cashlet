import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertDialogPopup } from "./alert-dialogue-popup";

type BillingCurrentPlanCardProps = {
  planName: string;
  status: string;
  nextInvoice?: string | null;
  paymentMethod?: string | null;
};

const BillingCurrentPlanCard = ({
  planName,
  status,
  nextInvoice,
  paymentMethod,
}: BillingCurrentPlanCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
        <CardDescription>Your subscription status and limits</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">Plan</p>
          <p className="text-base font-medium">{planName}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Status</p>
          <p className="text-base font-medium">{status}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Next invoice</p>
          <p className="text-base font-medium">{nextInvoice ?? "N/A"}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Payment method</p>
          <p className="text-base font-medium">{paymentMethod ?? "Not set"}</p>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <p className="text-sm text-muted-foreground">
          Upgrade to unlock AI-powered exports, unlimited history, and automated
          reports.
        </p>

          {/* <Button>See premium options</Button> */}
           <AlertDialogPopup label={"See premium options"} />
      </CardFooter>
    </Card>
  );
};

export default BillingCurrentPlanCard;
