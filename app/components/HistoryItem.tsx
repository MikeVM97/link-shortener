"use client";
import Link from "next/link";
import CopyIcon from "../icons/CopyIcon";
import EyesIcon from "../icons/EyesIcon";
import TrashIcon from "../icons/TrashIcon";
import { useState } from "react";
import ToolTip from "./ToolTip";
import { handleCopy } from "../utils";
import { useHistory } from "../hooks/useHistory";
import { useTranslation } from "react-i18next";

type HistoryItemProps = {
  code: string;
  result: string;
  index: number;
  isHidden: boolean;
};

export default function HistoryItem({
  code,
  result,
  index,
  isHidden,
}: HistoryItemProps) {
  const { t } = useTranslation();

  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [showEyesTooltip, setShowEyesTooltip] = useState(false);
  const [showTrashTooltip, setShowTrashTooltip] = useState(false);

  const { history, updateHistory } = useHistory();

  const handleDeleteItem = () => {
    const newHistory = history.filter((_item, i) => i !== index);
    updateHistory(newHistory);
  };

  const handleHideItem = () => {
    const newHistory = history.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          visible: !item.visible,
        };
      }
      return item;
    });
    updateHistory(newHistory);
  };

  return (
    <>
      <div className="flex gap-x-2">
        <span className="">{index + 1}.</span>
        <Link href={code} target="_blank" className="font-semibold">
          {isHidden ? "******" : result}
        </Link>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <div
          className="relative"
          onMouseOver={() => setShowCopyTooltip(true)}
          onMouseLeave={() => setShowCopyTooltip(false)}
        >
          <CopyIcon
            onClick={() => handleCopy(result)}
            width={20}
            height={20}
            rectFill="fill-none"
            rectStroke="stroke-black dark:stroke-white"
            polygonFill="fill-black dark:fill-white"
            polygonStroke="stroke-black dark:stroke-white"
          />
          {showCopyTooltip && (
            <ToolTip
              text={t("icons.copyUrl")}
              position="left-1/2 after:left-1/2"
            />
          )}
        </div>
        <div
          className="relative"
          onMouseOver={() => setShowEyesTooltip(true)}
          onMouseLeave={() => setShowEyesTooltip(false)}
        >
          <EyesIcon
            onClick={handleHideItem}
            isHidden={isHidden}
            width={20}
            height={20}
            fill="fill-dark dark:fill-white"
          />
          {showEyesTooltip && (
            <ToolTip
              text={isHidden ? t("icons.showUrl") : t("icons.hideUrl")}
              position="left-1/2 after:left-1/2"
            />
          )}
        </div>
        <div
          className="relative"
          onMouseOver={() => setShowTrashTooltip(true)}
          onMouseLeave={() => setShowTrashTooltip(false)}
        >
          <TrashIcon
            onClick={handleDeleteItem}
            width={20}
            height={20}
            fill="fill-black dark:fill-white"
          />
          {showTrashTooltip && (
            <ToolTip
              text={t("icons.deleteUrl")}
              position="-left-[20%] after:left-[75%] lg:left-1/2 lg:after:left-1/2"
            />
          )}
        </div>
      </div>
    </>
  );
}
