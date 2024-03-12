"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

type LanguageContextType = {
  lang: LanguageType;
  setLanguage: (lang: LanguageType) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lang, setLang] = useState<LanguageType>("en");

  useEffect(() => {
    const langNavigator = navigator.language;
    if (langNavigator === "es" || langNavigator === "en") {
      setLang(langNavigator);
    }
  }, []);

  const setLanguage = (lang: LanguageType) => {
    setLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
