module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        white: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strock: "#F1F1F3",
        lite: "#FCFCFD",
        darkBg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStrockColor: "#3A3A43",
        darkRed: "#422C32",
        iconColor: "#A2A2A8",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        error: "#EB5757",
      },
      boxShadow: {
        "15%": "10px 10px 20px rgba(218, 213, 213, 0.15)",
        "25%": "10px 10px 20px rgba(211, 211, 211, 0.25)",
      },
    },
  },
  plugins: [],
};
