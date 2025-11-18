import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Download,
  FolderOpen,
  Settings,
  Upload,
  LogIn,
} from "lucide-react";

interface StepProps {
  step: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    step: 1,
    icon: <Download className="w-10 h-10 text-primary" />,
    title: "Download Extension",
    description:
      "Click on the download button above to get the AutoDraft extension zip file to your computer.",
  },
  {
    step: 2,
    icon: <FolderOpen className="w-10 h-10 text-primary" />,
    title: "Unzip the Extension",
    description:
      "Extract the downloaded zip file to a folder on your computer. Remember this location for the next step.",
  },
  {
    step: 3,
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: "Enable Developer Mode",
    description:
      "Open your browser's extension page (chrome://extensions), then toggle on 'Developer mode' in the top right corner.",
  },
  {
    step: 4,
    icon: <Upload className="w-10 h-10 text-primary" />,
    title: "Load Unpacked Extension",
    description:
      "Click 'Load unpacked' button and select the unzipped folder containing the extension files.",
  },
  {
    step: 5,
    icon: <LogIn className="w-10 h-10 text-primary" />,
    title: "Pin, Login & Start",
    description:
      "Pin the extension to your toolbar, open it, log in with your credentials, and click 'Start' to begin using AutoDraft.",
  },
];

export const InstallationGuide = () => {
  return (
    <section id="installation" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        How to{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Install{" "}
        </span>
        the Extension
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        Follow these simple steps to get AutoDraft up and running in your browser.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.slice(0, 3).map(({ step, icon, title, description }: StepProps) => (
          <Card key={title} className="bg-muted/50 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              {step}
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
        {steps.slice(3).map(({ step, icon, title, description }: StepProps) => (
          <Card key={title} className="bg-muted/50 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              {step}
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
