import UrlShortResult from "./UrlShortResult";
import ErrorMessage from "./ErrorMessage";
import LoaderIcon from "../icons/LoaderIcon";

import { useTranslation } from "react-i18next";
import { useHistory } from "../hooks/useHistory";
import { useForm } from "../hooks/useForm";

import { useRef } from "react";
import { createShortLink } from "../lib/actions";

export default function LinkShortenerForm() {
  const { t } = useTranslation();
  const { history, updateHistory } = useHistory();
  const { form, updateForm } = useForm();

  const ref = useRef<HTMLFormElement>(null);

  // async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   updateForm({
  //     type: "initSubmit",
  //   });
  //   const data = {
  //     input: form.inputUrl,
  //     output: form.outputUrl,
  //   };
  //   console.log(data);
  //   try {
  //     const response: Response = await fetch(`/api/create`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (response.ok) {
  //       const data: CreateLinkSuccess = await response.json();
  //       updateForm({
  //         type: "code",
  //         code: data.code,
  //       });

  //       const newHistory = [...history, data.code];
  //       updateHistory(newHistory);
  //     } else {
  //       const data: CreateLinkError = await response.json();

  //       updateForm({
  //         type: "error",
  //         error: t(data.error),
  //       });
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log(error);
  //     }
  //   } finally {
  //     updateForm({
  //       type: "loading",
  //       isLoading: false,
  //     });
  //   }
  // }

  return (
    <div className="m-auto w-full md:w-[580px] mb-10">
      <form
        onSubmit={() => {
          updateForm({
            type: "initSubmit",
          });
        }}
        action={async (FormData) => {
          ref.current?.reset();
          const code = (await createShortLink(FormData)) as string;
          updateForm({
            type: "code",
            code,
          });
          updateForm({
            type: "loading",
            isLoading: false,
          });
        }}
        className="flex flex-col items-center justify-center gap-y-5 py-4 px-2 sm:px-4 md:px-0"
      >
        <input
          type="text"
          placeholder={t("form.placeholder")}
          onChange={(e) =>
            updateForm({
              type: "inputUrl",
              inputUrl: e.target.value,
            })
          }
          required
          className="border-2 border-black w-full p-1"
          alt="Input field for url"
          name="url"
        />
        <p className="text-center">{t("form.optional-1")}</p>
        <p className="text-center">{t("form.optional-2")}</p>
        <input
          type="text"
          placeholder={t("form.placeholder-optional")}
          onChange={(e) =>
            updateForm({
              type: "outputUrl",
              outputUrl: e.target.value,
            })
          }
          className="w-full p-1 border-2 border-black"
          alt="Input field for sub page"
          name="code"
        />
        <input
          type="submit"
          value={t("form.submit")}
          className="border-none bg-slate-600 text-white dark:bg-slate-600 dark:text-white cursor-pointer p-1 rounded-lg font-bold"
          alt="Button for submit form"
        />
      </form>
      <LoaderIcon />
      <UrlShortResult />
      <ErrorMessage />
    </div>
  );
}
