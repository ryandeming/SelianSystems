import { 
  Smartphone, 
  Star, 
  MessageSquare, 
  Repeat, 
  MapPin, 
  ArrowRight,
  Play,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import websiteImg from "@assets/generated_images/mobile_phone_contractor_site.webp";
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
      <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end shadow-2xl border border-gray-700">
        {/* Phone frame */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 h-8 w-2/3 rounded-b-3xl border-x border-b border-gray-700" />
        
        {/* Messages */}
        <div className="space-y-3 pb-4">
          {/* Received message */}
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%] shadow-lg">
              <p className="text-sm">Hey! I saw you called but I'm on a job. How can I help?</p>
              <p className="text-xs text-gray-300 mt-1">2:34 PM</p>
            </div>
          </div>
          
          {/* Sent message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%] shadow-lg">
              <p className="text-sm font-medium">I need a quote for a panel upgrade.</p>
              <p className="text-xs text-blue-100 mt-1">2:36 PM</p>
            </div>
          </div>
        </div>
        
        {/* Input field */}
        <div className="flex gap-2 items-end">
          <input type="text" placeholder="Message..." className="flex-1 bg-gray-700 text-white rounded-2xl px-4 py-2 text-sm placeholder-gray-400 outline-none" disabled />
          <div className="bg-blue-500 text-white rounded-full p-2 cursor-default">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.6563168,11.6889879 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99021575 L3.03521743,10.4311088 C3.03521743,10.5882061 3.19218622,10.7453035 3.50612381,10.7453035 L16.6915026,11.5307904 C16.6915026,11.5307904 17.1624089,11.5307904 17.1624089,12.0020826 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" /></svg>
          </div>
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
      <div className="w-full h-full space-y-6">
        {/* Sample text message above campaigns */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-4 relative overflow-hidden shadow-xl border border-gray-700">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 h-6 w-2/3 rounded-b-2xl border-x border-b border-gray-700" />
          <div className="space-y-2 mt-4">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-2xl rounded-tr-md px-3 py-2 max-w-[80%] text-sm">
                Hey Josh, it's Mike from MainLineFlow. It was a pleasure working with you! I'm offering 10% off your next job and this discount applies to your friends and family as well :)
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] text-sm">
                Thanks! I'll tell my brother
              </div>
            </div>
          </div>
        </div>

        {/* Campaign stats */}
        <div className="bg-gradient-to-br from-blue-900/20 to-background border border-white/10 rounded-2xl p-6 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="bg-card p-4 rounded-lg border border-white/10 text-center hover:border-primary/50 transition-colors">
              <div className="text-2xl font-bold text-white mb-1">24%</div>
              <div className="text-xs text-white/50">Open Rate</div>
            </div>
            <div className="bg-card p-4 rounded-lg border border-white/10 text-center hover:border-primary/50 transition-colors">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-xs text-white/50">New Jobs</div>
            </div>
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
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const demoVideos: Record<string, string> = {
    "website": "",
    "reviews": "",
    "missed-call": "",
    "marketing": "",
    "seo": "",
  };

  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Simple Systems. <br />
            <span className="text-primary">Serious Results.</span>
          </h2>
          <p className="text-white/60 text-lg">
            Tools built for people who fix things, not sit in meetings.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-20`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {feature.description}
                </p>
                {demoVideos[feature.id] && (
                  <button 
                    onClick={() => setSelectedDemo(feature.id)}
                    className="text-primary p-0 h-auto text-base font-semibold hover:text-white transition-colors group flex items-center gap-2 mt-4"
                  >
                    <Play className="w-4 h-4" />
                    View Quick Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
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

      {/* Video Demo Modal */}
      <Dialog open={!!selectedDemo} onOpenChange={(open) => !open && setSelectedDemo(null)}>
        <DialogContent className="bg-background border-white/10 max-w-4xl p-0 overflow-hidden">
          <div className="relative w-full bg-black aspect-video">
            {selectedDemo && demoVideos[selectedDemo] && (
              <iframe
                width="100%"
                height="100%"
                src={demoVideos[selectedDemo]}
                title="Quick Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            )}
          </div>
          <DialogClose className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors">
            <X className="h-6 w-6 text-white" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
