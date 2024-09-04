// "use client";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { useTranslation } from "react-i18next";

type TrashIconProps = {
  onClick: () => void;
};

export default function TrashIcon({ onClick }: TrashIconProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(false);

  const { updateAlert } = useModal();
  const { t } = useTranslation();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      /* "0 0 111.57 127.81" */
      viewBox="-15 10 141.57 107.81"
      // viewBox="0 0 111.57 127.81"
      fill="black"
      strokeWidth={0}
      width={20}
      height={20}
      onClick={() => {
        setIsClicked(true);
        setTimeout(() => {
          setShow(true);
          setTimeout(() => {
            setIsClicked(false);
            setShow(false);
            setTimeout(() => {
              onClick();
              updateAlert(true, t("modal.deleteUrl"));
              setTimeout(() => {
                updateAlert(false, "");
              }, 3000);
            }, 500);
          }, 500);
        }, 800);
      }}
      className="cursor-pointer dark:fill-white"
    >
      <g>
        <circle
          cx="50"
          cy="10"
          r="50"
          className="fill-black dark:fill-white"
          style={{
            opacity: isClicked ? 1 : 0,
            transform: show
              ? "translateY(100px) rotate(130deg)"
              : "translateY(-20px) rotate(0deg)",
            transition: "transform 0.45s ease-out, rotate 0.45s ease",
            transformOrigin: "top",
            maskImage: "url(/avion.png)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </g>
      <path d="m8.2,32.26h95.24c-.53,9.52-1,18.78-1.58,28.04-1.14,18.28-2.24,36.56-3.54,54.83-.64,8.92-4.94,12.66-13.93,12.67-19.49.01-38.98.03-58.47-.01-7.42-.02-12.31-4.49-12.78-11.81-1.69-26.09-3.3-52.18-4.92-78.27-.1-1.65-.01-3.31-.01-5.44Z" />
      <path
        d="m56.03,23.8c-15.48,0-30.97.01-46.45,0C3.12,23.79-.13,20.99,0,15.67c.12-5.06,3.29-7.62,9.55-7.64,6.16-.02,12.32-.11,18.48.04,2.61.07,4.32-.49,5.45-3.14C35,1.37,38.06-.03,41.94,0c9.16.08,18.31.07,27.47,0,3.86-.03,7.02,1.27,8.5,4.87,1.22,2.96,3.25,3.24,5.93,3.19,6.16-.11,12.32-.07,18.48-.03,5.94.04,9.35,3.06,9.25,8.05-.1,4.8-3.42,7.69-9.09,7.7-15.48.04-30.97.01-46.45.01Z"
        style={{
          transition: "transform 0.35s ease",
          transformOrigin: "left 20px",
          transform: isClicked ? "rotateZ(-90deg)" : "rotateZ(0)",
        }}
      />
    </svg>
  );
}
