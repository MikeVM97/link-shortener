import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "300px",
      sm: "400px",
      md: "600px",
      lg: "700px",
      xl: "800px",
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
