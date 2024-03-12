/* Components */
import HistoryItem from "./HistoryItem";

/* Icons */
import HistoryIcon from "../icons/HistoryIcon";

/* Hooks */
import { useHistory } from "../hooks/useHistory";
import { useTranslation } from "react-i18next";

export default function HistoryComponent() {
  const { history } = useHistory();
  const { t } = useTranslation();

  return (
    <div className="my-10 md:w-[580px] m-auto px-2 sm:px-4 md:px-0">
      <h2 className="text-xl font-semibold border-2 border-black border-b-0 p-2">
        <HistoryIcon />
        {t("history.title")}
      </h2>
      <div className="border-2 border-black p-2">
        {history.length > 0 ? (
          <ul className="flex flex-col justify-center gap-y-5">
            {history.map((code: string, index) => {
              const result = window.location.href + code;
              return (
                <HistoryItem
                  key={index}
                  code={code}
                  result={result}
                  index={index}
                />
              );
            })}
          </ul>
        ) : (
          <p className="text-center">{t("history.empty")}</p>
        )}
      </div>
    </div>
  );
}
