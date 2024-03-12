type LinkDB = {
  _id: string;
  origin: string;
  short: string;
  __v?: string;
  createdAt?: string;
  updatedAt?: string;
};

type Link = {
  origin: string;
  short: string;
};

type ThemeType = "light" | "system" | "dark";

type LanguageType = "en" | "es";

type CreateLinkSuccess = {
  code: `${string & { length: 6 }}`;
};

type CreateLinkError = {
  error: string;
};

type LangJSON = {
  title: string;
  description: string;
  form: {
    placeholder: string;
    submit: string;
    urlTitle: string;
  };
  history: {
    title: string;
    empty: string;
  };
  sponsor: string;
  faq: FAQ;
  menuMobile: {
    appearance: string;
    language: string;
  };
  icons: {
    copyUrl: string;
    showUrl: string;
    hideUrl: string;
    deleteUrl: string;
  };
  modal: {
    copyUrl: string;
    deleteUrl: string;
  };
};

type List = {
  marker: string;
  question: string;
  asnwer: string;
};

type FAQ = {
  title: string;
  list: List[];
};
