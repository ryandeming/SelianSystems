import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            What Working With Us <span className="text-primary">Looks Like</span>
          </h1>
          <p className="text-xl text-white/70">
            Three simple steps. No complicated onboarding. No months of back-and-forth. Just straightforward processes designed for contractors.
          </p>
        </div>

        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}
