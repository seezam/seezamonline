import { Bot, Globe, Server, Cloud, Cpu, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { translations, type Locale } from "@/i18n";

const serviceIcons = {
  bot: Bot,
  "mini-app": Smartphone,
  web: Globe,
  vps: Server,
  cloud: Cloud,
  ai: Cpu,
};

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

interface ServicesSectionProps {
  locale: Locale;
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const text = translations[locale].services;

  const services = text.items.map((service) => ({
    ...service,
    icon: serviceIcons[service.tag as keyof typeof serviceIcons],
  }));

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
            {text.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
            {text.heading}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {text.subheading}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link key={service.tag} to={service.path} className="block h-full">
                <motion.div
                  key={service.tag}
                  variants={item}
                  className="group relative h-full p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow cursor-pointer"
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-sans font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
