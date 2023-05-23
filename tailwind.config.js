/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        "background": "#F9F5F1",
        "europe-blue": "#214fe0",
        "primary": {
          light: "#CCC6D4",
          medium: "#B99ECB",
          DEFAULT: "#7E27B0",
        },
      },
      borderRadius: {
        'lg': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

