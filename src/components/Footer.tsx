import { motion } from "framer-motion";
import { translations, type Locale } from "@/i18n";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const text = translations[locale].footer;

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <div className="font-mono text-sm">
            <span className="text-gradient font-bold">seezam</span>
            <span className="text-muted-foreground">.online</span>
          </div>

          <p className="text-muted-foreground text-xs md:text-sm font-mono">
            © {currentYear}
          </p>

          <div className="text-xs md:text-sm text-muted-foreground font-mono">
            seezam.online
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
