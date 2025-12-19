import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Home() {
  useMetaTags({
    title: "Selian Systems - Websites & Automation for Contractors",
    description: "Cut the BS. Get paid. Simple marketing and CRM tools for plumbers, electricians, and contractors. Build. Track. Convert. Get paid.",
    ogTitle: "Selian Systems - Websites & Automation for Contractors",
    ogDescription: "Cut the BS. Simple marketing and CRM tools for plumbers, electricians, and contractors. Build. Track. Convert. Get paid.",
  });
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
