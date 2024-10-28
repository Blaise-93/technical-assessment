import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /* respective alerts custom color for the feedback */
        customOrange: "#AD6F07",
        customGreen: "#099137",
        customError: "#CB1A14",

        customLightOrange: "#FBEAE9",
      },
    },
  },
  plugins: [],
};
export default config;
