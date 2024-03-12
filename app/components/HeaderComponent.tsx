import TitleComponent from "./TitleComponent";
import LanguagesContainer from "./LanguagesContainer";
import ThemesContainer from "./ThemesContainer";
import HamburguerIcon from "../icons/HamburguerIcon";
import MenuMobile from "./MenuMobile";

export default function HeaderComponent() {
  return (
    <header className="flex items-center justify-between gap-x-4 p-4 mb-10 relative">
      <TitleComponent />
      <div className="flex items-center justify-center gap-x-4">
        <LanguagesContainer mediaQuery="hidden md:block" />
        <ThemesContainer
          mediaQuery="hidden md:flex"
          styles="justify-between items-center gap-x-5 rounded-full border border-black p-2 dark:border-white"
        />
      </div>
      <HamburguerIcon />
      <MenuMobile />
    </header>
  );
}
