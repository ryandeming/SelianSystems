import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Sparkles, AlertCircle } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Review() {
  useMetaTags({
    title: "Rate Your Experience - Selian Systems",
    description: "How would you rate your experience with Selian Systems? Share your feedback and help us improve our services for contractors.",
    ogTitle: "Rate Your Experience - Selian Systems",
    ogDescription: "How would you rate your experience with Selian Systems? Share your feedback and help us improve.",
  });
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    
    // If 4 or 5 stars, redirect to Google review
    if (rating >= 4) {
      const googlePlaceId = import.meta.env.VITE_GOOGLE_PLACE_ID || "ChIJb8eMbquVxokRd0twZHdKAfI";
      window.location.href = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const bearerToken = import.meta.env.VITE_SELIAN_API_TOKEN || "";
      
      const response = await fetch("https://portal.seliansystems.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(bearerToken && { "Authorization": `Bearer ${bearerToken}` }),
        },
        body: JSON.stringify({
          rating: selectedRating,
          name: formData.name,
          email: formData.email,
          feedback: formData.feedback,
          source: "review_page",
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit feedback. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const displayRating = hoveredRating ?? selectedRating ?? 0;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Share Your Experience
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
                How would you <span className="text-primary">rate us?</span>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Your feedback helps us serve contractors better. We appreciate every review!
              </p>
            </div>

            {/* Rating Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl opacity-30" />
              
              {/* Card */}
              <div className="relative bg-card border-2 border-white/10 rounded-3xl p-8 md:p-12">
                {!selectedRating && (
                  <div className="text-center">
                    <p className="text-lg text-white/70 mb-8">
                      Click a star to rate your experience
                    </p>
                    <div className="flex justify-center gap-3 md:gap-4 my-12">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(null)}
                          className="transition-all hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
                          aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
                        >
                          <Star
                            className={`w-10 h-10 md:w-20 md:h-20 transition-all ${
                              star <= displayRating
                                ? "fill-primary text-primary drop-shadow-[0_0_15px_rgba(255,145,77,0.5)] scale-110"
                                : "fill-none text-white/30"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-white/50 mt-4">
                      {displayRating > 0 && `${displayRating} out of 5 stars`}
                    </p>
                  </div>
                )}

                {selectedRating && selectedRating >= 4 && (
                  <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                      <Star className="w-10 h-10 text-primary fill-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      Thank you for the {selectedRating}-star rating!
                    </h2>
                    <p className="text-lg text-white/70 mb-6">
                      We're redirecting you to Google to leave your review...
                    </p>
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                )}

                {selectedRating && selectedRating < 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <div className="text-center pb-6 border-b border-white/10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Star className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                        We'd Love to Hear From You
                      </h2>
                      <p className="text-white/70">
                        Sorry to hear you aren't satisfied. We'd love to hear your feedback so we can improve.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-white/70">
                          We've received your feedback and will review it soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div>
                          <Label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                            className="bg-background/50 border-white/10 text-white placeholder-white/40 focus:border-primary"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="bg-background/50 border-white/10 text-white placeholder-white/40 focus:border-primary"
                          />
                        </div>

                        <div>
                          <Label htmlFor="feedback" className="text-white text-sm font-medium mb-2 block">
                            Feedback
                          </Label>
                          <Textarea
                            id="feedback"
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleInputChange}
                            placeholder="Tell us what we can improve..."
                            rows={5}
                            required
                            className="bg-background/50 border-white/10 text-white placeholder-white/40 resize-none focus:border-primary"
                          />
                        </div>

                        {errorMessage && (
                          <div className="flex gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                            <p className="text-sm text-red-300">{errorMessage}</p>
                          </div>
                        )}

                        <div className="flex gap-3 pt-4">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-primary hover:bg-primary/90 text-background font-bold h-12 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? "Submitting..." : "Submit Feedback"}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setSelectedRating(null);
                              setFormData({ name: "", email: "", feedback: "" });
                              setErrorMessage("");
                            }}
                            className="px-6 border-white/20 text-white hover:bg-white/10"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}