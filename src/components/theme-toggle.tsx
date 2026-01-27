"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("header");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      className="group relative rounded-full transition-all duration-300 hover:bg-accent"
      aria-label={t("themeToggle")}
    >
      <Sun className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 text-muted-foreground transition-all duration-300 group-hover:text-foreground dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 text-muted-foreground transition-all duration-300 group-hover:text-foreground dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
