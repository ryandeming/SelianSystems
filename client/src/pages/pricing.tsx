import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { BookDemoModal } from "@/components/sections/BookDemoModal";
import { useMetaTags } from "@/hooks/use-meta-tags";

const features = [
  "Full Custom Website (5-10 pages)",
  "Automated Lead Followup",
  "Missed Call Text Back",
  "5-Star Review Machine",
  "One-Click Marketing Campaigns",
  "On-Site SEO"
];

export default function Pricing() {
  useMetaTags({
    title: "Pricing - Selian Systems",
    description: "Simple pricing. No surprises. One plan with everything you need to build, track, and convert leads. Built for contractors. $247/month.",
    ogTitle: "Pricing - Selian Systems",
    ogDescription: "Simple pricing. No surprises. One plan with everything you need to build, track, and convert leads. Built for contractors.",
  });

  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Simple Pricing. <br />
                <span className="text-primary">No Surprises.</span>
              </h1>
              <p className="text-white/60 text-xl">
                One plan. Everything you need to build, track, and convert leads. Built for contractors.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl opacity-20" />
                
                {/* Card */}
                <div className="relative bg-card border-2 border-primary rounded-3xl p-8 md:p-10 overflow-hidden">
                  {/* Most Popular Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-background font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>

                  <div className="pt-8 text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                      Contractor Advanced
                    </h3>
                    <div className="mt-6">
                      <span className="text-5xl font-bold text-white">$247</span>
                      <span className="text-white/60 ml-2">/month</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={() => setDemoModalOpen(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-12 rounded-full"
                    data-testid="button-book-call-pricing"
                  >
                    Book a Call
                  </Button>

                  <p className="text-center text-white/50 text-sm mt-6">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto bg-card border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">What's Included</h3>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>✓ 20-minute demo call to review your business</li>
                <li>✓ 7-10 day setup and build process</li>
                <li>✓ 25-minute launch call with training</li>
                <li>✓ 24/7 system automation</li>
                <li>✓ Email & phone support</li>
                <li>✓ No long-term contracts</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
}
