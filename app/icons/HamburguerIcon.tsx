// "use client";
import { useMenuMobile } from "../hooks/useMenuMobile";

export default function HamburguerIcon() {
  const { isX, toggleIsX } = useMenuMobile();

  // console.log("Hamburguer Icon rendered");

  return (
    <svg
      id="menu"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40.35"
      width="25"
      height="25"
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={10}
      onClick={() => {
        toggleIsX();
        const bodyClasses = document.body.classList;
        bodyClasses.toggle("menuMobileOpen");
      }}
      className="md:hidden stroke-black dark:stroke-white"
    >
      {/* TOP */}
      <line
        x1="5"
        y1="-5"
        x2="55"
        y2="-5"
        style={{
          transform: isX ? "rotate(50deg)" : "rotate(0deg)",
          transformOrigin: "left top",
          transition: "transform 0.35s ease",
        }}
      />
      {/* MIDDLE */}
      <line
        x1="5"
        y1="20.18"
        x2="55"
        y2="20.18"
        style={{
          opacity: isX ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />
      {/* BOTTOM */}
      <line
        x1="5"
        y1="45"
        x2="55"
        y2="45"
        style={{
          transform: isX ? "rotate(-50deg)" : "rotate(0deg)",
          transformOrigin: "left bottom",
          transition: "transform 0.35s ease",
        }}
      />
    </svg>
  );
}

// export const HamburguerIcon = memo(Hamburguer);
