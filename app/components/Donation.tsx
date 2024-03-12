import { PAYPAL_URL } from "../constants";
import HeartIcon from "../icons/HeartIcon";
import { useTranslation } from "react-i18next";

export default function Donation() {
  const { t } = useTranslation();

  return (
    <div className="w-fit m-auto px-1 xs:px-2 text-white">
      <a
        href={PAYPAL_URL}
        target="_blank"
        className="flex items-center justify-center gap-x-2 rounded-md bg-slate-600 p-2"
      >
        <span className="text-balance">{t("sponsor")}</span>
        <HeartIcon />
      </a>
    </div>
  );
}
