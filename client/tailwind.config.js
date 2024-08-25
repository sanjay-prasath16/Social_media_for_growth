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
      margin: {
        icon: '3.5rem',
      },
    },
    screens: {
      navSearch: '870px',
      removeName: '672px',
      moveIcon: '996px',
      thirdBorder: '797px',
      borderCol: '768px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      twoxl: '1536px',
    }
  },
  plugins: [],
}