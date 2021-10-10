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
      },
      fontSize: {
        's': '.875rem',
        'header': ['1.80rem','36px']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
