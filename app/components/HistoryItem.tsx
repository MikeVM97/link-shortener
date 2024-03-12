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
};

export default function HistoryItem({ code, result, index }: HistoryItemProps) {
  const { t } = useTranslation();

  const [isHidden, setIsHidden] = useState(true);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [showEyesTooltip, setShowEyesTooltip] = useState(false);
  const [showTrashTooltip, setShowTrashTooltip] = useState(false);

  const { history, updateHistory } = useHistory();

  const handleHide = () => {
    setIsHidden(!isHidden);
  };

  const handleDelete = () => {
    const newHistory = history.filter((_item, i) => i !== index);
    updateHistory(newHistory);
  };

  return (
    <li className="flex items-center justify-between">
      <Link href={code} target="_blank" className="font-semibold">
        {isHidden ? "******" : result}
      </Link>
      <div className="flex items-center justify-between gap-x-4">
        <div
          className="relative"
          onMouseOver={() => setShowCopyTooltip(true)}
          onMouseLeave={() => setShowCopyTooltip(false)}
        >
          <CopyIcon onClick={() => handleCopy(result)} />
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
          <EyesIcon onClick={handleHide} isHidden={isHidden} />
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
          <TrashIcon onClick={handleDelete} />
          {showTrashTooltip && (
            <ToolTip
              text={t("icons.deleteUrl")}
              position="-left-1/2 after:left-3/4 lg:left-1/2 lg:after:left-1/2"
            />
          )}
        </div>
      </div>
    </li>
  );
}
