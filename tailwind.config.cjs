/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      maxWidth: {
        128: "39.375rem",
      },
    },
  },

  plugins: [],
};

module.exports = config;
