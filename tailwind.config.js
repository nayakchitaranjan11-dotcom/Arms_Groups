/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050814',
          900: '#0A0F24',
          850: '#0F1731',
          800: '#141E3C',
          700: '#1E2B52',
          600: '#2A3C6E',
        },
        gold: {
          50: '#FAF6E9',
          100: '#F4EBCC',
          200: '#E8D799',
          300: '#DCC366',
          400: '#D4AF37', // Metallic Gold accent
          500: '#C5A059',
          600: '#B38E3F',
          700: '#8C6C2B',
          800: '#664C1B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #E5C158 0%, #C5A059 50%, #9A7B2C 100%)',
        'navy-gradient': 'linear-gradient(180deg, rgba(10,15,36,0.95) 0%, rgba(5,8,20,0.98) 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.15)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.25)',
        'premium': '0 20px 50px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
