/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      arabic: ["Cairo", "sans-serif"],
      "arabic-2": ["Almarai", "sans-serif"],
      english: ["Cairo", "sans-serif"],
    },
    extend: {
      colors: {
        red: "#ff0000",
        lightRed: "#EE4B6A",
        darkRed: "#D26286",
        call: "#FFA930",
        lightGreen: "#8BDECF",
        green: "#7CB9AE",
        mail: "#239AB9",
        facebook: "#1877F2",
        blue: "#5A80AC",
        darkBlue: "#464B84",
        darkerBlue: "#404174",
        white: "#f1f1f1",
        white2: "#f6f6f6",
      },
      borderRadius: {
        sm: "8px",
        md: "10px",
        lg: "12px",
        xl: "14px",
        "2xl": "16px",
        circle: "50%",
      },
      screens: {
        xxs: "0px",
        xs: "640px",
        sm: "768px",
        md: "992px",
        lg: "1024px",
        xl: "1200px",
        xxl: "1440px",
        "3xl": "1536px",
      },
    },
  },
};
