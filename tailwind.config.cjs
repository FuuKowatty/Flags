/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%) ',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'dark-mode-text': 'hsl(0, 0%, 100%)'
        
      },
    },
  },
  plugins: [],
}
