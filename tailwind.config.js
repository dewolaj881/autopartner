module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'russo': ['Russo One', 'sans-serif']
      },
      spacing: {
        'spacing-mobile': '500px'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/volvo.jpg')",
        'crossing': "url('/img/crossing.png')",
       }),
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
