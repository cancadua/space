/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space': "url('/img/space.png')",
      },
      spacing: {
        '1/8': '12.5%',
      }
    }
  },
  plugins: [],
}
