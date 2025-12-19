import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function HowItWorksPage() {
  useMetaTags({
    title: "How It Works - Selian Systems",
    description: "Three simple steps. No complicated onboarding. No months of back-and-forth. Just straightforward processes designed for contractors. See how we build your lead generation system.",
    ogTitle: "How It Works - Selian Systems",
    ogDescription: "Three simple steps. No complicated onboarding. Just straightforward processes designed for contractors.",
  });

  // Update this URL with your actual video URL (YouTube, Vimeo, or hosted video)
  const videoUrl = "";

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

        {/* Video Section */}
        {videoUrl && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative w-full bg-black aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title="Selian Systems Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>
        )}
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}
