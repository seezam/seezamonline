import { Bot, Globe, Server, Cloud, Sparkles, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "Telegram Боты",
    description: "Умные боты для автоматизации бизнеса и взаимодействия с клиентами",
    tag: "bot",
  },
  {
    icon: Sparkles,
    title: "Telegram Mini Apps",
    description: "Полнофункциональные приложения внутри Telegram",
    tag: "mini-app",
  },
  {
    icon: Globe,
    title: "Веб-приложения",
    description: "Современные SPA и PWA на React, Vue, Next.js",
    tag: "web",
  },
  {
    icon: Server,
    title: "VPS Хостинг",
    description: "Надёжные виртуальные серверы с быстрым SSD",
    tag: "vps",
  },
  {
    icon: Cloud,
    title: "Облачный хостинг",
    description: "Масштабируемая инфраструктура для ваших проектов",
    tag: "cloud",
  },
  {
    icon: Cpu,
    title: "AI Автоматизации",
    description: "Интеграция нейросетей и LLM в ваши процессы",
    tag: "ai",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
            // Услуги
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Что я делаю
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Полный цикл разработки — от идеи до продакшена
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.tag}
              variants={item}
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
            >
              <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
                [{service.tag}]
              </div>
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-mono font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
