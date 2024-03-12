"use client";
import { createContext, useState, ReactNode } from "react";
import Alert from "../components/Alert";
import { createPortal } from "react-dom";

type ModalContextType = {
  alertIsShown: boolean;
  updateAlert: (state: boolean, text: string) => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [alertIsShown, setAlertIsShown] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>("");

  const updateAlert = (state: boolean, text: string) => {
    setAlertIsShown(state);
    setAlertText(text);
  };

  return (
    <ModalContext.Provider value={{ alertIsShown, updateAlert }}>
      {children}
      {alertIsShown && createPortal(<Alert text={alertText} />, document.body)}
    </ModalContext.Provider>
  );
}
