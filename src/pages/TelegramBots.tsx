import { Bot, MessageSquare, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      description: "Подключение к CRM, платёжным системам, базам данных и API. Бот становится частью вашей экосистемы — синхронизирует заказы, клиентов, уведомления и отчёты в реальном времени."
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Защита данных, надёжная аутентификация и контроль доступа; настройка ролей пользователей, фильтры контента и защита от спама. Ваши данные и репутация под надёжной охраной."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden z-10">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon placeholder */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/25">
                <Bot className="w-7 h-7 text-cyan-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-sans font-bold text-center leading-tight mb-5">
              Разработка{" "}
              <span className="text-cyan-400">Telegram-ботов</span>
            </h1>

            <p className="text-center text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-10">
              Умные боты для автоматизации бизнеса, поддержки клиентов и увеличения продаж 24/7. От простых команд до сложных многофункциональных систем — создаём решения, которые работают на вас.
            </p>

            {/* Video */}
            <div className="flex justify-center mb-14">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-3xl scale-110" />
                <video
                  src="/assets/tg-bot.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative rounded-2xl w-full max-w-[400px] md:max-w-[500px] object-cover border-2 border-cyan-500/30 shadow-[0_0_48px_rgba(34,211,238,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - bordered cards */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.12] transition-colors duration-200"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/12 text-cyan-400">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white mb-1 text-sm">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-base mb-2">Готовы начать?</p>
            <p className="text-muted-foreground text-sm mb-6">
              Опишите нам проект и задачи вашего бота. Напишите нам — ответим в течение нескольких часов.
            </p>
            <Button size="lg" className="rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-[0_0_30px_rgba(34,211,238,0.35)]" asChild>
              <a href="https://t.me/seezam" target="_blank" rel="noopener noreferrer">
                Связаться в Telegram
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
