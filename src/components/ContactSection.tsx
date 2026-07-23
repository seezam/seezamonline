import { Send, Mail, MessageCircle, MessageSquare, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
            // Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Have a project or an idea? Let's discuss how we can bring it to life efficiently. I usually respond within a few hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="glow" size="lg" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </Button>
            <Button variant="terminal" size="lg" asChild>
              <a href="mailto:hello@seezam.online">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://getchat.online#room/6ep3MmEEoUBpHPffhSH8" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4" />
                text me
              </a>
            </Button>
          </div>

          {/* Terminal-style contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-6 font-mono text-sm text-left"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-muted-foreground">contact.sh</span>
            </div>
            <div className="space-y-2">
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">telegram:</span>{" "}
                <a href="https://t.me/seezam" className="text-foreground hover:text-primary transition-colors">
                  @seezam
                </a>
              </p>
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">x:</span>{" "}
                <a href="https://x.com/SeeZam" target="_blank" className="text-foreground hover:text-primary transition-colors">
                  @SeeZam
                </a>
              </p>
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">email:</span>{" "}
                <a href="mailto:hello@seezam.online" className="text-foreground hover:text-primary transition-colors">
                  hello@seezam.online
                </a>
              </p>
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">textme:</span>{" "}
                <a href="https://getchat.online#room/6ep3MmEEoUBpHPffhSH8" target="_blank" className="text-foreground hover:text-primary transition-colors">
                  getchat.online
                </a>
              </p>
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">website:</span>{" "}
                <a href="https://seezam.online" target="_blank" className="text-foreground hover:text-primary transition-colors">
                  seezam.online
                </a>
              </p>
              <p className="pt-2">
                <span className="text-primary">$</span>{" "}
                <span className="text-green-400">echo</span>{" "}
                <span className="text-foreground">"Ready to ship your next project?"</span>
                <span className="w-2 h-4 bg-primary animate-blink inline-block ml-1" />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
