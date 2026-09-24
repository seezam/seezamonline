import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getLocaleFromLocation, getNextLocale, translations } from "@/i18n";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromLocation(location);
  const text = translations[locale].header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocaleToggle = () => {
    const nextLocale = getNextLocale(locale);
    const currentHash = window.location.hash || "#/";
    const baseHash = currentHash.includes("?") ? currentHash.split("?")[0] : currentHash;
    const hash = `${baseHash}?lang=${nextLocale}`;
    window.location.hash = hash;
    navigate({ pathname: location.pathname, search: `?lang=${nextLocale}` }, { replace: true });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to={`/${location.search || ""}`} className="font-mono font-bold text-lg">
            <span className="text-gradient">seezam</span>
            <span className="text-muted-foreground">.online</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleLocaleToggle}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 text-[11px] font-medium tracking-[0.22em] uppercase text-foreground/80 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Toggle language"
            >
              <span className="text-[10px] text-muted-foreground">lang</span>
              <span>{text.languageLabel}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
