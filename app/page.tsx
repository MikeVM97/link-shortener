"use client";
import HeaderComponent from "./components/HeaderComponent";
import LinkShortenerForm from "./components/LinkShortenerForm";
import HistoryComponent from "./components/HistoryComponent";
import Donation from "./components/Donation";
import FAQ from "./components/FAQ";
import { useTranslation } from "react-i18next";
import "./lib/i18n";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="dark:bg-gray-950 dark:text-white">
      <HeaderComponent />
      <LinkShortenerForm />
      <p className="text-center text-lg md:w-[580px] m-auto px-2 xs:px-4 xl:px-0">
        {t("description")}
      </p>
      <HistoryComponent />
      <Donation />
      <FAQ />
    </main>
  );
}
