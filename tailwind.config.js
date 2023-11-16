/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':'radial-gradient(58.43% 58.43% at 50% 0%, #0E1330 0%, #060B27 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-custom': 'linear-gradient(90deg, #C561FF 0%, #5533FF 100%)',
          'back-color': "url('/images/Background.png')",
          'hero-back-img':"url('/images/Background-color.png')",
          'rectangle-8': "url('/images/Rectangle 8.png')",
      },
    },
  },
  plugins: [],
}
