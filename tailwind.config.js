module.exports = {
  purge: ['./src/pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // https://tailwindcss.com/docs/breakpoints
      // 'md': {'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},

      // tb 481px
      maxtb: { max: '481px' }, // max-width: 481px
      tb: '481px', // min-width: 481px
      onlytb: { min: '481px', max: '800px' },

      // pc 801px
      maxpc: { max: '800px' },
      pc: '801px',

      // sm 640px
      maxsm: { max: '640px' },
      sm: '640px',
      onlysm: { min: '640px', max: '767px' },

      // md 768px
      maxmd: { max: '767px' },
      md: '768px',
      onlymd: { min: '768px', max: '1199px' },

      // lg 1200px
      maxlg: { max: '1199px' },
      lg: '1200px',
      onlylg: { min: '1200px', max: '1439px' },

      // xl 1440px
      maxxl: { max: '1439px' },
      xl: '1440px',
      onlyxl: { min: '1440px', max: '1799px' },

      // wide 1800px
      maxwide: { max: '1799px' },
      wide: '1800px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
