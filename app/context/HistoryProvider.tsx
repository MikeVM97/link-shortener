"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

type HistoryItem = {
  code: string;
  visible: boolean;
};

type NewHistory = HistoryItem[] | [];

type HistoryContextType = {
  history: NewHistory;
  updateHistory: (newHistory: NewHistory) => void;
};

export const HistoryContext = createContext<HistoryContextType | null>(null);

export default function HistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<NewHistory>([]);

  useEffect(() => {
    const historyStorage =
      JSON.parse(localStorage.getItem("history") as string) ?? [];
    setHistory(historyStorage);
  }, []);

  const updateHistory = (newHistory: NewHistory) => {
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <HistoryContext.Provider value={{ history, updateHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}
