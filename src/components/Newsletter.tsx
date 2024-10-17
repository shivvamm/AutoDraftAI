import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed!");
    // Here you can add the logic to handle the email subscription
  };

  return (
    <section id="newsletter" className="bg-light p-8">
      <hr className="w-11/12 mx-auto mb-8" />

      <div className="container py-24 sm:py-32 text-center">
        <h3 className="text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground mt-4 mb-8">
          Stay updated with the latest tips and insights to enhance your email
          management skills.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="your-email@example.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto mt-8" />
    </section>
  );
};
