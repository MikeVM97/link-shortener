"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = {
  theme: ThemeType;
  updateTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const applyTheme = {
  light: () => {
    document.body.classList.remove("dark");
  },
  dark: () => {
    document.body.classList.add("dark");
  },
  system: () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  },
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("system");

  useEffect(() => {
    const themeStorage =
      (localStorage.getItem("theme") as ThemeType) ?? "system";
    setTheme(themeStorage);
  }, []);

  const updateTheme = (theme: ThemeType) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    applyTheme[theme]();
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
