/* Components */
import HistoryItem from "./HistoryItem";
import ToolTip from "./ToolTip";

/* Icons */
import HistoryIcon from "../icons/HistoryIcon";
import EyesIcon from "../icons/EyesIcon";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";

/* Hooks */
import { useHistory } from "../hooks/useHistory";
import { useTranslation } from "react-i18next";

/* React Hooks */
import { useState } from "react";

export default function HistoryComponent() {
  const { t } = useTranslation();
  const { history, updateHistory } = useHistory();
  const [visibleItems, setVisibleItems] = useState(5);
  const [isHidden, setIsHidden] = useState(true);
  const [showEyesTooltip, setShowEyesTooltip] = useState(false);
  const [showTrashTooltip, setShowTrashTooltip] = useState(false);
  const [showMoreTooltip, setShowMoreTooltip] = useState(false);
  const [showLessTooltip, setShowLessTooltip] = useState(false);

  const expandList = () => {
    setVisibleItems(Math.min(visibleItems + 5, history.length));
  };

  const collapseList = () => {
    setVisibleItems(5);
  };

  const handleHideAll = () => {
    const newHistory = history.map((item) => {
      return {
        ...item,
        visible: !isHidden,
      };
    });
    updateHistory(newHistory);
    setIsHidden(!isHidden);
  };

  const handleDeleteAll = () => {
    updateHistory([]);
  };

  return (
    <div className="my-10 md:w-[580px] m-auto px-2 sm:px-4 md:px-0">
      <h2 className="text-xl font-semibold border-2 border-black border-b-0 p-2">
        <HistoryIcon />
        {t("history.title")}
      </h2>
      <div className="border-2 border-black p-2">
        {history.length > 0 ? (
          <>
            <ol className="flex flex-col justify-center gap-y-5 mb-8">
              {history.slice(0, visibleItems).map((item, index) => {
                const result =
                  window.location.href.replace(/^https?:\/\//, "") + item.code;
                return (
                  <li key={index} className="flex items-center justify-between">
                    <HistoryItem
                      code={item.code}
                      result={result}
                      index={index}
                      isHidden={item.visible}
                    />
                  </li>
                );
              })}
            </ol>
            <div className="flex justify-between">
              <div className="flex items-center justify-between gap-x-4">
                {visibleItems < history.length && (
                  <button
                    className="border-2 border-black p-1 relative"
                    onClick={expandList}
                    onMouseOver={() => setShowMoreTooltip(true)}
                    onMouseLeave={() => setShowMoreTooltip(false)}
                  >
                    <PlusIcon width={20} height={20} fill="fill-green-800" />
                    {showMoreTooltip && (
                      <ToolTip
                        text={t("icons.showMore")}
                        position="left-[140%] after:left-[25%] lg:left-1/2 lg:after:left-1/2"
                      />
                    )}
                  </button>
                )}
                {visibleItems > 5 && (
                  <button
                    className="border-2 border-black p-1 relative"
                    onClick={collapseList}
                    onMouseOver={() => setShowLessTooltip(true)}
                    onMouseLeave={() => setShowLessTooltip(false)}
                  >
                    <MinusIcon width={20} height={20} fill="fill-red-800" />
                    {showLessTooltip && (
                      <ToolTip
                        text={t("icons.showLess")}
                        position="left-[140%] after:left-[20%] lg:left-1/2 lg:after:left-1/2"
                      />
                    )}
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between gap-x-4">
                <span
                  className="relative"
                  onMouseOver={() => setShowEyesTooltip(true)}
                  onMouseLeave={() => setShowEyesTooltip(false)}
                >
                  <EyesIcon
                    onClick={handleHideAll}
                    isHidden={isHidden}
                    width={20}
                    height={20}
                    fill="fill-green-800"
                  />
                  {showEyesTooltip && (
                    <ToolTip
                      text={isHidden ? t("icons.showAll") : t("icons.hideAll")}
                      position="left-1/2 after:left-1/2"
                    />
                  )}
                </span>
                <span
                  className="relative"
                  onMouseOver={() => setShowTrashTooltip(true)}
                  onMouseLeave={() => setShowTrashTooltip(false)}
                >
                  <TrashIcon
                    onClick={handleDeleteAll}
                    width={20}
                    height={20}
                    fill="fill-red-800"
                  />
                  {showTrashTooltip && (
                    <ToolTip
                      text={t("icons.deleteAll")}
                      position="-left-1/2 after:left-3/4 lg:left-1/2 lg:after:left-1/2"
                    />
                  )}
                </span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center">{t("history.empty")}</p>
        )}
      </div>
    </div>
  );
}
