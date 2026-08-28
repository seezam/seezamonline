import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="font-mono text-sm">
            <span className="text-gradient font-bold">seezam</span>
            <span className="text-muted-foreground">.online</span>
          </div>
          
          <p className="text-muted-foreground text-sm font-mono">
            © {currentYear} · Seezam · Built with AI & clean architecture
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a 
              href="https://t.me/seezam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-mono"
            >
              tg
            </a>
            <span className="text-border">|</span>
            <a 
              href="mailto:hello@seezam.online"
              className="hover:text-primary transition-colors font-mono"
            >
              mail
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
