import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "./button";

const ThemeToggle = ({ ...props }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      // Optionally use system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button onClick={toggleTheme} {...props}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};

export default ThemeToggle;
