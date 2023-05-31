/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#155e75',
        'secondary':'#11d68b',
      },
      screens:{
        'md':'501px',
        'xs':'360px',
      },
      maxWidth:{
        'container':'60%',
      },
      maxHeight:{
        'container':'60%',
      },
      fontFamily:{
        'sans':['Sulphur Point','sans-serif']
      },
    },
  },
  plugins: [],
}

