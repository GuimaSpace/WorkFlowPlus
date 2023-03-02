/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'workflow': 'url(../../public/bgws1.png)'
      }
    },
  },
  plugins: [],
}
