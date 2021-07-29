module.exports = {
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    safelist: [
      'bg-gray-700',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // 'serif': ['Georgia', 'Cambria', ...],
      // 'mono': ['SFMono-Regular', 'Menlo', ...],
      sans: ['Karla', 'sans-serif'],
      // custom: ['Karla', 'sans-serif'],
    },
    fontSize: {
      'super-xs': '.65rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  variants: { borderColor: ['responsive', 'hover', 'focus', 'focus-within'] },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
