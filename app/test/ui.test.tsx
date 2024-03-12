import { expect, test, beforeAll, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemesContainer from "../components/ThemesContainer";
import ThemeProvider from "../context/ThemeProvider";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

test("Theme buttons change theme correctly", () => {
  const { container } = render(
    <ThemeProvider>
      <ThemesContainer
        mediaQuery="hidden md:flex"
        styles="justify-between items-center gap-x-5 rounded-full border border-black p-2 dark:border-white"
      />
    </ThemeProvider>
  );

  const lightButton = container.querySelector(
    "button#light"
  ) as HTMLButtonElement;

  const darkButton = container.querySelector(
    "button#dark"
  ) as HTMLButtonElement;

  const systemButton = container.querySelector(
    "button#system"
  ) as HTMLButtonElement;

  expect(lightButton).toBeDefined();
  expect(darkButton).toBeDefined();
  expect(systemButton).toBeDefined();

  fireEvent.click(lightButton);
  expect(document.body.classList.contains("dark")).toBeFalsy();
  expect(localStorage.getItem("theme")).toBe("light");

  fireEvent.click(darkButton);
  expect(document.body.classList.contains("dark")).toBeTruthy();
  expect(localStorage.getItem("theme")).toBe("dark");

  fireEvent.click(systemButton);
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    expect(document.body.classList.contains("dark")).toBeTruthy();
    expect(localStorage.getItem("theme")).toBe("system");
  } else {
    expect(document.body.classList.contains("dark")).toBeFalsy();
    expect(localStorage.getItem("theme")).toBe("system");
  }
});
