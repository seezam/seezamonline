import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-mono font-bold text-lg">
            <span className="text-gradient">seezam</span>
            <span className="text-muted-foreground">.online</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#services"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </a>
            <a
              href="/#contact"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
            <Button variant="terminal" size="sm" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                <span className="text-muted-foreground mr-1">$</span>
                connect
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-border">
                <a
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Контакты
                </a>
                <Button variant="terminal" size="sm" className="w-full" asChild>
                  <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                    <span className="text-muted-foreground mr-1">$</span>
                    connect
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
