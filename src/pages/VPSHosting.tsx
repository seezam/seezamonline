import { Server, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function VPSHosting() {
  const features = [
    {
      icon: Shield,
      title: "Protection & Security",
      description: "DDoS protection, firewalls, regular backups — your data is under reliable guard. Automatic backup and recovery in case of failures."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "NVMe SSD, powerful processors and up to 64GB RAM for any tasks. Dedicated resources without neighbors on the same hardware — stable speed 24/7."
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Data centers in Europe and Asia — choose a location closer to your customers. Low pings and high availability worldwide."
    },
    {
      icon: Server,
      title: "Scalability",
      description: "Instant resource increase without downtime — from 1 to 100+ servers. Adapt to load without moving and downtime."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden z-10">
        <div className="container relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl backdrop-blur-sm border border-orange-500/20">
                <Server className="w-20 h-20 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">VPS Hosting</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              Reliable virtual servers with fast SSD and round-the-clock support.
              Deploy your project in hours, not days. Full control and flexibility for your tasks.
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
                  <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl backdrop-blur-sm border border-orange-500/20">
                    <feature.icon className="w-8 h-8 text-orange-400" />
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
              Need a Server?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I'll help you choose a configuration for your tasks and budget.
              Consultation — free. Selection — within 30 minutes.
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
