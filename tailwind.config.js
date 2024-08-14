/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2.5rem",
        lg: "3rem",
        xl: "6.5rem",
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": ["5rem", "1"],
      },
      spacing: {
        49: "12.25rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        80: "80",
        90: "90",
        100: "100",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.bold"),
              color: theme("colors.red.600"),
              marginTop: "1.5em",
            },
            h3: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.bold"),
            },
            a: {
              color: theme("colors.red.600"),
              "&:hover": {
                color: theme("colors.red.400"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
