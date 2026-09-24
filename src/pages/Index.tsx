import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n";

interface IndexProps {
  locale: Locale;
}

const Index = ({ locale }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background scanline">
      <Header />
      <main>
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
};

export default Index;
