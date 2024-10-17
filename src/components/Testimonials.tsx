import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Alice Johnson",
    userName: "@alice_j",
    comment: "This email assistant has transformed the way I manage my inbox!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Bob Smith",
    userName: "@bob_smith",
    comment:
      "I can't believe how much time I save every day. It's a game changer!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Catherine Lee",
    userName: "@cathy_lee",
    comment:
      "The automation features are fantastic. My workflow is so much smoother now.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Brown",
    userName: "@david_brown",
    comment:
      "A must-have tool for anyone overwhelmed by emails. Highly recommend!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Davis",
    userName: "@emily_d",
    comment:
      "The interface is so user-friendly. I love how easy it is to get started.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Frank Wilson",
    userName: "@frank_w",
    comment:
      "Finally, an email assistant that understands my needs. It's made my life easier.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Users Love{" "}
        </span>
        Our Email Assistant
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Our users rave about how our email assistant simplifies their lives and
        enhances productivity.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
