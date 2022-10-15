/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-isan': "url('/src/img/isan.png')",
      }
    },
  },
  plugins: [],
}
