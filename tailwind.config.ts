/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
   
   extend: {
    colors: {
      lightGreen: "#D3F985",
      lightGray: "#F1F1F1",
      skyBlue: "#A6E8F6",
      shinyPink: "#FCBEDC",
      lightOrange: "#FBC899"
    },
   },
  
 },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  plugins: [],
}
