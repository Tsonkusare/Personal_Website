import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*,{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'color1': '#ff3066',
        'color2': '#30ffc9',
        'color3': '#26cca0',
      },
      animation:{
        bounce:"bounce 0.5s alternate cubic-bezier(.95, 0.05, o.795, .035) infinite"
      },
      keyframes:{
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)"},
        },
      },
    },
  },
  plugins: [],
};
export default config;
