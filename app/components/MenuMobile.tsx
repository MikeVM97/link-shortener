"use client";
import ThemesContainer from "./ThemesContainer";
import LanguagesContainer from "./LanguagesContainer";
import { useTranslation } from "react-i18next";
import { useMenuMobile } from "../hooks/useMenuMobile";

export default function MenuMobile() {
  const { t } = useTranslation();
  const { isX } = useMenuMobile();

  return (
    <div
      className={`absolute left-0 top-full w-full bg-gray-100 h-dvh z-10 flex-col items-center justify-start gap-y-5 pt-5 dark:bg-gray-900 md:hidden ${
        isX ? "flex" : "hidden"
      }`}
    >
      <div>
        <p className="text-center text-xl">{t("menuMobile.appearance")}</p>
        <ThemesContainer
          mediaQuery="flex"
          styles="items-center justify-center gap-x-3 mt-4"
        />
      </div>
      <hr
        style={{
          width: "30%",
          height: "2px",
          backgroundColor: "black",
        }}
      />
      <div>
        <p className="text-center text-xl mb-4">{t("menuMobile.language")}</p>
        <LanguagesContainer mediaQuery="block" />
      </div>
    </div>
  );
}
