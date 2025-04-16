
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full bg-background/10 backdrop-blur-sm hover:bg-accent border-border text-foreground"
        aria-label="Toggle theme"
      >
        <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`} />
        <Moon className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0'}`} />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
