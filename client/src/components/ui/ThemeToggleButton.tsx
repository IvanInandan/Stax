"use client";

import { useState, useEffect, useCallback } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "./button";
import {
  createAnimation,
  type AnimationVariant,
  type AnimationStart,
} from "./skiper-ui/skiper26";

import { motion, AnimatePresence } from "framer-motion";

// Extend Button props so you can pass variant, size, etc.
interface ThemeToggleButtonProps extends React.ComponentProps<typeof Button> {
  variantAnimation?: AnimationVariant; // renamed to avoid conflict with Button's variant
  start?: AnimationStart;
  blur?: boolean;
}

const ThemeToggleButton = ({
  variantAnimation = "circle",
  start = "bottom-left",
  blur = false,
  ...props
}: ThemeToggleButtonProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const styleId = "theme-transition-styles";

  const updateStyles = useCallback((css: string) => {
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = css;
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    const animation = createAnimation(variantAnimation, start, blur);
    updateStyles(animation.css);

    const switchTheme = () => {
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    };

    if (document.startViewTransition) {
      document.startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2" // optional padding
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex w-6 h-6 items-center justify-center" // fix size
        >
          {theme === "light" ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </motion.span>
      </AnimatePresence>

      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};

export default ThemeToggleButton;
