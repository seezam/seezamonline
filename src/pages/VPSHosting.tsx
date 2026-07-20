import { Server, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function VPSHosting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Защита и безопасность",
      description: "DDoS-защита, брандмауэры, регулярные бэкапы — ваши данные под надёжной охраной. Автоматическое резервное копирование и восстановление в случае сбоев."
    },
    {
      icon: Zap,
      title: "Высокая производительность",
      description: "NVMe SSD, мощные процессоры и до 64GB RAM для любых задач. Выделенные ресурсы без соседей на одном железе — стабильная скорость 24/7."
    },
    {
      icon: Globe,
      title: "Глобальная доступность",
      description: "Дата-центры в Европе и Азии — выбирайте локацию ближе к вашим клиентам. Низкие пинги и высокая доступность по всему миру."
    },
    {
      icon: Server,
      title: "Масштабируемость",
      description: "Мгновенное увеличение ресурсов без простоя — от 1 до 100+ серверов. Адаптируйтесь под нагрузку без переездов и простоев."
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl backdrop-blur-sm border border-orange-500/20">
                <Server className="w-20 h-20 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">VPS Хостинг</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Надёжные виртуальные серверы с быстрым SSD и круглосуточной поддержкой.
              Разверните свой проект за часы, а не дни. Полная контроль и гибкость под ваши задачи.
            </p>
          </motion.div>
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
              Нужен сервер?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Помогу выбрать конфигурацию под ваши задачи и бюджет.
              Консультация — бесплатно. Подбор — за 30 минут.
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Консультация
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
