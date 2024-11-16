/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary':'#5f6fff' #577cff
        // colorkit
        //svg viewer
        'primary':'#14B8A6'
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}
