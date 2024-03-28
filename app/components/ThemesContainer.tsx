"use client";
import DesktopIcon from "../icons/DesktopIcon";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import { useTheme } from "../hooks/useTheme";

type ThemesContainerProps = {
  mediaQuery: string;
  styles: string;
};

export default function ThemesContainer({
  mediaQuery,
  styles,
}: ThemesContainerProps) {
  const { theme, updateTheme } = useTheme();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.currentTarget;
    updateTheme(target.title as ThemeType);
  }

  return (
    <div className={`${styles} ${mediaQuery}`}>
      <button
        type="button"
        title="light"
        aria-label="Light mode button"
        onClick={(e) => handleClick(e)}
        className={`${
          theme === "light" ? "bg-gray-200" : "group"
        } rounded-full p-2`}
      >
        <SunIcon isSelected={theme === "light"} />
      </button>
      <button
        type="button"
        title="system"
        aria-label="System mode button"
        onClick={(e) => handleClick(e)}
        className={`${
          theme === "system" ? "bg-gray-200" : "group"
        } rounded-full p-2`}
      >
        <DesktopIcon isSelected={theme === "system"} />
      </button>
      <button
        type="button"
        title="dark"
        aria-label="Dark mode button"
        onClick={(e) => handleClick(e)}
        className={`${
          theme === "dark" ? "bg-gray-200" : "group"
        } rounded-full p-2 dark:bg-slate-600`}
      >
        <MoonIcon isSelected={theme === "dark"} />
      </button>
    </div>
  );
}
