module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Lora"],
        body: ["Nunito"],
      },
      colors: {
        main: "#428FDF",
        sub: "#548CD9",
      },
      height: {
        "screen/2": "50vh",
        "screen/3": "33vh",
        "screen/4": "25vh",
        "screen/5": "20vh",
      },
      width: {
        "screen-30": "70vw",
        "screen/2": "50vw",
        "screen/3": "33vw",
        "screen/4": "25vw",
        "screen/5": "20vw",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
