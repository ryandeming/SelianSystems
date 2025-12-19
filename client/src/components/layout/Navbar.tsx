import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-black tracking-tighter text-white cursor-pointer decoration-none">
          SELIAN<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-white/80 hover:text-white transition-colors">How it Works</a>
          <a href="#why-us" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Why Us</a>
          <Button className="bg-primary hover:bg-primary/90 text-background font-bold rounded-full px-6">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-white/10">
            <div className="flex flex-col gap-6 mt-10">
              <a href="#features" className="text-lg font-medium text-white">Features</a>
              <a href="#how-it-works" className="text-lg font-medium text-white">How it Works</a>
              <a href="#why-us" className="text-lg font-medium text-white">Why Us</a>
              <Button className="bg-primary hover:bg-primary/90 text-background font-bold w-full">
                Book a Demo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
