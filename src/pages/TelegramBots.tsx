import { Bot, Zap, Target, Link, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { translations, type Locale } from "@/i18n";

interface TelegramBotsProps {
  locale: Locale;
}

export default function TelegramBots({ locale }: TelegramBotsProps) {
  const text = translations[locale].telegramBots;

  const features = [
    {
      icon: Zap,
      title: text.features[0].title,
      description: text.features[0].description,
    },
    {
      icon: Target,
      title: text.features[1].title,
      description: text.features[1].description,
    },
    {
      icon: Link,
      title: text.features[2].title,
      description: text.features[2].description,
    },
    {
      icon: Shield,
      title: text.features[3].title,
      description: text.features[3].description,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <section className="relative py-20 md:py-32 overflow-hidden z-10 pt-28 md:pt-32">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/25">
                <Bot className="w-7 h-7 text-cyan-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              {text.title}
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              {text.subtitle}
            </p>

            <div className="flex justify-center mb-14">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-3xl scale-110" />
                <video
                  src="/assets/tg-bot.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative rounded-2xl w-full max-w-[400px] md:max-w-[500px] object-cover border-2 border-cyan-500/30 shadow-[0_0_48px_rgba(34,211,238,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-cyan-500/20">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-2xl mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm mb-6">
              {text.ctaSmall}
            </p>
            <p className="text-muted-foreground text-base mb-2">{text.ctaReady}</p>
            <p className="text-muted-foreground text-sm mb-6">
              {text.ctaText}
            </p>
            <Button size="lg" className="rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-[0_0_30px_rgba(34,211,238,0.35)]" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                {text.ctaButton}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
