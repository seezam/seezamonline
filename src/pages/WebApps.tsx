import { Globe, Code, Zap, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WebApps() {
  const features = [
    {
      icon: Code,
      title: "Modern Stack",
      description: "React 18, TypeScript, Next.js, TailwindCSS — the best tools for quality products. Clean code, modular architecture and easy maintenance in the future."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Loading optimization, lazy loading, code splitting — your site will fly. Google PageSpeed in the green zone and happy users."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect display on all devices — from mobile to desktop. Mobile-first approach and testing on real devices."
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "SSR and SSG for better search engine ranking. Proper structure, meta tags and microdata for maximum reach."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden z-10">
        <div className="container relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl backdrop-blur-sm border border-emerald-500/20">
                <Globe className="w-20 h-20 text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Web Applications</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              Modern SPA and PWA on React, Vue, Next.js — fast, scalable and user-friendly.
              From landing pages to complex platforms — I create solutions that grow with your business.
            </p>
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
                  <div className="p-3 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl backdrop-blur-sm border border-emerald-500/20">
                    <feature.icon className="w-8 h-8 text-emerald-400" />
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
              Need a Web Application?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              From landing page to complex platform — I'll do it quality and on time.
              We'll discuss your task and find the optimal solution.
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
