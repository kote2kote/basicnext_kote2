module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // https://tailwindcss.com/docs/breakpoints
      // 'md': {'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},

      // tb 481px
      maxtb: { max: '481px' }, // max-width: 481px
      mintb: '481px', // min-width: 481px
      tb: { min: '481px', max: '800px' },

      // pc 801px
      maxpc: { max: '800px' },
      minpc: '801px',

      // sm 640px
      maxsm: { max: '640px' },
      minsm: '641px',
      sm: { min: '641px', max: '767px' },

      // md 768px
      maxmd: { max: '767px' },
      minmd: '768px',
      md: { min: '768px', max: '1023px' },

      // lg 1024px
      maxlg: { max: '1023px' },
      minlg: '1024px',
      lg: { min: '1024px', max: '1279px' },

      // xl 1280px
      maxxl: { max: '1279px' },
      minxl: '1280px',
      xl: { min: '1280px', max: '1599px' },

      // wide 1600px
      maxwide: { max: '1599px' },
      minwide: '1600px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
