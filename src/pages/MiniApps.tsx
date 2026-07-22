import { Smartphone, Layers, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MiniApps() {
  const features = [
    {
      icon: Layers,
      title: "Any Functionality",
      description: "E-commerce, booking, games, dashboards — everything that works in a browser works in Telegram. Create full-featured applications without platform restrictions."
    },
    {
      icon: Zap,
      title: "Instant Launch",
      description: "Users open the app in one click, without registration or download. No App Store, Google Play or long installations — straight to business."
    },
    {
      icon: Globe,
      title: "Cross-platform",
      description: "One app works on iOS, Android and Desktop — everywhere where Telegram exists. No need to maintain three separate codebases anymore."
    },
    {
      icon: Smartphone,
      title: "Native UX",
      description: "Integration with Telegram interface, theming and native gestures. The app feels like part of the messenger, not a third-party website."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden z-10">
        <div className="container relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              Telegram <span className="text-purple-400">Mini Apps</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              Full-featured web applications right inside Telegram — without installing additional software. From online stores to gaming platforms — everything works in one place.
            </p>

            {/* Video */}
            <div className="flex justify-center mb-14">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-3xl scale-110" />
                <video
                  src="/assets/tg-miniapp.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative rounded-2xl w-full max-w-[400px] md:max-w-[500px] object-cover border-2 border-purple-500/30 shadow-[0_0_48px_rgba(168,85,247,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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
                  <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                    <feature.icon className="w-8 h-8 text-purple-400" />
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

      {/* CTA */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-6">
              Idea for a Mini App?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Tell me about your project — we'll discuss technical implementation and timelines.
              I'll help turn your concept into a working application.
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Discuss Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
