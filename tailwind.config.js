module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#1F2B5D',
        'weather-secondary': '#004E71',
      },
    },
    fontFamily: {
      'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
    },
    container: {
      padding: '2rem',
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
  plugins: [],
};
