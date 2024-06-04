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
    },
  },
  plugins: [],
};
