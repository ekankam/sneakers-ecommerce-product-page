/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        12: ['12px', '14.88px'],
        13: ['13px', '16.12px'],
        15: ['15px', '26px'],
        16: ['16px', '26px'],
        18: ['18px', '26px'],
        28: ['28px', '32px'],
        44: ['44px', '48px'],
      },
      colors: {
        'custom-white': 'hsl(0, 0%, 100%)',
        'grayish-blue-300': 'hsla(220, 9%, 45%, 1)',
        'grayish-blue-200': 'hsl(220, 14%, 75%)',
        'grayish-blue-100': 'hsl(223, 64%, 98%, 1)',
        'dark-blue': 'hsla(220, 14%, 13%, 1)',
        'custom-black': 'hsl(0, 0%, 0%)',
        'custom-orange-900': 'hsl(26, 100%, 55%, 1)',
        'custom-orange-300': 'hsl(25, 100%, 94%)',
        'overlay': 'hsl(0, 0%, 0%, .75)',
      },
    },
  },
  plugins: [],
};
