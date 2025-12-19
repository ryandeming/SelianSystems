import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { BookDemoModal } from "@/components/sections/BookDemoModal";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function About() {
  useMetaTags({
    title: "About Us - Selian Systems",
    description: "We built Selian Systems for contractors, not marketers. Simple, effective tools designed for people who actually fix things. No agency fluff, no complicated software.",
    ogTitle: "About Us - Selian Systems",
    ogDescription: "We built Selian Systems for contractors, not marketers. Simple, effective tools designed for people who actually fix things.",
  });

  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              We Built This For <span className="text-primary">Contractors</span>, Not Marketers.
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Selian Systems started because we were tired of seeing contractors get ripped off by expensive agencies and complicated software. We decided to build something simple, effective, and built for people who actually fix things.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-card border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                  We believe every contractor deserves access to world-class marketing and CRM tools. Not expensive enterprise software. Not complicated agency relationships. Just simple, honest tools that help you build a sustainable business.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  Stop losing leads to the next guy. Stop guessing if your marketing is working. Stop paying agencies for results you can't see.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-background rounded-2xl p-12 border border-white/10">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-white/70">Contractors Using Selian</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">8,500+</div>
                    <p className="text-white/70">Jobs Booked Last Quarter</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">$12M+</div>
                    <p className="text-white/70">Revenue Generated for Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">
              Why Contractors Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">No Agency Fluff</h3>
                <p className="text-white/70">
                  We don't use buzzwords or false promises. You get simple tools that work, configured to your business.
                </p>
              </div>
              
              <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">Built for Field Professionals</h3>
                <p className="text-white/70">
                  Every feature is designed with contractors in mind. Two buttons. One phone notification. That's it.
                </p>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">Results Over Promises</h3>
                <p className="text-white/70">
                  We measure success by jobs booked, not vanity metrics. If it's not working, we'll fix it or you can leave.
                </p>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">No Contracts, No BS</h3>
                <p className="text-white/70">
                  Month-to-month. Cancel anytime. We stay accountable to you because we want to earn your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-card border-y border-white/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
              Our Core Values
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
                <p className="text-white/70">
                  We tell you exactly what you're paying for, exactly how it works, and exactly what to expect. No surprises.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Simplicity</h3>
                <p className="text-white/70">
                  Complex software doesn't help contractors. Ours is so simple, you'll wonder why everyone else makes it so hard.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Accountability</h3>
                <p className="text-white/70">
                  We only succeed when you succeed. Your wins are our wins. We'll do whatever it takes to make the system work for you.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Respect</h3>
                <p className="text-white/70">
                  You work hard. You own your business. You deserve tools and support that respect your time and intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to See How It Works?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Let's build your lead generation system and get you closing more jobs.
            </p>
            <Button
              size="lg"
              onClick={() => setDemoModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-background font-bold text-lg h-14 px-10 rounded-full shadow-[0_0_20px_-5px_rgba(255,145,77,0.5)]"
              data-testid="button-book-demo-about"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
}
