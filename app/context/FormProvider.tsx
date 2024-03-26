"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type Form = {
  inputUrl: string;
  outputUrl: string;
  code: string;
  error: string;
  isLoading: boolean;
};

type Action =
  | { type: "inputUrl"; inputUrl: string }
  | { type: "outputUrl"; outputUrl: string }
  | { type: "code"; code: string }
  | { type: "error"; error: string }
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
    case "inputUrl": {
      return {
        ...form,
        inputUrl: action.inputUrl,
      };
    }
    case "outputUrl": {
      return {
        ...form,
        outputUrl: action.outputUrl,
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
        code: "",
        error: "",
        isLoading: true,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  inputUrl: "",
  outputUrl: "",
  code: "",
  error: "",
  isLoading: false,
};
