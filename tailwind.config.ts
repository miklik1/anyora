import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hunter-green": {
          "50": "#f4f7f2",
          "100": "#e5ebe0",
          "200": "#cad7c3",
          "300": "#a4bb9a",
          "400": "#7a996e",
          "500": "#597b4e",
          "600": "#43613a",
          "700": "#344e2e",
          "800": "#2b3e27",
          "900": "#233420",
          "950": "#162114",
        },
      },
      theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-unbounded)"],
            mono: ["var(--font-roboto-mono)"],
          },
        },
      },
    },
  },
  daisyui: {
    // #162114
    // #294122
    // #ffbba6
    // #eb3d00
    // themes: [
    //   {
    //     mytheme: {
    //       primary: "rgb(22, 33, 20)",

    //       secondary: "rgb(41, 65, 34)",

    //       accent: "rgb(22, 33, 20)",

    //       neutral: "rgb(22, 33, 20)",

    //       "base-100": "rgb(224, 145, 50)",

    //       "background-color": "rgb(230, 241, 237)",

    //       info: "rgb(255, 187, 166)",

    //       success: "rgb(22, 33, 20)",

    //       warning: "#ffa700",

    //       error: "#ff787a",
    //     },
    //   },
    // ],
    themes: false,
  },
  plugins: [require("daisyui")],
};
export default config;
