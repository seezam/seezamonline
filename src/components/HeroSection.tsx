import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-glow-secondary/20 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Terminal-style badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 font-mono text-sm"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">$</span>
            <span>AI Developer</span>
            <span className="w-2 h-4 bg-primary animate-blink" />
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold mb-6 tracking-tight">
            <span className="text-gradient">seezam</span>
            <span className="text-muted-foreground">.online</span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
          >
            Разработка Telegram-ботов, мини-приложений, 
            веб-сервисов и AI-автоматизаций под ключ
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="glow" size="lg" asChild>
              <a href="#contact">
                Связаться
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="terminal" size="lg" asChild>
              <a href="#services">
                <span className="text-muted-foreground mr-1">$</span>
                ./services
              </a>
            </Button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src={heroImage}
                alt="AI Development - Code and Neural Networks"
                loading="lazy"
                className="w-full h-auto object-contain max-h-[320px] md:max-h-[520px]"
              />
            </div>
            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-xl -z-10" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8"
          >
            {[
              { value: "50+", label: "Проектов" },
              { value: "3+", label: "Года опыта" },
              { value: "24/7", label: "Поддержка" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-mono font-bold text-primary glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
