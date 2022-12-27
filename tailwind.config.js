/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#86efac",
          secondary: "#fb7185",
          accent: "#fef08a",
          neutral: "#f3f4f6",
          "base-100": "#44403c",
          info: "#a78bfa",
          success: "#10b981",
          warning: "#fb923c",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
