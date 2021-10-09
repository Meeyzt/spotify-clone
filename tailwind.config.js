module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        themeColor: '#fff',
        menuColor: '#000',
        contentColor: '#1e1e1e',
        brandColor: '#1ed760',
        activeColor: '#282828',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
