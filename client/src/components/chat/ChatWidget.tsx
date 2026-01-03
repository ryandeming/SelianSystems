import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageCircle, X, Send, CheckCircle2 } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
    message: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setErrorMessage("Please confirm that you understand we may contact you.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const bearerToken = import.meta.env.VITE_SELIAN_API_TOKEN || "";
      
      const response = await fetch("https://portal.seliansystems.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(bearerToken && { "Authorization": `Bearer ${bearerToken}` }),
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: "", // Not required for chat widget
          phone: formData.phone,
          source: "chat_widget",
          preferred_contact_method: "text",
          details: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      // Store submitted data to display as a message
      setSubmittedData({ ...formData });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", phone: "", message: "", consent: false });
      
      // Delay showing the success message by 1 second
      setTimeout(() => {
        setShowSuccessMessage(true);
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowNotification(false); // Clear notification when opening
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after a delay to allow close animation
    setTimeout(() => {
      setIsSubmitted(false);
      setShowSuccessMessage(false);
      setSubmittedData(null);
      setErrorMessage("");
    }, 300);
  };

  // Show notification badge after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleOpen}
            className="w-14 h-14 bg-primary hover:bg-primary/90 text-background rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group relative"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {showNotification && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                1
              </span>
            )}
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-card border-2 border-white/10 rounded-2xl shadow-2xl flex flex-col h-[700px] max-h-[700px] animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary/10 border-b border-white/10 px-4 py-3 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-semibold text-white">Selian Systems</span>
            </div>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-background/50">
            {/* Initial Message */}
            <div className="flex items-end gap-2">
              <div className="flex-1 max-w-[75%]">
                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 inline-block">
                  <p className="text-white text-sm leading-relaxed">
                    Text me any questions and I'll get back to you ASAP
                  </p>
                </div>
              </div>
            </div>

            {/* User's Submitted Message */}
            {submittedData && (
              <div className="flex items-end gap-2 justify-end animate-in fade-in slide-in-from-bottom-2">
                <div className="flex-1 flex justify-end max-w-[75%]">
                  <div className="bg-blue-500 rounded-2xl rounded-br-sm px-3 py-2 inline-block">
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                      {submittedData.firstName} {submittedData.lastName}
                      {"\n"}
                      {submittedData.phone}
                      {"\n"}
                      {submittedData.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="flex items-end gap-2 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex-1 max-w-[75%]">
                  <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 inline-block">
                    <p className="text-white text-sm leading-relaxed">
                      Thank you! I will text you back as soon as I can.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                <p className="text-red-300 text-sm">{errorMessage}</p>
              </div>
            )}
          </div>

          {/* Form */}
          {!isSubmitted && (
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 space-y-3 bg-background/50">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                  className="bg-background/50 border-white/10 text-white placeholder-white/40 focus:border-primary"
                />
                <Input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                  className="bg-background/50 border-white/10 text-white placeholder-white/40 focus:border-primary"
                />
              </div>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
                className="bg-background/50 border-white/10 text-white placeholder-white/40 focus:border-primary"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                rows={3}
                required
                className="bg-background/50 border-white/10 text-white placeholder-white/40 resize-none focus:border-primary"
              />
              <div className="flex items-start gap-2">
                <Checkbox
                  id="chat-consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, consent: checked === true }))
                  }
                  className="mt-0.5"
                  required
                />
                <Label
                  htmlFor="chat-consent"
                  className="text-xs text-white/70 leading-relaxed cursor-pointer"
                >
                  By submitting this form, I understand that Selian Systems may contact me regarding my inquiry or their services.
                </Label>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Footer */}
          <div className="px-4 py-2 border-t border-white/10 bg-background/50 rounded-b-2xl">
            <p className="text-xs text-white/40 text-center">
              Powered by{" "}
              <a
                href="https://seliansystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                SelianSystems
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

