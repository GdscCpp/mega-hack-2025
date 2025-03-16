import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: "#7C7C80",
        primary: "#181819",
        secondary: "#252526",
        sidebar: "#1C1C1F",
        "off-white": "#DCDCDC",
        "primary-blue": "#265FC9",
      },
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
} satisfies Config;

export default config;
