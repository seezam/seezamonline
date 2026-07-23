import { Bot, Globe, Server, Cloud, Sparkles, Cpu, Smartphone, Layout, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

  const services = [
  {
    icon: Bot,
    title: "Telegram bots",
    description: "Smart automation for customer engagement and business processes inside Telegram",
    tag: "bot",
    path: "/telegram-bots"
  },
  {
    icon: Smartphone,
    title: "Telegram mini apps",
    description: "Full-featured web apps that run inside Telegram. No downloads, instant access for your users.",
    tag: "mini-app",
    path: "/mini-apps"
  },
  {
    icon: Globe,
    title: "Web applications",
    description: "Fast, responsive SPAs and PWAs (React/Next.js) built for performance and scale",
    tag: "web",
    path: "/web-apps"
  },
  {
    icon: Server,
    title: "VPS hosting",
    description: "Reliable virtual servers with fast SSD",
    tag: "vps",
    path: "/vps-hosting"
  },
  {
    icon: Cloud,
    title: "Cloud hosting",
    description: "Scalable infrastructure for your projects",
    tag: "cloud",
    path: "/cloud-hosting"
  },
  {
    icon: Cpu,
    title: "AI automation",
    description: "Connecting LLMs and neural networks into your workflow. Make your business smarter.",
    tag: "ai",
    path: "/ai-automation"
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
            // Services
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
            What I do
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Full-cycle development powered by AI efficiency
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
            <Link key={service.tag} to={service.path} className="block">
              <motion.div
                key={service.tag}
                variants={item}
                className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow cursor-pointer"
              >
                <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-sans font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
