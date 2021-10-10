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
        minimalColor: '#1b1718',
        hoverHeadbar: '#424040',
        headbarColor: '#423f3fa6',
        spotifyGreen: '#1db954',
      },
      fontSize: {
        's': '.800rem',
        'header': ['1.80rem','36px']
      },
      spacing: {
        13: '3.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
