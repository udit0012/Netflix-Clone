/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      padding:{
        88:"22rem"
      }
    },
  },
  plugins: [ require('preline/plugin'),],
}

