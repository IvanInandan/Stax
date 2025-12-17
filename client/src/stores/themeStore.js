import { create } from "zustand";

export const useThemeStore = create((set, get) => ({
  theme: localStorage.getItem("theme") || "retro",

  setTheme: (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    set({ theme });
  },

  toggleTheme: () => {
    const next = get().theme === "retro" ? "business" : "retro";
    get().setTheme(next);
  },
}));
