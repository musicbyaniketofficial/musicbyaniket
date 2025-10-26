module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#E6C07B',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.jpg')",
      }
    },
  },
  plugins: [],
}