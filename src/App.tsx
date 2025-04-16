
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CircuitSimulator from "./pages/CircuitSimulator";
import NotFound from "./pages/NotFound";
import AnimatedCursor from "./components/AnimatedCursor";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatedCursor />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/circuit-simulator" element={<CircuitSimulator />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
