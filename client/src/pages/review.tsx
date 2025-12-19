import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
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

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    
    // If 4 or 5 stars, redirect to Google review
    if (rating >= 4) {
      // TODO: Replace with your actual Google Place ID
      // You can find your Place ID at: https://developers.google.com/maps/documentation/places/web-service/place-id
      const googlePlaceId = import.meta.env.VITE_GOOGLE_PLACE_ID || "YOUR_PLACE_ID";
      window.location.href = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the feedback to your API
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({ name: "", email: "", feedback: "" });
        setSelectedRating(null);
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const displayRating = hoveredRating ?? selectedRating ?? 0;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-black text-center mb-4">
            How would you rate us?
          </h1>

          {!selectedRating && (
            <div className="flex justify-center gap-2 my-12">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(null)}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
                >
                  <Star
                    className={`w-12 h-12 md:w-16 md:h-16 ${
                      star <= displayRating
                        ? "fill-primary text-primary"
                        : "fill-none text-muted-foreground"
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
          )}

          {selectedRating && selectedRating < 4 && (
            <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="text-center">
                <p className="text-xl text-muted-foreground mb-6">
                  Sorry to hear you aren't satisfied. We'd love to hear your feedback so we can improve.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <p className="text-lg text-primary font-semibold">
                    Thank you for your feedback! We'll review it and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">
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
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
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
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedback" className="text-sm font-medium mb-2 block">
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
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-11"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setSelectedRating(null);
                      setFormData({ name: "", email: "", feedback: "" });
                    }}
                    className="w-full"
                  >
                    Cancel
                  </Button>
                </form>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

