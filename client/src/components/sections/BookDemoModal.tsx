import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDemoModal({ open, onOpenChange }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredMethod: "email",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredMethod: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          preferredContactMethod: formData.preferredMethod,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredMethod: "email",
        message: "",
      });

      // Reset after 3 seconds
      setTimeout(() => {
        onOpenChange(false);
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-white/10 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-white">Book Your Demo</DialogTitle>
          <p className="text-sm text-white/60 mt-2">Tell us about your business and we'll get you set up.</p>
        </DialogHeader>

        {status === "success" ? (
          <div className="text-center py-12">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Thanks for reaching out!</h3>
            <p className="text-white/60">We'll contact you soon to schedule your demo.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName" className="text-white text-sm font-medium mb-2 block">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="bg-background/50 border-white/10 text-white placeholder-white/40"
                  required
                  data-testid="input-first-name"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-white text-sm font-medium mb-2 block">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="bg-background/50 border-white/10 text-white placeholder-white/40"
                  required
                  data-testid="input-last-name"
                />
              </div>
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
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-background/50 border-white/10 text-white placeholder-white/40"
                required
                data-testid="input-email"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white text-sm font-medium mb-2 block">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="bg-background/50 border-white/10 text-white placeholder-white/40"
                required
                data-testid="input-phone"
              />
            </div>

            <div>
              <Label htmlFor="method" className="text-white text-sm font-medium mb-2 block">
                Preferred Contact Method
              </Label>
              <Select value={formData.preferredMethod} onValueChange={handleSelectChange}>
                <SelectTrigger 
                  id="method"
                  className="bg-background/50 border-white/10 text-white"
                  data-testid="select-contact-method"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-white/10">
                  <SelectItem value="email" className="text-white">Email</SelectItem>
                  <SelectItem value="phone" className="text-white">Phone Call</SelectItem>
                  <SelectItem value="text" className="text-white">Text Message</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-white text-sm font-medium mb-2 block">
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business..."
                className="bg-background/50 border-white/10 text-white placeholder-white/40 resize-none"
                rows={3}
                data-testid="textarea-message"
              />
            </div>

            {status === "error" && (
              <div className="flex gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-300">{errorMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-11"
              data-testid="button-submit-demo"
            >
              {status === "loading" ? "Submitting..." : "Schedule Demo"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
