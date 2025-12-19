import { 
  Smartphone, 
  Star, 
  MessageSquare, 
  Repeat, 
  MapPin, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import websiteImg from "@assets/generated_images/mobile_phone_showing_contractor_website.png";
import seoImg from "@assets/generated_images/abstract_digital_network_or_map_for_local_seo.png";

const features = [
  {
    id: "website",
    title: "A Website That Works (Not Just Looks Good)",
    description: "Turn calls into cash. Your website instantly connects leads to your phone for real‑time text conversations. Zero delays. Optimized for mobile because that's where 87% of your customers are.",
    icon: Smartphone,
    image: websiteImg,
    reverse: false
  },
  {
    id: "reviews",
    title: "5‑Star Review Machine",
    description: "We guide your best customers to share what matters—their 5‑star experience. Our system filters out the bad and pumps up the good, automatically following up until they leave a review.",
    icon: Star,
    // Using a placeholder gradient for variety if no image specific
    image: null, 
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-background to-card border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-12 h-12 text-primary fill-primary animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-2">4.9/5</h3>
          <p className="text-white/60">Average Rating</p>
        </div>
      </div>
    ),
    reverse: true
  },
  {
    id: "missed-call",
    title: "Missed Call Text‑Back",
    description: "You miss calls. We don't. Too busy on a job? We instantly text your lead so you don't lose them to the next guy. It shows you care, and it wins jobs.",
    icon: MessageSquare,
    image: null,
    customVisual: (
      <div className="w-full h-full bg-card border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
        <div className="bg-background/50 backdrop-blur rounded-xl p-4 max-w-[80%] mb-4 self-start border border-white/5">
          <p className="text-sm text-white/80">Hey! I saw you called but I'm on a job. How can I help?</p>
        </div>
        <div className="bg-primary text-background rounded-xl p-4 max-w-[80%] self-end">
          <p className="text-sm font-bold">I need a quote for a panel upgrade.</p>
        </div>
      </div>
    ),
    reverse: false
  },
  {
    id: "marketing",
    title: "One‑Click Marketing Campaigns",
    description: "Keep it simple. Reactivate old customers with special offers and get referrals automatically. Push one button, we handle the rest.",
    icon: Repeat,
    image: null,
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-background border border-white/10 rounded-2xl p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="bg-card p-4 rounded-lg border border-white/10 text-center hover:border-primary/50 transition-colors">
            <div className="text-2xl font-bold text-white mb-1">24%</div>
            <div className="text-xs text-white/50">Open Rate</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-white/10 text-center hover:border-primary/50 transition-colors">
            <div className="text-2xl font-bold text-primary mb-1">12</div>
            <div className="text-xs text-white/50">New Jobs</div>
          </div>
          <div className="col-span-2 bg-primary hover:bg-primary/90 transition-colors p-4 rounded-lg flex items-center justify-center cursor-pointer">
            <span className="font-bold text-background">Launch Campaign</span>
          </div>
        </div>
      </div>
    ),
    reverse: true
  },
  {
    id: "seo",
    title: "Local SEO That Actually Works",
    description: "No fake promises. We help you rank for your city and your services. Stop paying for cold leads—build your own pipeline instead.",
    icon: MapPin,
    image: seoImg,
    reverse: false
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Simple Systems. <br />
            <span className="text-primary">Serious Results.</span>
          </h2>
          <p className="text-white/60 text-lg">
            No spreadsheets. No fancy dashboards you'll never look at. 
            Just tools built for people who fix things, not sit in meetings.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {feature.description}
                </p>
                <Button variant="link" className="text-primary p-0 h-auto text-base font-semibold hover:text-white transition-colors group">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full aspect-[4/3] relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
                {feature.image ? (
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl relative z-10"
                  />
                ) : (
                  <div className="w-full h-full relative z-10">
                    {feature.customVisual}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
