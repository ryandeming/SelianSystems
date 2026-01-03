import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";
import { BookDemoModal } from "./BookDemoModal";

export function Footer() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <footer className="bg-card border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* CTA Banner */}
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden mb-20">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-black text-background mb-6">
              STOP MISSING LEADS. <br />
              START CLOSING JOBS.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setDemoModalOpen(true)}
                className="bg-background text-primary hover:bg-white font-bold text-lg h-14 px-10 rounded-full"
                data-testid="button-book-demo-footer"
              >
                Book a Call
              </Button>
            </div>
          </div>
          
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H100V100H0V0Z" fill="black"/>
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-display font-black tracking-tighter text-white mb-6 block cursor-pointer decoration-none">
              SELIAN<span className="text-primary">SYSTEMS</span>
            </Link>
            <p className="text-white/60 max-w-sm">
              Simple marketing and CRM tools for contractors. 
              Build. Track. Convert. Get paid.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-primary transition-colors cursor-pointer decoration-none">About</Link></li>
              <li><Link href="/how-it-works" className="text-white/60 hover:text-primary transition-colors cursor-pointer decoration-none">How It Works</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-primary transition-colors cursor-pointer decoration-none">Pricing</Link></li>
              <li><button onClick={() => setDemoModalOpen(true)} className="text-white/60 hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit text-left" data-testid="button-contact-footer">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/60 hover:text-primary transition-colors cursor-pointer decoration-none">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-primary transition-colors cursor-pointer decoration-none">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Selian Systems. All rights reserved.
        </div>
        <div className="text-center text-white/40 text-sm">
          Selian Systems is a DBA of INNOVUS, LLC.
        </div>
      </div>

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </footer>
  );
}
