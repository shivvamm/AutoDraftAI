import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import aiImage from "../assets/growth.png"; // Update with relevant images
import inboxImage from "../assets/reflecting.png"; // Update with relevant images
import securityImage from "../assets/looking-ahead.png"; // Update with relevant images

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Smart Email Management",
    description:
      "AutoDraft intelligently monitors your inbox and highlights important emails that need your attention.",
    image: inboxImage,
  },
  {
    title: "AI-Powered Drafting",
    description:
      "Let AI generate personalized replies based on previous conversations and context for efficient communication.",
    image: aiImage,
  },
  {
    title: "Enhanced Security",
    description:
      "We prioritize your privacy, using advanced encryption to keep your email data secure.",
    image: securityImage,
  },
];

const featureList: string[] = [
  "Dark/Light Theme",
  "AI Insights",
  "Spam Detection",
  "Email Drafting",
  "User-Friendly Interface",
  "Cross-Platform Support",
  "Custom Notifications",
  "Performance Tracking",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
