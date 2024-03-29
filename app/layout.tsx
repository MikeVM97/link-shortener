import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuMobileProvider from "./context/MenuMobileProvider";
import LanguageProvider from "./context/LanguageProvider";
import ThemeProvider from "./context/ThemeProvider";
import HistoryProvider from "./context/HistoryProvider";
import ModalProvider from "./context/ModalProvider";
import FormProvider from "./context/FormProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Shortener Online",
  description: "link shortener online for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuMobileProvider>
          <LanguageProvider>
            <ThemeProvider>
              <HistoryProvider>
                <ModalProvider>
                  <FormProvider>{children}</FormProvider>
                </ModalProvider>
              </HistoryProvider>
            </ThemeProvider>
          </LanguageProvider>
        </MenuMobileProvider>
      </body>
    </html>
  );
}
