/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "var(--color-primary-blue)",
          red: "var(--color-primary-red)",
          purple: "var(--color-neutral-purple)",
          teal: "var(--color-neutral-teal)",
        },

        light: {
          blue: "var(--color-light-blue)",
          red: "var(--color-light-red)",
          purple: "var(--color-light-purple)",
          teal: "var(--color-light-teal)",
        },

        black: "var(--color-black)",
        white: "var(--color-light-white)",
        
        neutral: {
          dark: "var(--color-dark-gray)",
          DEFAULT: "var(--color-medium-gray)",
          light: "var(--color-light-gray)",
        },
      },

      fontFamily: {
        krona: ["var(--font-krona-one)"],
        kumbh: ["var(--font-kumbh-sans)"],
        noto: ["var(--font-noto-sans-tc)"],
      },
    },
  },
  plugins: [],
};
