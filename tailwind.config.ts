import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        "line-gradient": "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
      },
      colors: {
        background: "#150E28",
        purple: "#903AFF",
        pink: "#D434FE",
        border: "#FFFFFF2E",
      },
    },
  },
  plugins: [],
};
export default config
