import { Cpu, Brain, Zap, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AIAutomation() {
  const features = [
    {
      icon: Brain,
      title: "LLM интеграции",
      description: "Подключение GPT, Claude и других моделей для генерации контента, анализа данных, чат-ботов. Интеллектуальные системы, которые понимают контекст и учатся на ваших данных."
    },
    {
      icon: Workflow,
      title: "Автоматизация процессов",
      description: "Обработка документов, классификация запросов, генерация отчётов — ИИ берёт рутину на себя. Освободите команду для творческих и стратегических задач."
    },
    {
      icon: Cpu,
      title: "Кастомные модели",
      description: "Дообучение нейросетей на ваших данных — получайте точные ответы для вашей ниши. Специализированные модели для медицины, юриспруденции, e-commerce и других областей."
    },
    {
      icon: Zap,
      title: "Быстрое внедрение",
      description: "MVP за 2-4 недели — от прототипа до продакшена с полной интеграцией в ваш стек. Проверьте гипотезу быстро и без больших инвестиций."
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
                <Cpu className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              <span className="text-gradient">AI Автоматизации</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Интеграция нейросетей и LLM в бизнес-процессы — автоматизация рутинных задач с помощью ИИ.
              Превратите искусственный интеллект в реальный инструмент роста вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  ← На главную
                </Link>
              </Button>
            </div>
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
              Хотите внедрить ИИ?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Проанализирую ваши процессы и предложу точки автоматизации.
              Бесплатный аудит — узнайте, где ИИ сэкономит вам время и деньги.
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Бесплатная консультация
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
