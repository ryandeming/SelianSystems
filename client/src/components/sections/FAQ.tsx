import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "0",
    question: "When am I going to start seeing results?",
    answer: "That depends on your current situation. If you have a website and some reviews, you might see results in 30-90 days. If you're starting from scratch, it could take 3-6 months to see a noticable difference. The most important is that you commit to using our system. If you think you're going to pay us $247 a month and we're going to magically make you rich, we're probably not the right fit for you. We're here to help grow your business by giving your online business a solid foundation, not perform miracles. Explain how you help me grow my business"
  },
  {
    id: "1",
    question: "How long does it take to set up?",
    answer: "We handle the setup in 7-10 days. You provide your business info, and we build your website, CRM, and automation system. Then we do a 25-minute launch call to walk you through everything."
  },
  {
    id: "2",
    question: "Do I need any technical skills?",
    answer: "Nope. If you can use your phone, you can use Selian. The entire system is designed for contractors—not tech people. Just two buttons and one phone notification."
  },
  {
    id: "3",
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts. If the system works for you, you'll stay. If not, you can cancel anytime. We built it that way because we're confident in what we deliver."
  },
  {
    id: "4",
    question: "Will you help me get leads right away?",
    answer: "We set up your system so you can start getting leads immediately. But real SEO takes time—usually 3-6 months to see significant organic growth. Your website and automation start working from day one though."
  },
  {
    id: "5",
    question: "What if I already have a website?",
    answer: "We can build you a new one optimized for lead generation, or we can integrate our system with your existing site. Either way, we make sure it converts."
  },
  {
    id: "6",
    question: "Do you handle the follow-up for me?",
    answer: "No. We automate parts of your follow-up process, but we don't do the actual follow-up for you. We believe in building systems that work for you, not replace you. You still need to be the one to follow up with your leads."
  },
  {
    id: "7",
    question: "What if I don't like the results?",
    answer: "We work with you to optimize the system. Most contractors see results within the first 30-90 days. If it's not working, we'll adjust it or you can cancel—no strings attached."
  },
  {
    id: "8",
    question: "Do you support all types of contractors?",
    answer: "Yes. Plumbers, electricians, roofers, HVAC techs, painters, landscapers—if you own tools and fix things, we've got the system for you."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-white/60 text-lg">
            We've got answers. Here's what contractors ask us most.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card border border-white/10 rounded-lg px-6 overflow-hidden hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-white font-semibold text-lg py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-5 pt-0">
                  {faq.answer}
                  { (faq.id === "0") &&
                    <div>
                  <span className="text-primary font-bold block text-xl my-6">Explain how you help me grow my business</span>
                  <p className="font-bold my-4">No problem.</p>
                  <ol className="font-bold my-4 leading-loose">
                    <li>1. Do you believe having more 5 star reviews will attract more customers?</li>
                    <li>2. Do you believe that having a professional website that really works will help you convert more visitors into leads?</li>
                    <li>3. Do you believe that immediately following up with incoming leads will make them more likely to book a job?</li>
                    <li>4. Do you believe that automated re-marketing campaigns will make old customers more likely to work with you again?</li>
                    <li>5. Do you believe offering discounts for friends and family of your previous customers will increase the number of referrals you get?</li>
                    <li>6. Do you believe using automated systems could free you from the monotony of doing boring business tasks and give you more time for other things?</li>
                    <li>7. Do you believe having these types of systems in place is important for growing your business?</li>
                  </ol>
                  <p className="font-bold my-4">If you answered yes to any of these questions, then we can help you.</p>
                       </div>
                }
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
