import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BillingDetailsCardProps = {
  onAddMethod?: () => void;
  onUpdateEmail?: () => void;
  onViewInvoices?: () => void;
  disabled?: boolean;
};

const BillingDetailsCard = ({
  onAddMethod,
  onUpdateEmail,
  onViewInvoices,
  disabled = true,
}: BillingDetailsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Details</CardTitle>
        <CardDescription>Manage your account & invoices</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Default payment method
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={onAddMethod}
            disabled={disabled}
          >
            Add method
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Billing email</span>
          <Button
            size="sm"
            variant="outline"
            onClick={onUpdateEmail}
            disabled={disabled}
          >
            Update email
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Invoices</span>
          <Button
            size="sm"
            variant="outline"
            onClick={onViewInvoices}
            disabled={disabled}
          >
            View invoices
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingDetailsCard;
