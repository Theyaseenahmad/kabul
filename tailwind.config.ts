import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: "#2A0D0C",
          900: "#3D1210",
          800: "#5C1B1B",
          700: "#7A2A28",
          600: "#93372F",
        },
        gold: {
          300: "#F1DDA8",
          400: "#E8C275",
          500: "#D4A24C",
          600: "#B8823A",
          700: "#93672E",
        },
        cream: {
          50: "#FBF6EE",
          100: "#F5EAD9",
          200: "#EADFC8",
        },
        copper: {
          500: "#A85C41",
          600: "#8C4A34",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "radial-vignette":
          "radial-gradient(circle at 50% 30%, rgba(232,194,117,0.10), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
