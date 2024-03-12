// "use client";
import UrlShortResult from "./UrlShortResult";
import ErrorMessage from "./ErrorMessage";
import LoaderIcon from "../icons/LoaderIcon";

import { useTranslation } from "react-i18next";
import { useHistory } from "../hooks/useHistory";
import { useForm } from "../hooks/useForm";

export default function LinkShortenerForm() {
  const { t } = useTranslation();
  const { history, updateHistory } = useHistory();
  const { form, updateForm } = useForm();

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    updateForm({
      type: "initSubmit",
    });
    try {
      const response: Response = await fetch(`/api/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalURL: form.value }),
      });
      if (response.ok) {
        const data: CreateLinkSuccess = await response.json();
        updateForm({
          type: "code",
          code: data.code,
        });

        const newHistory = [...history, data.code];
        updateHistory(newHistory);
      } else {
        const data: CreateLinkError = await response.json();
        updateForm({
          type: "error",
          error: data.error,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    } finally {
      updateForm({
        type: "loading",
        isLoading: false,
      });
    }
  }

  return (
    <div className="m-auto w-full md:w-[580px] mb-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-y-3 py-4 px-2 sm:px-4 md:px-0"
      >
        <input
          type="text"
          name="url-origin"
          placeholder={t("form.placeholder")}
          onChange={(e) =>
            updateForm({
              type: "value",
              value: e.target.value,
            })
          }
          required
          className="border-2 border-black w-full p-1"
        />
        <div
          id="anim"
          className="relative w-fit after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:-z-10 after:bg-green-500 after:rounded-full after:opacity-0 overflow-hidden rounded-lg"
        >
          <input
            type="submit"
            value={t("form.submit")}
            className="border-none bg-slate-600 text-white dark:bg-slate-600 dark:text-white cursor-pointer p-1 rounded-lg font-bold"
          />
        </div>
      </form>
      <LoaderIcon />
      <UrlShortResult />
      <ErrorMessage />
    </div>
  );
}
