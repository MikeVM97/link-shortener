"use client";
import { useContext } from "react";
import { MenuMobileContext } from "../context/MenuMobileProvider";

export function useMenuMobile() {
  const context = useContext(MenuMobileContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within a MenuMobileProvider");
  }
  return context;
}
