import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/telegram-bots" element={<TelegramBots />} />
          <Route path="/mini-apps" element={<MiniApps />} />
          <Route path="/web-apps" element={<WebApps />} />
          <Route path="/vps-hosting" element={<VPSHosting />} />
          <Route path="/cloud-hosting" element={<CloudHosting />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
