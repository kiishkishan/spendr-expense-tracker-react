/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03045E",
        base: "#9A9A9A",
        lightBaseOfPrimary: "#F2F2F7",
        darkBaseOfPrimary: "#E6E6EF",
        percentagePositiveText: "#0C802C",
        percentagePositiveBox: "#DCFFDF",
        percentageNeutralText: "#505050",
        percentageNegativeText: "#DE1D1D",
        percentageNegativeBox: "#F5D0D0",
      },
      screens: {
        xs: "320px", // Define an xs breakpoint at 320px
      },
      boxShadow: {
        "custom-shadow": "5px 2px 80px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
