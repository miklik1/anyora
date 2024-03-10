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
    // #162114
    // #294122
    // #ffbba6
    // #eb3d00
    themes: [
      {
        mytheme: {
          primary: "#162114",

          secondary: "#294122",

          accent: "#162114",

          neutral: "#162114",

          "base-100": "#e09132",

          "background-color": "#e6f1ed",

          info: "#ffbba6",

          success: "#162114",

          warning: "#ffa700",

          error: "#ff787a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
