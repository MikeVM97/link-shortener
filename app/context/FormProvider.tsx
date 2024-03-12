"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type Form = {
  value: string | null;
  code: string | null;
  error: string | null;
  isLoading: boolean;
};

type Action =
  | { type: "value"; value: string | null }
  | { type: "code"; code: string | null }
  | { type: "error"; error: string | null }
  | { type: "loading"; isLoading: boolean }
  | { type: "initSubmit" }
  | { type: "unknown" };

type FormContextType = {
  form: Form;
  updateForm: Dispatch<Action>;
};

export const FormContext = createContext<FormContextType | null>(null);

export default function FormProvider({ children }: { children: ReactNode }) {
  const [form, updateForm] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ form, updateForm }}>
      {children}
    </FormContext.Provider>
  );
}

function formReducer(form: Form, action: Action) {
  switch (action.type) {
    case "value": {
      return {
        ...form,
        value: action.value,
      };
    }
    case "code": {
      return {
        ...form,
        code: action.code,
      };
    }
    case "error": {
      return {
        ...form,
        error: action.error,
      };
    }
    case "loading": {
      return {
        ...form,
        isLoading: action.isLoading,
      };
    }
    case "initSubmit": {
      return {
        ...form,
        code: null,
        error: null,
        isLoading: true,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  value: null,
  code: null,
  error: null,
  isLoading: false,
};
