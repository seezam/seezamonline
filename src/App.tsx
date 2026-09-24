import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import { useSEO } from "@/hooks/useSEO";
import Index from "./pages/Index";
import { Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TelegramBots from "./pages/TelegramBots";
import MiniApps from "./pages/MiniApps";
import WebApps from "./pages/WebApps";
import VPSHosting from "./pages/VPSHosting";
import CloudHosting from "./pages/CloudHosting";
import AIAutomation from "./pages/AIAutomation";
import { getLocaleFromLocation } from "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <RouterContent />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

function RouterContent() {
  const location = useLocation();
  const locale = getLocaleFromLocation(location);
  const previousPathRef = useRef<string>(location.pathname);

  useLayoutEffect(() => {
    if (previousPathRef.current !== location.pathname) {
      window.scrollTo(0, 0);
      previousPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  useSEO(location.pathname);

  return (
    <Routes key={`${location.pathname}-${locale}`}>
      <Route path="/" element={<Index locale={locale} />} />
      <Route path="/telegram-bots" element={<TelegramBots locale={locale} />} />
      <Route path="/mini-apps" element={<MiniApps locale={locale} />} />
      <Route path="/web-apps" element={<WebApps locale={locale} />} />
      <Route path="/vps-hosting" element={<VPSHosting locale={locale} />} />
      <Route path="/cloud-hosting" element={<CloudHosting locale={locale} />} />
      <Route path="/ai-automation" element={<AIAutomation locale={locale} />} />
      <Route path="/me" element={<Navigate to="/me/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
