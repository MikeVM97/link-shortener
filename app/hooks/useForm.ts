"use client";
import { useContext } from "react";
import { FormContext } from "../context/FormProvider";

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}
