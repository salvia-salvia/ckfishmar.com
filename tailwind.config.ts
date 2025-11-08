import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
