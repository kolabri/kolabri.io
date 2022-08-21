module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  important: true,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '' },
            "code::after": { content: '' },
          }
        }
      },
      colors: {
        koblue: {
          DEFAULT: '#36A9E1'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
