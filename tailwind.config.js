import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,md,mustache,json}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
