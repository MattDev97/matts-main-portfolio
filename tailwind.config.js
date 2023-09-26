module.exports = {
  purge: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Colors
      backgroundColor: {
        // Define custom background colors
        'primary': '#000428',
        'secondary': '#f6993f',
      },
      textColor: {
        // Define custom text colors
        'primary': '#3490dc',
        'secondary': '#E6F4F1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
