import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BillingPlanCardProps = {
  title: string;
  price: string;
  features: string[];
  ctaLink: string;
  ctaLabel?: string;
};

const BillingPlanCard = ({
  title,
  price,
  features,
  ctaLink,
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
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full">{ctaLabel}</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default BillingPlanCard;
