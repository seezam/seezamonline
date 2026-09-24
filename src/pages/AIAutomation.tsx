import { Cpu, Brain, Zap, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { translations, type Locale } from "@/i18n";

interface AIAutomationProps {
  locale: Locale;
}

export default function AIAutomation({ locale }: AIAutomationProps) {
  const text = translations[locale].aiAutomation;

  const features = [
    {
      icon: Brain,
      title: text.features[0].title,
      description: text.features[0].description,
    },
    {
      icon: Workflow,
      title: text.features[1].title,
      description: text.features[1].description,
    },
    {
      icon: Cpu,
      title: text.features[2].title,
      description: text.features[2].description,
    },
    {
      icon: Zap,
      title: text.features[3].title,
      description: text.features[3].description,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl" />
      </div>

      <section className="relative py-20 md:py-32 overflow-hidden z-10 pt-28 md:pt-32">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-2xl backdrop-blur-sm border border-violet-500/20">
                <Cpu className="w-20 h-20 text-violet-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">{text.title}</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              {text.subtitle}
            </p>
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
                  <div className="p-3 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-xl backdrop-blur-sm border border-violet-500/20">
                    <feature.icon className="w-8 h-8 text-violet-400" />
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

      <section id="contact" className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-6">
              {text.sectionTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {text.sectionDescription}
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                {text.button}
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
