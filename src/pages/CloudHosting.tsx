import { Cloud, Layers, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CloudHosting() {
  const features = [
    {
      icon: Layers,
      title: "Modern Architecture",
      description: "Microservices, Docker containers, and Kubernetes orchestration. Built for flexibility and easy updates."
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Resources automatically adjust based on traffic. Traffic spikes are no longer a problem — everything works smoothly."
    },
    {
      icon: Shield,
      title: "High Availability",
      description: "Redundant setups and proactive monitoring to ensure your service stays online (targeting 99.9% uptime)."
    },
    {
      icon: Cloud,
      title: "Cost Optimization",
      description: "Pay-as-you-go architectures that eliminate wasted spend on idle resources. No overpaying for fixed servers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-primary/5 rounded-2xl">
                <Cloud className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              <span className="text-gradient">Cloud Infrastructure</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              Scalable, resilient cloud architecture designed for growth. From startups to enterprise — infrastructure that adapts to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Features - Clean layout without blocks */}
      <section className="py-20">
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
                  <div className="p-3 bg-primary/5 rounded-xl">
                    <feature.icon className="w-8 h-8 text-primary" />
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

      {/* CTA - Simple and clean */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-6">
              Ready to Scale?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Let's audit your current setup or design a cost-effective cloud architecture from scratch.
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
