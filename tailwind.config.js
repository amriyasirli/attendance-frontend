/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
    './navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Font utama
      },
      colors: {
        primary: '#2BB148', // Hijau utama
        secondary: '#FFA506', // Oranye
        tertiary: '#0A96C1', // Biru
        text: '#20262E', // Warna teks
        grey: '#EEEEEE', // Abu-abu terang
        border: '#484C56', // Warna border
        white: '#FFFFFF', // Putih
        disabled: '#D9D9D9', // Warna untuk disabled state
      },
    },
  },
  plugins: [],
};
