import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { useTranslation } from "react-i18next";

type CopyIconProps = {
  onClick: () => void;
};

export default function CopyIcon({ onClick }: CopyIconProps) {
  const [isClicked, setIsClicked] = useState(false);
  const { updateAlert } = useModal();
  const { t } = useTranslation();

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 193.41 217.95"
        width={20}
        height={20}
        onClick={() => {
          setIsClicked(true);
          onClick();
          setTimeout(() => {
            updateAlert(true, t("modal.copyUrl"));
            setIsClicked(false);
            setTimeout(() => {
              updateAlert(false, "");
            }, 3000);
          }, 350);
        }}
        className="cursor-pointer"
      >
        <rect
          strokeLinejoin="round"
          strokeWidth={20}
          x="10"
          y="53.15"
          width="130.14"
          height="154.79"
          className="fill-none stroke-black dark:stroke-white"
        />
        <polygon
          strokeLinejoin="round"
          strokeWidth={20}
          strokeLinecap="round"
          points="53.27 10 53.27 164.79 183.41 164.79 183.41 70.78 122.62 10 53.27 10"
          className={`fill-black stroke-black dark:fill-white dark:stroke-white`}
          style={{
            transition: "transform 0.35s ease",
            transform: isClicked ? "translate(-30px, 30px)" : "translate(0, 0)",
          }}
        />
      </svg>
    </>
  );
}
