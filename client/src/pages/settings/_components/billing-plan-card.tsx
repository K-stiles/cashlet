import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertDialogPopup } from "./alert-dialogue-popup";

type BillingPlanCardProps = {
  title: string;
  price: string;
  features: string[];
  ctaLabel?: string;
};

const BillingPlanCard = ({
  title,
  price,
  features,
  ctaLabel = "Upgrade",
}: BillingPlanCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {features.map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
          <AlertDialogPopup label={ctaLabel} />
      </CardFooter>
    </Card>
  );
};

export default BillingPlanCard;
