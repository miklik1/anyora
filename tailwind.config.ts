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
          primary: "rgb(22, 33, 20)",

          secondary: "rgb(41, 65, 34)",

          accent: "rgb(22, 33, 20)",

          neutral: "rgb(22, 33, 20)",

          "base-100": "rgb(224, 145, 50)",

          "background-color": "rgb(230, 241, 237)",

          info: "rgb(255, 187, 166)",

          success: "rgb(22, 33, 20)",

          warning: "#ffa700",

          error: "#ff787a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
