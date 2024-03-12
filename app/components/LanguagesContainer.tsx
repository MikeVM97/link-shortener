"use client";
import EspanaIcon from "../icons/EspanaIcon";
import UsaIcon from "../icons/UsaIcon";
import ExpandIcon from "../icons/ExpandIcon";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

type LanguagesContainerProps = {
  mediaQuery: string;
};

export default function LanguagesContainer({
  mediaQuery,
}: LanguagesContainerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { lang, setLanguage } = useLanguage();

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);

    const handleLanguageChange = () => {
      const lang = navigator.language;
      if (lang === "en" || lang === "es") {
        setLanguage(lang);
      }
    };

    window.addEventListener("languagechange", handleLanguageChange);

    return () => {
      window.removeEventListener("languagechange", handleLanguageChange);
    };
  }, [lang, setLanguage, i18n]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  function toggleLanguage() {
    const nextLang = lang === "en" ? "es" : "en";
    setLanguage(nextLang);
  }

  return (
    <div className={`relative ${mediaQuery}`}>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-x-3 rounded-md p-1 bg-gray-200 dark:bg-slate-600"
      >
        <div className="flex items-center justify-center gap-x-1 font-semibold">
          {lang === "es" && <EspanaIcon />}
          {lang === "en" && <UsaIcon />}
          {lang === "es" && "ES"}
          {lang === "en" && "EN"}
        </div>
        <ExpandIcon isOpen={isOpen} />
      </button>
      <ul
        className={`absolute top-[110%] left-0 ${!isOpen && "hidden"} w-full`}
      >
        <li className="w-full">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center justify-between gap-x-3 rounded-md p-1 w-full bg-gray-100 dark:bg-slate-500 dark:hover:bg-slate-600 hover:bg-gray-200"
          >
            <div className="flex items-center justify-center gap-x-1 font-semibold">
              {lang === "en" && <EspanaIcon />}
              {lang === "es" && <UsaIcon />}
              {lang === "en" && "ES"}
              {lang === "es" && "EN"}
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
