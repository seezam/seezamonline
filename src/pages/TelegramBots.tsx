import { Bot, MessageSquare, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TelegramBots() {
  const features = [
    {
      icon: MessageSquare,
      title: "Автоматическая поддержка",
      description: "Мгновенные ответы на вопросы клиентов, обработка заявок и записей. Ваш бот работает 24/7, не уставая и не делая ошибок. Клиенты получают ответы за секунды, а не часы ожидания."
    },
    {
      icon: Zap,
      title: "Интеграции",
      description: "Подключение к CRM, платежным системам, базам данных и API. Бот становится частью вашей экосистемы — синхронизирует заказы, клиентов, уведомления и отчёты в реальном времени."
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Защита данных, модерация контента и контроль доступа. Настройте роли пользователей, фильтры контента и защиту от спама. Ваши данные и репутация под надёжной охраной."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized background gradients - CSS-only, no images, no JS animations */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Top-left gradient orb */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        {/* Bottom-right gradient orb */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        {/* Subtle center gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
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
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm border border-cyan-500/20">
                <Bot className="w-20 h-20 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
              Разработка <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Telegram-ботов</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Умные боты для автоматизации бизнеса, поддержки клиентов и увеличения продаж 24/7.
              От простых команд до сложных многофункциональных систем — создаю решения, которые работают на вас.
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
                  <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-cyan-500/20">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-semibold text-2xl mb-4">
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
      <section id="contact" className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-mono font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Обсудим ваш проект и создадим бота, который решит ваши задачи.
              Напишите мне — отвечу в течение нескольких часов.
            </p>
            <Button size="lg" variant="glow" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Написать в Telegram
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
