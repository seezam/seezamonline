import { Cloud, Layers, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CloudHosting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Layers,
      title: "Гибкая архитектура",
      description: "Микросервисы, контейнеризация (Docker, Kubernetes), serverless — подберу оптимальное решение для вашего проекта. Готово к росту и изменениям."
    },
    {
      icon: Zap,
      title: "Автоматическое масштабирование",
      description: "Ресурсы увеличиваются и уменьшаются автоматически в зависимости от нагрузки. Пики трафика больше не проблема — всё работает плавно."
    },
    {
      icon: Shield,
      title: "Отказоустойчивость",
      description: "Резервирование на уровне серверов, сетей и дата-центров — uptime 99.9%. Ваши сервисы доступны всегда, даже при сбоях оборудования."
    },
    {
      icon: Cloud,
      title: "Pay-as-you-go",
      description: "Оплата только за использованные ресурсы — экономия до 40% по сравнению с фиксированными тарифами. Никаких переплат за простой мощности."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-primary/5 rounded-2xl">
                <Cloud className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              <span className="text-gradient">Облачный хостинг</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Масштабируемая инфраструктура для проектов любого размера — от стартапа до enterprise.
              Современная архитектура, которая растёт вместе с вашим бизнесом.
            </p>
          </motion.div>
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
              Готовы масштабироваться?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Построю облачную инфраструктуру под ваши задачи.
              Аудит текущей архитектуры — бесплатно.
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
