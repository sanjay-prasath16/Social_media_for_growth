/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F7F7F7',
        bgGray: '#F4F2EE',
        iconGray: '#666666',
        customBlue: '#000932',
        customBorderPurple: '#DDCEEA',
        customInputBorderPurple: '#9C8AAE',
        customIconColor: '#9C8AAE'
      },
      fontSize: {
        label: '15px'
      },
      width: {
        customButtonWidth: '310px',
      },
    },
    screens: {
      navSearch: '810px',
      xl: '1280px',
    }
  },
  plugins: [],
}