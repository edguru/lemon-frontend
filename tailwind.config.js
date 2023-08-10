/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['light']
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './pages/index.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'gradient-start': '#EAADFF',
        'gradient-end': '#FFC46C',
        primaryBloodRed: '#FF0034',
        lightPinkBg: '#feabbc',
        secondary: '#1f2937',
        accent: '#10b981'
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(270deg, var(--tw-gradient-stops))'
      }),
      linearGradientColors: theme => theme('colors')
    }
  },
  plugins: [require('flowbite/plugin'), require('daisyui')]
};
