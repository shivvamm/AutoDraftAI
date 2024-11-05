import { Statistics } from "./Statistics";
// import pilot from "../assets/pilot.png";
import aiemail from "../assets/aipilotcrop.webp";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={aiemail}
            alt="AI Email Assistant"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                AutoDraft
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                AutoDraft is an AI-powered email assistant designed to
                streamline your inbox management. It monitors your emails,
                detects important messages, drafts personalized replies, and
                saves them for your review, allowing you to focus on what truly
                matters.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
