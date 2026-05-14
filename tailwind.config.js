/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#EFECE6',      // Handmade paper beige
        ink: '#1B2236',        // Soft indigo/charcoal text
        primary: '#1A2A44',    // Deep Indigo blue
        accent: '#B06D4D',     // Muted copper accent
        dusty: '#F8F6F2',      // Dusty white
        muted: '#D8D4CA',      // For borders, dividers
        // Education & Growth
        edu: {
          mustard: '#C8923A',
          cream: '#F4EFE6',
          orange: '#B95D31',
          brown: '#5C4331',
          maroon: '#6A2A2A',
        },
        // Community Roots
        comm: {
          terracotta: '#C05C42',
          clay: '#8A5A44',
          red: '#7C241E',
          beige: '#E0D4C3',
          olive: '#6B705C',
          gold: '#B69A5D',
        },
        // Innovative Horizons
        inno: {
          indigo: '#181C3D',
          midnight: '#0D1128',
          silver: '#C4CCD4',
          cyan: '#3F88C5',
          white: '#F0F2F5',
          copper: '#C97A52',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'], // Editorial feel
      },
      backgroundImage: {
        'noise': "url('/noise.png')", // We'll simulate this with CSS if we don't have an image, or just use a CSS filter
      }
    },
  },
  plugins: [],
}
