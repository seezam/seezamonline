import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import { translations, type Locale } from "@/i18n";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const text = translations[locale].hero;
  const [greetingLine, nameLine = ""] = text.greeting.split("\n");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-glow-secondary/20 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="mx-auto max-w-3xl text-[2.2rem] leading-[1.05] tracking-[-0.06em] text-foreground sm:text-[3rem] md:text-[4rem] lg:text-[4.8rem]">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {greetingLine}
            </span>
            {nameLine ? (
              <span className="mt-1 block text-[0.72em] sm:text-[0.74em] md:text-[0.76em] lg:text-[0.78em] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                {nameLine}
              </span>
            ) : null}
          </h1>

          <h2 className="mx-auto mt-5 max-w-4xl text-[1.45rem] leading-[1.1] tracking-[-0.05em] text-foreground sm:text-[2rem] md:text-[2.8rem] lg:text-[3.6rem]">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {text.title}
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
          >
            {text.subtitle}
          </motion.p>

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
