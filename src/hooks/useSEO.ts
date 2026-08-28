import { useLayoutEffect } from "react";

type SEOConfig = {
  title: string;
  description: string;
};

const seoConfig: Record<string, SEOConfig> = {
  "/": {
    title: "Indie Developer · AI-Powered Products | Seezam",
    description: "Independent developer building Telegram Bots, Mini Apps & Web Services with AI efficiency. Fast MVPs, clean code, crypto-friendly.",
  },
  "/telegram-bots": {
    title: "Indie Dev: Telegram Bots Development | AI Automation | Seezam",
    description: "Intelligent Telegram bots that automate customer support, qualify leads, and streamline workflows 24/7. Fast delivery & crypto-friendly.",
  },
  "/mini-apps": {
    title: "Indie Dev: Telegram Mini Apps Development | Web3 & E-commerce | Seezam",
    description: "Full-featured web applications running natively inside Telegram. No downloads, instant access, cross-platform by default.",
  },
  "/web-apps": {
    title: "Indie Dev: Modern Web Applications | React, Next.js, TypeScript | Seezam",
    description: "Fast, scalable SPAs and PWAs built with React, Next.js, and TypeScript. Clean, maintainable code that performs.",
  },
  "/vps-hosting": {
    title: "Indie Dev: High-Performance VPS Hosting | NVMe SSD & DDoS Protection | Seezam",
    description: "Reliable virtual servers with fast NVMe SSD, global locations, and 24/7 monitoring. Full root access and instant deployment.",
  },
  "/cloud-hosting": {
    title: "Indie Dev: Scalable Cloud Infrastructure | Docker & Kubernetes | Seezam",
    description: "Resilient cloud architecture designed for growth. Auto-scaling, high availability, and cost-optimized pay-as-you-go models.",
  },
  "/ai-automation": {
    title: "Indie Dev: AI & Workflow Automation | LLM Integration & RAG | Seezam",
    description: "Practical integration of LLMs and AI into business processes. Automate routine tasks, build custom knowledge bases, and scale fast.",
  },
  "default": {
    title: "Indie Developer · AI-Powered Products | Seezam",
    description: "Independent developer building Telegram Bots, Mini Apps & Web Services with AI efficiency. Fast MVPs, clean code, crypto-friendly.",
  },
};

export function useSEO(pathname: string) {
  useLayoutEffect(() => {
    const config = seoConfig[pathname] || seoConfig["default"];

    // Update document title
    document.title = config.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", config.description);
  }, [pathname]);
}