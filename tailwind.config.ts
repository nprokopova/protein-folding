import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-background-container":
          "linear-gradient(270deg, #060B28 0%, rgba(10, 14, 35, 0) 100%)",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", ...fontFamily.sans],
        proxima: ["var(--font-proxima)", ...fontFamily.sans],
      },
      colors: {
        "row-highlight": "#02223B",
        "table-header": "#6A6A9F",
        "brand-primary": '#060B28BD',
        "brand-secondary": '#0A0E23',
        "brand-tertiary": '#101A41',
      },
      fontSize: {
        "headings-lg": '22px',
        "headings-md": '18px',
        "paragraph": '14px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
export default config;
