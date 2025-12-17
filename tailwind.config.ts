/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#88aaee",       // Blue
        accent: "#ff6b6b",     // Red/Pink
        secondary: "#e9d758",  // Yellow
        bw: "#ffffff",         // White
      },
      boxShadow: {
        neobrutalism: "5px 5px 0px 0px rgba(0,0,0,1)", 
        "neobrutalism-sm": "3px 3px 0px 0px rgba(0,0,0,1)",
      },
      borderWidth: {
        3: "3px",
      },
      fontWeight: {
        black: "900",
      },
    },
  },
  plugins: [],
};