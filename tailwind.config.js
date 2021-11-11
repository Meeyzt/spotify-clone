const lineClamp = require('@tailwindcss/line-clamp');

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
        hoverHeadbar: '#272727',
        headbarColor: '#262a2e',
        spotifyGreen: '#1db954',
        normalColor: '#b3b3b3',
        arrowBgColor: '#060a11',
        player: '#535353',
        nicePurple: '#8D67AB',
        podcastGreen: '#27856a',
        gradientBlue: '#450af5',
        gradientPurple: '#8e8ee5',
        collectionHeadbarColor: '#333',
        likedPurple: '#5038a0',
      },
      letterSpacing: {

      },
      fontSize: {
        xs: ['0.75rem', '16px'],
        s: ['.875rem', '16px'],
        header: ['1.80rem', '36px'],
        '2xs': ['.688rem', '16px'],
      },
      spacing: {
        13: '3.25rem',
        180: '11.354rem',
        150: '9.375rem',
      },
      screens: {
        xxsmall: '759px',
        xsmall: '859px',
        small: '1094px',
        mid: '1161px',
        large: '1299px',
        xlarge: '1453px',
        xxlarge: '1502px',
        xxxlarge: '1902px',
        playlistSmall: '909px',
        playlistMedium: '1094px',
      },
      gridColumn: {
        '2-span': 'span 2',
      },
      gridTemplateColumns: {
        180: 'repeat(auto-fill,minmax(180px,1fr))',
        226: 'repeat(auto-fill,226px)',
        400: '[index] 16px [first] 4fr [var1] 2fr [last] minmax(120px,1fr)',
        500: '[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)',
      },
      gridTemplateRows: {
        bir: '1fr',
        iki: '2fr',
      },
      gridAutoRows: {
        sifir: '0',
      },
      gridAutoCollumns: {
        sifir: '0',
      },
      zIndex: {
        1: '1',
        2: '2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    lineClamp,
  ],
};
