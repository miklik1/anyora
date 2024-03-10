import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3a2d28",

          secondary: "#a48374",

          accent: "#f1ede6",

          neutral: "#a48374",

          "base-100": "#bfc8a2",

          "background-color": "#e6f1ed",

          info: "#5abaff",

          success: "#00e374",

          warning: "#ffa700",

          error: "#ff787a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
