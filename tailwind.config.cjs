module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D4F',
        base: '#FFFFFF',
        text: '#000000',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['\'Nokia Pure Headline\'', 'sans-serif'],
      },
      borderRadius: {
        chip: '0.5rem',
      },
    },
  },
  plugins: [],
};
