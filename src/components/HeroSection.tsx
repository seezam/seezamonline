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
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Привет! Я Алекс  и я разработчик.<br />
            Создаю Telegram-ботов, мини-приложения, веб-сервисы и AI-автоматизации.<br />
            Реализую решения «под ключ» — от идеи и прототипа до готового продукта, который решает реальные задачи бизнеса и пользователей.
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12"
          >
            <img
              src={heroImage}
              alt="AI Development - Code and Neural Networks"
              loading="lazy"
              className="w-full h-auto object-contain max-h-[320px] md:max-h-[520px]"
              style={{
                maskImage: "radial-gradient(black 50%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(black 50%, transparent 70%)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
