// ThemeProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (
    variant?: "circle" | "rectangle",
    start?: "center" | "bottom-up"
  ) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = stored || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = (
    variant?: "circle" | "rectangle",
    start?: "center" | "bottom-up"
  ) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newTheme: Theme = theme === "light" ? "dark" : "light";

    // Animate overlay before changing theme
    const overlay = document.createElement("div");
    overlay.className =
      "fixed top-0 left-0 w-full h-full bg-black dark:bg-white z-50";
    overlay.style.borderRadius = variant === "circle" ? "50%" : "0.5rem";
    document.body.appendChild(overlay);

    // Position start
    if (start === "center") {
      overlay.style.transform = "scale(0)";
      overlay.style.top = "50%";
      overlay.style.left = "50%";
      overlay.style.transformOrigin = "center";
    } else if (start === "bottom-up") {
      overlay.style.transform = "scaleY(0)";
      overlay.style.transformOrigin = "bottom";
    }

    // Animate overlay expansion
    overlay.animate(
      [{ transform: overlay.style.transform }, { transform: "scale(100)" }],
      { duration: 400, easing: "ease-in-out" }
    ).onfinish = () => {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
      overlay.remove();
      setIsAnimating(false);
    };
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
