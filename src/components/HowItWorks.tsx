import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "Experience an inclusive platform designed for everyone, ensuring seamless navigation for all users, regardless of their abilities.",
  },
  {
    icon: <MapIcon />,
    title: "Community Engagement",
    description:
      "Connect with a dynamic community of users. Share insights, collaborate on projects, and grow together in a supportive environment.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Easily adapt to your growing needs. Our platform scales effortlessly, supporting teams of any size from startups to large enterprises.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification Features",
    description:
      "Boost user engagement through gamified experiences. Earn rewards, complete challenges, and enjoy a fun way to interact with our platform.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Explore the innovative features that make our platform stand out and
        simplify your journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
