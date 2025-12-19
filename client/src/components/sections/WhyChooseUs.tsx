import { ShieldCheck, Zap, DollarSign, Wrench } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "No Contracts",
    description: "If it works, you'll stay. Simple as that. We don't need to lock you in."
  },
  {
    icon: Wrench,
    title: "Simple Systems",
    description: "If you can use your phone, you can use Selian. Built for the field, not the office."
  },
  {
    icon: DollarSign,
    title: "Affordable Growth",
    description: "Built for long-term growth, not short-term profit. We scale when you do."
  },
  {
    icon: Zap,
    title: "Proven Results",
    description: "Real systems, real contractors, real wins. We only use what actually works."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Why We're Different <br />
              <span className="text-white/40 text-2xl md:text-3xl leading-tight">(But Also Not Pretending To Be Magic)</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              No agency has a secret "hack" to make you rich overnight. 
              We just give you the tools that actually work—and we make sure you know how to use them.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{reason.title}</h4>
                    <p className="text-sm text-white/60">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-3xl opacity-30 rounded-full" />
             <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 relative">
               <h3 className="text-2xl font-bold text-white mb-6">Who We Serve</h3>
               <div className="flex flex-wrap gap-3">
                 {["Plumbers", "Electricians", "Roofers", "HVAC Techs", "Landscapers", "Painters", "General Contractors"].map((tag) => (
                   <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-primary/30 transition-all cursor-default">
                     {tag}
                   </span>
                 ))}
               </div>
               <div className="mt-8 pt-8 border-t border-white/10">
                 <p className="text-lg font-medium text-white italic">
                   "If you own the tools, we've got the system."
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
