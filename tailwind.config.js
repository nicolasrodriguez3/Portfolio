/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      monospace: ["Inconsolata", "monospace"],
      serif: ['Laila', 'sans-serif'],
    },
  },
  plugins: [],
}

