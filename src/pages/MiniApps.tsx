import { Smartphone, Layers, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MiniApps() {
  const features = [
    {
      icon: Layers,
      title: "Любая функциональность",
      description: "E-commerce, бронирование, игры, дашборды — всё, что работает в браузере, работает в Telegram. Создавайте полноценные приложения без ограничений платформы."
    },
    {
      icon: Zap,
      title: "Мгновенный запуск",
      description: "Пользователи открывают приложение в один клик, без регистрации и скачивания. Никаких App Store, Google Play или долгих установок — сразу к делу."
    },
    {
      icon: Globe,
      title: "Кроссплатформенность",
      description: "Одно приложение работает на iOS, Android и Desktop — везде где есть Telegram. Больше не нужно поддерживать три разные коды базы."
    },
    {
      icon: Smartphone,
      title: "Нативный UX",
      description: "Интеграция с интерфейсом Telegram, темизация и нативные жесты. Приложение ощущается как часть мессенджера, а не сторонний сайт."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
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
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20">
                <Smartphone className="w-20 h-20 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
              Telegram <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Mini Apps</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Полнофункциональные веб-приложения прямо внутри Telegram — без установки дополнительных программ.
              От интернет-магазинов до игровых платформ — всё работает в одном месте.
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
                  <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                    <feature.icon className="w-8 h-8 text-purple-400" />
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

      {/* CTA */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-mono font-bold mb-6">
              Идея для Mini App?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Расскажи о проекте — обсудим техническую реализацию и сроки.
              Помогу превратить концепт в работающее приложение.
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
