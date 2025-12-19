import { Phone, Code2, Rocket } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "./BookDemoModal";

const steps = [
  {
    icon: Phone,
    title: "1. Demo Call",
    subtitle: "20 Minutes",
    description: "Yeah, it's technically a sales call—but we'll answer everything, show live systems, and prove it works."
  },
  {
    icon: Code2,
    title: "2. We Build It",
    subtitle: "7-10 Days",
    description: "You give us your business info; we handle the tech. New website, CRM, and automation done for you."
  },
  {
    icon: Rocket,
    title: "3. Launch",
    subtitle: "25 Minutes",
    description: "We walk you through the system—which is basically two buttons and one phone notification. Then you get paid."
  }
];

export function HowItWorks() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section id="how-it-works" className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            What Working With Us Looks Like
          </h2>
          <p className="text-white/60">No complex onboarding. We do the heavy lifting.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-primary/50 transition-colors shadow-lg">
                <step.icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 bg-white text-background text-xs font-bold px-3 py-1 rounded-full">
                  Step {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <span className="text-primary font-mono text-sm mb-4 block uppercase tracking-wider">{step.subtitle}</span>
              <p className="text-white/60 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-16">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            Ready to Get Started?
          </h3>
          <Button
            size="lg"
            onClick={() => setDemoModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-background font-bold text-lg h-14 px-10 rounded-full"
            data-testid="button-book-demo-how-it-works"
          >
            Book a Demo
          </Button>
        </div>
      </div>

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
}
