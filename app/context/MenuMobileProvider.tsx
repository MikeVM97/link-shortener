"use client";
import { createContext, useState, ReactNode } from "react";

type MenuMobileContextType = {
  isX: boolean;
  toggleIsX: () => void;
};

export const MenuMobileContext = createContext<MenuMobileContextType | null>(
  null
);

export default function MenuMobileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isX, setIsX] = useState(false);

  const toggleIsX = () => {
    setIsX((prev) => !prev);
  };

  return (
    <MenuMobileContext.Provider value={{ isX, toggleIsX }}>
      {children}
    </MenuMobileContext.Provider>
  );
}
