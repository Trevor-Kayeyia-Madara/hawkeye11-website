import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0B0B0B',
        white: '#FFFFFF',
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
          light: '#E5C158',
        },
        gray: {
          soft: '#1A1A1A',
          text: '#CCCCCC',
        },
        offwhite: '#F7F7F7',
      },
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
        numbers: ['Rajdhani', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'texture-carbon': "url('/textures/carbon-fiber.png')",
        'texture-brushed': "linear-gradient(0deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
      },
      boxShadow: {
        'gold-glow': '0 6px 24px rgba(212,175,55,0.14)',
      },
    },
  },
  plugins: [],
};

export default config;