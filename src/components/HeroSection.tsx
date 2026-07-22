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
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Hello!
          </h1>

          {/* Name */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-8 tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            I'm Alex
          </h2>

          {/* Role with line */}
          <div className="relative my-6">
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-cyan-500/40 -translate-y-1/2" />
            <span className="relative px-6 text-xl sm:text-2xl md:text-3xl font-sans text-muted-foreground bg-background">
              AI-Augmented Product Builder
            </span>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Turning ideas into production-ready Telegram Bots, Mini Apps & Web Services in days, not weeks. I architect solutions using AI-powered workflows to deliver fast, scalable products.
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
