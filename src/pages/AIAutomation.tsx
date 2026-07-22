import { Cpu, Brain, Zap, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AIAutomation() {
  const features = [
    {
      icon: Brain,
      title: "LLM Integrations",
      description: "Connect GPT, Claude and other models for content generation, data analysis, chatbots. Intelligent systems that understand context and learn from your data."
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Document processing, request classification, report generation — AI takes over the routine. Free your team for creative and strategic tasks."
    },
    {
      icon: Cpu,
      title: "Custom Models",
      description: "Retraining neural networks on your data — get accurate answers for your niche. Specialized models for medicine, law, e-commerce and other fields."
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "MVP in 2-4 weeks — from prototype to production with full integration into your stack. Test your hypothesis quickly and without big investments."
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
                <Cpu className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              <span className="text-gradient">AI Automation</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              Neural networks and LLM integration into business processes — automating routine tasks with AI.
              Turn artificial intelligence into a real growth tool for your business.
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
              Want to Implement AI?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I'll analyze your processes and suggest automation points.
              Free audit — find out where AI will save you time and money.
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
