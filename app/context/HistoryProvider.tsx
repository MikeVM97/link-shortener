"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

type HistoryContextType = {
  history: string[] | [];
  updateHistory: (newHistory: string[]) => void;
};

export const HistoryContext = createContext<HistoryContextType | null>(null);

export default function HistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<string[] | []>([]);

  useEffect(() => {
    const historyStorage =
      JSON.parse(localStorage.getItem("history") as string) ?? [];
    setHistory(historyStorage);
  }, []);

  const updateHistory = (newHistory: string[]) => {
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <HistoryContext.Provider value={{ history, updateHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}
