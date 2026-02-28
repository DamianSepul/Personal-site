import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { CONFIG } from "../data/config";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 bg-white brutal-border rounded-full flex items-center justify-between px-6 lg:px-8 py-3",
        isScrolled ? "brutal-shadow translate-y-[-2px]" : "brutal-shadow-sm"
      )}
    >
      <div className="flex items-center gap-2 group">
        <a href="#">
          <span className="font-black font-heading text-xl md:text-2xl uppercase tracking-tighter">
            {CONFIG.name.split(" ")[0]} 
            <span className="text-brutal-salmon">_</span>
          </span>
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider text-black">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:bg-brutal-yellow px-3 py-1 border-2 border-transparent hover:border-black rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Action Button & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Button variant="default" size="sm" className="rounded-full" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-black border-2 border-transparent hover:border-black rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="stroke-[3px]" /> : <Menu className="stroke-[3px]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white brutal-border brutal-shadow rounded-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-bold uppercase text-black hover:bg-brutal-yellow px-4 py-3 brutal-border rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="default"
              className="w-full justify-center mt-4 rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
