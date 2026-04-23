import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0f172a",
          secondary: "#1e293b",
          tertiary: "#334155",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
          tertiary: "#94a3b8",
        },
        accent: {
          primary: "#0ea5e9",
          secondary: "#14b8a6",
          cta: "#f59e0b",
          "cta-hover": "#d97706",
        },
        success: "#22c55e",
        error: "#ef4444",
        border: "#334155",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
