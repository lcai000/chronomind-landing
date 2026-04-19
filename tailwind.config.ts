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
        background: {
          primary: "#141C1C",
          secondary: "#1A2424",
        },
        surface: {
          elevated: "#212F2F"
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3A8",
          disabled: "#4A5B5E"
        },
        accent: {
          primary: "#8ED4B4",
          hover: "#7CBFA3",
          family: "#9B87C4",
          professional: "#6BA5D6"
        },
        status: {
          success: "#8BC9A3",
          warning: "#E8C487",
          error: "#E89B9B"
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          focus: "#8ED4B4"
        }
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        display: ["var(--font-newsreader)"],
        editorial: ["var(--font-newsreader)"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both"
      }
    },
  },
  plugins: [],
};
export default config;
