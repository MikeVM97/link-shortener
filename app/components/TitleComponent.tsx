import { useTranslation } from "react-i18next";

export default function TitleComponent() {
  const { t } = useTranslation();

  return <h1 className="text-2xl font-bold dark:text-white">{t("title")}</h1>;
}
