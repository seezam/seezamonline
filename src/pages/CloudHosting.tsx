import { Cloud, Layers, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CloudHosting() {
  const features = [
    {
      icon: Layers,
      title: "Flexible Architecture",
      description: "Microservices, containerization (Docker, Kubernetes), serverless — I'll find the optimal solution for your project. Ready for growth and changes."
    },
    {
      icon: Zap,
      title: "Auto-scaling",
      description: "Resources increase and decrease automatically based on load. Traffic spikes are no longer a problem — everything works smoothly."
    },
    {
      icon: Shield,
      title: "Fault Tolerance",
      description: "Redundancy at the server, network and data center level — 99.9% uptime. Your services are always available, even during hardware failures."
    },
    {
      icon: Cloud,
      title: "Pay-as-you-go",
      description: "Pay only for used resources — save up to 40% compared to fixed tariffs. No overpayments for idle capacity."
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
              <span className="text-gradient">Cloud Hosting</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              Scalable infrastructure for projects of any size — from startup to enterprise.
              Modern architecture that grows with your business.
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
              I'll build cloud infrastructure for your tasks.
              Audit of current architecture — free.
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
