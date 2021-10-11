module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        themeColor: '#fff',
        menuColor: '#000',
        contentColor: '#121212',
        activeColor: '#282828',
        minimalColor: '#181818',
        hoverHeadbar: '#424040',
        headbarColor: '#423f3fa6',
        spotifyGreen: '#1db954',
        normalColor: '#b3b3b3',
      },
      fontSize: {
        s: ['.800rem', '16px'],
        header: ['1.80rem', '36px'],
        '2xs': ['.625rem', '16px'],
      },
      spacing: {
        13: '3.25rem',
        180: '11.354rem',
        150: '9.375rem',
        player: 'calc(100vw/3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
