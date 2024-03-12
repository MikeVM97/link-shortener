import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TitleComponent from "../components/TitleComponent";
import FaqItem from "../components/FaqItem";
import en from "../../locales/en/translation.json";
import es from "../../locales/es/translation.json";

describe("Text is showed according to language", () => {
  test("Text in <TitleComponent /> should show the correct text according to language", () => {
    render(<TitleComponent />);
    const el = screen.getByRole("heading", { level: 1 });

    expect(el).toBeDefined();

    const textExpectedEnglish = en[el.textContent as keyof LangJSON];
    const textExpectedSpanish = es[el.textContent as keyof LangJSON];

    expect(textExpectedEnglish).toBe("Link Shortener Online");
    expect(textExpectedSpanish).toBe("Acortador de Enlaces en Línea");
  });

  test("Text in <FaqItem /> should show the correct text according to language", () => {
    const { container } = render(
      <FaqItem
        marker={"faq.list.0.marker"}
        question={"faq.list.0.question"}
        answer={"faq.list.0.answer"}
      />
    );

    const h3 = container.querySelector("h3") as HTMLHeadingElement;
    expect(h3).toBeDefined();

    const markerExpectedEnglish = en.faq.list[0].marker;
    expect(markerExpectedEnglish).toBe("1.");

    const questionExpectedEnglish = en.faq.list[0].question;
    expect(questionExpectedEnglish).toBe("What is Link Shortener Online?");

    const p = container.querySelector("p") as HTMLParagraphElement;
    const answerExpectedEnglish = en.faq.list[0].answer;
    expect(answerExpectedEnglish).toBe(
      "Link Shortener Online is a free service that allows you reduce the length of your links to make them more manageable and easy to share."
    );
  });
});
