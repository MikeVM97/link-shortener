"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import CopyIcon from "../icons/CopyIcon";
import ToolTip from "./ToolTip";
import { handleCopy } from "../utils";
import { useTranslation } from "react-i18next";
import { useForm } from "../hooks/useForm";

export default function UrlShortResult() {
  const { t } = useTranslation();
  const { form } = useForm();

  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    const absolute =
      window.location.href.replace(/^https?:\/\//, "") + form.code;
    setPath(absolute);
  }, [path, form.code]);

  return (
    <div
      className={`text-center m-auto w-fit p-4 ${
        form.code.length > 0 ? "block" : "hidden"
      }`}
    >
      {t("form.urlTitle")}:{" "}
      <div className="flex items-center justify-center gap-x-3 mt-3">
        <Link href={form.code} target="_blank" className="font-bold block">
          {path}
        </Link>
        <div
          className="relative"
          onMouseOver={() => setShowCopyTooltip(true)}
          onMouseLeave={() => setShowCopyTooltip(false)}
        >
          <CopyIcon
            onClick={() => handleCopy(path)}
            width={20}
            height={20}
            rectFill="fill-none"
            rectStroke="stroke-black dark:stroke-white"
            polygonFill="fill-black dark:fill-white"
            polygonStroke="stroke-black dark:stroke-white"
          />
          {showCopyTooltip && (
            <ToolTip text="Copy url" position="left-1/2 after:left-1/2" />
          )}
        </div>
      </div>
    </div>
  );
}
