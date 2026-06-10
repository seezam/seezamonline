import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TelegramBots from "./pages/TelegramBots";
import MiniApps from "./pages/MiniApps";
import WebApps from "./pages/WebApps";
import VPSHosting from "./pages/VPSHosting";
import CloudHosting from "./pages/CloudHosting";
import AIAutomation from "./pages/AIAutomation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/telegram-bots" element={<TelegramBots />} />
          <Route path="/mini-apps" element={<MiniApps />} />
          <Route path="/web-apps" element={<WebApps />} />
          <Route path="/vps-hosting" element={<VPSHosting />} />
          <Route path="/cloud-hosting" element={<CloudHosting />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
