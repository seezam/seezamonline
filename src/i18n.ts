export type Locale = "ru" | "en";

export const DEFAULT_LOCALE: Locale = "ru";

export type HomeI18n = {
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      description: string;
      tag: string;
      path: string;
    }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    telegram: string;
    email: string;
    website: string;
    terminalPrompt: string;
  };
  telegramBots: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    ctaSmall: string;
    ctaReady: string;
    ctaText: string;
    ctaButton: string;
  };
  miniApps: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    sectionTitle: string;
    sectionDescription: string;
    button: string;
  };
  webApps: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    sectionTitle: string;
    sectionDescription: string;
    button: string;
  };
  vpsHosting: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    sectionTitle: string;
    sectionDescription: string;
    button: string;
  };
  cloudHosting: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    sectionTitle: string;
    sectionDescription: string;
    button: string;
  };
  aiAutomation: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    sectionTitle: string;
    sectionDescription: string;
    button: string;
  };
  footer: {
    built: string;
  };
  header: {
    connect: string;
    languageLabel: string;
  };
};

export const translations: Record<Locale, HomeI18n> = {
  ru: {
    hero: {
      greeting: "Привет!\nЯ Алексей",
      title: "Создаю Telegram-ботов, мини-приложения и веб-сервисы",
      subtitle: "Преобразую идеи в готовые продукты за несколько дней. Автоматизация на базе ИИ без лишних агентских расходов.",
    },
    services: {
      eyebrow: "// Услуги",
      heading: "Что я делаю",
      subheading: "Разработка от идеи до продакшн-систем",
      items: [
        {
          title: "Telegram-боты",
          description: "Умная автоматизация для продаж, поддержки и внутренних процессов внутри Telegram.",
          tag: "bot",
          path: "/telegram-bots",
        },
        {
          title: "Мини-приложения Telegram",
          description: "Полноценные веб-приложения, которые запускаются прямо в Telegram. Без установки и мгновенный доступ для пользователей.",
          tag: "mini-app",
          path: "/mini-apps",
        },
        {
          title: "Веб-приложения",
          description: "Быстрые и отзывчивые SPA/PWA на React и Next.js для производительности и масштабируемости.",
          tag: "web",
          path: "/web-apps",
        },
        {
          title: "VPS-хостинг",
          description: "Надёжные виртуальные серверы на быстрых SSD дисках.",
          tag: "vps",
          path: "/vps-hosting",
        },
        {
          title: "Облачный хостинг",
          description: "Масштабируемая инфраструктура для ваших проектов и сервисов.",
          tag: "cloud",
          path: "/cloud-hosting",
        },
        {
          title: "AI-автоматизация",
          description: "Подключаю LLM и нейросети в рабочие процессы, чтобы делать бизнес умнее и быстрее.",
          tag: "ai",
          path: "/ai-automation",
        },
      ],
    },
    contact: {
      eyebrow: "// Контакты",
      heading: "Давайте поработаем вместе",
      description: "Есть проект или идея? Давайте обсудим, как быстро и эффективно превратить их в продукт. Обычно отвечаю в течение нескольких часов.",
      telegram: "Telegram",
      email: "Email",
      website: "Сайт",
      terminalPrompt: 'echo "Готов запустить следующий проект?"',
    },
    telegramBots: {
      title: "Telegram-боты, которые работают пока вы спите",
      subtitle: "Создаю умные боты для поддержки клиентов, квалификации лидов и автоматизации бизнес-процессов прямо внутри Telegram.",
      features: [
        {
          title: "Поддержка 24/7",
          description: "Мгновенные ответы на вопросы клиентов, обработка заказов и записей. Бот работает круглосуточно без усталости и ошибок.",
        },
        {
          title: "Сбор и квалификация лидов",
          description: "Автоматически собираю заявки и задаю нужные вопросы, чтобы горячие лиды попадали сразу в вашу воронку продаж.",
        },
        {
          title: "Гладкая интеграция",
          description: "Подключаю CRM, платёжные системы, базы данных и API. Бот становится частью вашей экосистемы и синхронизирует клиентов, заказы и уведомления в реальном времени.",
        },
        {
          title: "Надёжно и безопасно",
          description: "Защита данных, аутентификация, контроль доступа и фильтрация спама. Репутация и данные под надёжной защитой.",
        },
      ],
      ctaSmall: "Быстрая разработка • Чистая архитектура • Поддержка крипто-проектов",
      ctaReady: "Готовы начать?",
      ctaText: "Опишите задачу и сценарии для бота. Напишите нам — обычно отвечаю в течение нескольких часов.",
      ctaButton: "Написать в Telegram",
    },
    miniApps: {
      title: "Приложения внутри Telegram",
      subtitle: "Полноценные веб-приложения внутри Telegram. Никаких скачиваний и регистраций — пользователю нужен один клик, чтобы попасть в интерфейс.",
      features: [
        {
          title: "Бесшовный UX",
          description: "Пользователь открывает приложение в один клик. Без App Store, без загрузки и без лишних барьеров на входе.",
        },
        {
          title: "Кроссплатформенность по умолчанию",
          description: "Один код работает одинаково на iOS, Android и десктопе. Не нужно поддерживать три отдельные сборки.",
        },
        {
          title: "Нативное ощущение",
          description: "Глубокая интеграция с интерфейсом Telegram, темами и жестами. Это часть мессенджера, а не сторонний сайт.",
        },
        {
          title: "Подходит для Web3 и e-commerce",
          description: "Подходит для gated-доступа, крипто-платежей, бронирования и быстрых checkout-сценариев.",
        },
      ],
      sectionTitle: "Есть идея для mini app?",
      sectionDescription: "Давайте обсудим техническую реализацию и сроки. Превращаю идеи в работающие продукты быстро и без лишнего хаоса.",
      button: "Обсудить проект",
    },
    webApps: {
      title: "Современные веб-приложения",
      subtitle: "Быстрые, масштабируемые веб-приложения на React, Next.js и TypeScript. Чистый код и стабильная работа без лишних сложностей.",
      features: [
        {
          title: "Современный стек",
          description: "React, Next.js, TypeScript и Tailwind CSS. Решения для высокой производительности, типобезопасности и роста проекта.",
        },
        {
          title: "Скорость в первую очередь",
          description: "Оптимизированная загрузка, code splitting и ленивая подгрузка. Приложение открывается быстро и удерживает внимание пользователей.",
        },
        {
          title: "Полная адаптация",
          description: "Плавный интерфейс на любом устройстве — мобильный, планшет, десктоп. Подход mobile-first с проверкой на реальных устройствах.",
        },
        {
          title: "SEO и видимость",
          description: "SSR, корректные мета-теги и подготовка под поиск. Приложение не только удобно, но и легко находится.",
        },
      ],
      sectionTitle: "Нужно веб-приложение?",
      sectionDescription: "От landing page до сложной платформы — создаю быстро, чисто и без лишних переплат за переобновление архитектуры.",
      button: "Обсудить проект",
    },
    vpsHosting: {
      title: "VPS-хостинг",
      subtitle: "Высокопроизводительные виртуальные серверы на NVMe SSD с мгновенным развёртыванием, полной root-доступностью и круглосуточным мониторингом.",
      features: [
        {
          title: "Защита от DDoS",
          description: "Митигирование атак и автоматические бэкапы. Данные защищены и быстро восстанавливаются.",
        },
        {
          title: "Максимальная скорость",
          description: "NVMe SSD, выделенные vCPU и гарантированная память. Без шумных соседей и просадок производительности.",
        },
        {
          title: "Глобальные локации",
          description: "Выбирайте дата-центры в Европе и Азии для лучшей задержки у вашей аудитории.",
        },
        {
          title: "Простое масштабирование",
          description: "Увеличение CPU, RAM и диска за минуты — без миграций и простоя.",
        },
      ],
      sectionTitle: "Нужен сервер?",
      sectionDescription: "Помогу выбрать оптимальную конфигурацию под бюджет, нагрузку и задачи проекта. Бесплатная консультация.",
      button: "Получить консультацию",
    },
    cloudHosting: {
      title: "Облачный хостинг",
      subtitle: "Масштабируемая и отказоустойчивая облачная инфраструктура под рост вашего продукта — от стартапа до зрелого сервиса.",
      features: [
        {
          title: "Современная архитектура",
          description: "Микросервисы, Docker-контейнеры и Kubernetes для гибкости и быстрых релизов.",
        },
        {
          title: "Автомасштабирование",
          description: "Ресурсы автоматически растут и уменьшаются под нагрузку. Пиковый трафик больше не проблема.",
        },
        {
          title: "Высокая доступность",
          description: "Избыточные конфигурации и мониторинг позволяют держать сервис онлайн с целевым SLA 99.9%.",
        },
        {
          title: "Оптимизация расходов",
          description: "Оплата по фактической нагрузке без переплаты за простаивающие мощности.",
        },
      ],
      sectionTitle: "Готовы масштабироваться?",
      sectionDescription: "Проверю текущую архитектуру или спроектирую облачную инфраструктуру с нуля под ваши задачи и бюджет.",
      button: "Обсудить проект",
    },
    aiAutomation: {
      title: "AI-автоматизация",
      subtitle: "Подключаю LLM и нейросети в рабочие процессы, чтобы автоматизировать рутину, ускорить принятие решений и увеличить эффективность команды.",
      features: [
        {
          title: "Интеграции с LLM",
          description: "GPT, Claude и другие модели для генерации текста, анализа данных и работы с клиентами.",
        },
        {
          title: "Автоматизация процессов",
          description: "Обработка документов, классификация заявок и генерация отчётов — AI берёт на себя рутину.",
        },
        {
          title: "Кастомные модели",
          description: "Дообучение под вашу предметную область, данные и бизнес-процессы для более точных ответов.",
        },
        {
          title: "Быстрая реализация",
          description: "MVP за 2–4 недели — от прототипа до продакшн-подключения в ваш стек.",
        },
      ],
      sectionTitle: "Хотите внедрить AI?",
      sectionDescription: "Проанализирую ваши процессы и покажу, где именно искусственный интеллект даст реальный эффект — по времени, деньгам и качеству работы.",
      button: "Бесплатная консультация",
    },
    footer: {
      built: "",
    },
    header: {
      connect: "связаться",
      languageLabel: "RU / EN",
    },
  },
  en: {
    hero: {
      greeting: "Hello!\nI'm Alex",
      title: "Building Telegram Bots, Mini Apps & Web Services",
      subtitle: "Turning ideas into production-ready products in days. AI-powered workflows, no agency overhead.",
    },
    services: {
      eyebrow: "// Services",
      heading: "What I do",
      subheading: "Full-cycle development powered by AI efficiency",
      items: [
        {
          title: "Telegram bots",
          description: "Smart automation for customer engagement and business processes inside Telegram.",
          tag: "bot",
          path: "/telegram-bots",
        },
        {
          title: "Telegram mini apps",
          description: "Full-featured web apps that run inside Telegram. No downloads, instant access for your users.",
          tag: "mini-app",
          path: "/mini-apps",
        },
        {
          title: "Web applications",
          description: "Fast, responsive SPAs and PWAs (React/Next.js) built for performance and scale.",
          tag: "web",
          path: "/web-apps",
        },
        {
          title: "VPS hosting",
          description: "Reliable virtual servers with fast SSD performance.",
          tag: "vps",
          path: "/vps-hosting",
        },
        {
          title: "Cloud hosting",
          description: "Scalable infrastructure for your projects and services.",
          tag: "cloud",
          path: "/cloud-hosting",
        },
        {
          title: "AI automation",
          description: "Connecting LLMs and neural networks into your workflow. Make your business smarter.",
          tag: "ai",
          path: "/ai-automation",
        },
      ],
    },
    contact: {
      eyebrow: "// Contact",
      heading: "Let's work together",
      description: "Have a project or an idea? Let's discuss how we can bring it to life efficiently. I usually respond within a few hours.",
      telegram: "Telegram",
      email: "Email",
      website: "Website",
      terminalPrompt: 'echo "Ready to ship your next project?"',
    },
    telegramBots: {
      title: "Telegram bots that work while you sleep",
      subtitle: "I build intelligent bots that automate customer support, qualify leads, and streamline business workflows directly inside Telegram.",
      features: [
        {
          title: "24/7 Support",
          description: "Instant responses to customer inquiries, order handling, and appointment processing. The bot works around the clock without fatigue or mistakes.",
        },
        {
          title: "Lead Capture & Qualification",
          description: "Automatically collect and qualify leads. The bot asks the right questions and routes the strongest prospects directly to your sales pipeline.",
        },
        {
          title: "Seamless Integrations",
          description: "Connect to CRM, payment systems, databases, and APIs. The bot becomes part of your ecosystem and synchronizes clients, orders, and notifications in real time.",
        },
        {
          title: "Secure & Reliable",
          description: "Data protection, authentication, access control, and spam filtering. Your data and reputation are under reliable guard.",
        },
      ],
      ctaSmall: "Fast delivery • Clean architecture • Crypto-friendly",
      ctaReady: "Ready to start?",
      ctaText: "Describe your project and bot requirements. Send a message — I usually respond within a few hours.",
      ctaButton: "Contact on Telegram",
    },
    miniApps: {
      title: "Telegram mini apps with zero friction",
      subtitle: "Full-featured web applications running inside Telegram. No downloads, no registration friction — users can access the app in one click.",
      features: [
        {
          title: "Frictionless UX",
          description: "Users open the app in one click. No App Store approvals, no downloads, no registration barriers. Straight to business.",
        },
        {
          title: "Cross-platform by default",
          description: "One codebase works perfectly on iOS, Android, and Desktop. No need to maintain three separate apps.",
        },
        {
          title: "Native feel",
          description: "Deep integration with Telegram UI, themes, and native gestures. It feels like a native part of the messenger, not a third-party website.",
        },
        {
          title: "Web3 & e-commerce ready",
          description: "Perfect for token gating, crypto payments, booking systems, or seamless checkout flows.",
        },
      ],
      sectionTitle: "Have a mini app idea?",
      sectionDescription: "Let's discuss the technical implementation and timeline. I turn concepts into working products quickly and without unnecessary complexity.",
      button: "Discuss project",
    },
    webApps: {
      title: "Modern web applications",
      subtitle: "Fast, scalable web apps built with React, Next.js, and TypeScript. Clean code and stable performance without unnecessary complexity.",
      features: [
        {
          title: "Modern tech stack",
          description: "React, Next.js, TypeScript, and Tailwind CSS. Designed for performance, type safety, and smooth future growth.",
        },
        {
          title: "Performance first",
          description: "Optimized loading, code splitting, and lazy loading. The app opens quickly and keeps users engaged.",
        },
        {
          title: "Fully responsive",
          description: "Smooth experience across mobile, tablet, and desktop. Mobile-first approach with testing on real devices.",
        },
        {
          title: "SEO-ready",
          description: "SSR, proper meta tags, and structure prepared for visibility. The product is built to be found.",
        },
      ],
      sectionTitle: "Need a web app?",
      sectionDescription: "From landing page to complex platform — built fast, clean, and without unnecessary rework.",
      button: "Discuss project",
    },
    vpsHosting: {
      title: "VPS hosting",
      subtitle: "High-performance virtual servers on NVMe SSD with instant deployment, full root access, and 24/7 monitoring.",
      features: [
        {
          title: "DDoS Protection",
          description: "Enterprise-grade mitigation and automated backups. Your data remains safe and recoverable.",
        },
        {
          title: "Raw Performance",
          description: "NVMe SSDs, dedicated vCPUs, and guaranteed RAM. No noisy neighbors, no throttling.",
        },
        {
          title: "Global Locations",
          description: "Choose data centers in Europe and Asia to reduce latency for your target audience.",
        },
        {
          title: "Easy Scaling",
          description: "Upgrade CPU, RAM, or storage in minutes without migration headaches or downtime.",
        },
      ],
      sectionTitle: "Need a Server?",
      sectionDescription: "I’ll help you choose the right configuration for your budget and workload. Free consultation.",
      button: "Get Consultation",
    },
    cloudHosting: {
      title: "Cloud infrastructure",
      subtitle: "Scalable, resilient cloud architecture built for growth from early-stage projects to mature services.",
      features: [
        {
          title: "Modern Architecture",
          description: "Microservices, Docker containers, and Kubernetes orchestration for flexibility and fast deployment.",
        },
        {
          title: "Auto-Scaling",
          description: "Resources scale automatically with demand. Usage spikes stop being a problem.",
        },
        {
          title: "High Availability",
          description: "Redundant infrastructure and proactive monitoring keep your service online with 99.9% uptime targets.",
        },
        {
          title: "Cost Optimization",
          description: "Pay only for the resources you use and eliminate waste from idle infrastructure.",
        },
      ],
      sectionTitle: "Ready to Scale?",
      sectionDescription: "I can audit your current setup or design a cost-effective cloud architecture from the ground up.",
      button: "Discuss Project",
    },
    aiAutomation: {
      title: "AI automation",
      subtitle: "I connect LLMs and neural networks into business workflows to remove repetitive work and speed up decision-making.",
      features: [
        {
          title: "LLM Integrations",
          description: "Connect GPT, Claude, and similar models for content generation, analysis, and customer support.",
        },
        {
          title: "Process Automation",
          description: "Document processing, request classification, and report generation — AI removes routine work from the team.",
        },
        {
          title: "Custom Models",
          description: "Train models on your own data to get accurate answers for your market and niche.",
        },
        {
          title: "Fast Implementation",
          description: "MVP in 2–4 weeks — from prototype to production integration in your existing stack.",
        },
      ],
      sectionTitle: "Want to Implement AI?",
      sectionDescription: "I’ll review your current processes and point out where AI will have the clearest impact on time, quality, and costs.",
      button: "Free Consultation",
    },
    footer: {
      built: "",
    },
    header: {
      connect: "connect",
      languageLabel: "EN / RU",
    },
  },
};

export function getLocaleFromSearch(search: string): Locale {
  const params = new URLSearchParams(search);
  const rawLocale = params.get("lang");

  if (rawLocale === "ru" || rawLocale === "en") {
    return rawLocale;
  }

  return DEFAULT_LOCALE;
}

export function getLocaleFromHash(hash: string): Locale {
  const hashSearch = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : hash;
  const params = new URLSearchParams(hashSearch);
  const rawLocale = params.get("lang");

  if (rawLocale === "ru" || rawLocale === "en") {
    return rawLocale;
  }

  return DEFAULT_LOCALE;
}

export function getLocaleFromLocation(location: { search?: string; hash?: string }): Locale {
  const searchLocale = getLocaleFromSearch(location.search ?? "");
  if (searchLocale !== DEFAULT_LOCALE || (location.search ?? "").includes("lang=")) {
    return searchLocale;
  }

  return getLocaleFromHash(location.hash ?? "");
}

export function getNextLocale(locale: Locale): Locale {
  return locale === "ru" ? "en" : "ru";
}
