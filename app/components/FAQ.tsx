import { useTranslation } from "react-i18next";
import FaqItem from "./FaqItem";

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section className="md:w-[580px] m-auto mt-20 pb-5 px-2 sm:px-4 md:px-0">
      <h2 className="text-center font-bold text-xl">{t("faq.title")}</h2>
      <ol className="mt-5 flex flex-col gap-y-7">
        <FaqItem
          marker={t("faq.list.0.marker")}
          question={t("faq.list.0.question")}
          answer={t("faq.list.0.answer")}
        />
        <FaqItem
          marker={t("faq.list.1.marker")}
          question={t("faq.list.1.question")}
          answer={t("faq.list.1.answer")}
        />
        <FaqItem
          marker={t("faq.list.2.marker")}
          question={t("faq.list.2.question")}
          answer={t("faq.list.2.answer")}
        />
        <FaqItem
          marker={t("faq.list.3.marker")}
          question={t("faq.list.3.question")}
          answer={t("faq.list.3.answer")}
        />
        <FaqItem
          marker={t("faq.list.4.marker")}
          question={t("faq.list.4.question")}
          answer={t("faq.list.4.answer")}
        />
        <FaqItem
          marker={t("faq.list.5.marker")}
          question={t("faq.list.5.question")}
          answer={t("faq.list.5.answer")}
        />
        <FaqItem
          marker={t("faq.list.6.marker")}
          question={t("faq.list.6.question")}
          answer={t("faq.list.6.answer")}
        />
        <FaqItem
          marker={t("faq.list.7.marker")}
          question={t("faq.list.7.question")}
          answer={t("faq.list.7.answer")}
        />
      </ol>
    </section>
  );
}
