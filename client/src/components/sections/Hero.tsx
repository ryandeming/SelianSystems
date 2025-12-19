import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { BookDemoModal } from "./BookDemoModal";
import heroBg from "@assets/generated_images/contractor_working_in_low_light_or_professional_setting.png";

export function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Contractor working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 md:bg-background/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid gap-12 items-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Website & Automation Systems
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-4xl font-display font-black text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            CUT THE BS.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              GET PAID.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            No agency fluff. We build you a custom website and give you the tools that help contractors build, track, and convert leads into
            cash.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button
              size="lg"
              onClick={() => setDemoModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-background font-bold text-lg h-14 px-8 rounded-full shadow-[0_0_20px_-5px_rgba(255,145,77,0.5)]"
              data-testid="button-book-demo-hero"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full"
              >
                See How It Works
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-white/60 text-sm font-medium animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Built for Trades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>No Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Results Driven</span>
            </div>
          </div>
        </div>
      </div>

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
}
