const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    screens: {
      xs: "361px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-color": "#FD853A",
        "secondary-color": "#171717"
      },
    },
  },
  plugins: [],
};
