/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto : ["'Work Sans', sans-serif","'Nunito Sans', sans-serif","'Roboto', sans-serif","'Poppins', sans-serif"]
      },
    },
  },
  plugins: [],
}

