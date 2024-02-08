import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        content: ['var(--font-content)'],
      },
      colors: {
        gold: {
          '50': '#FDF7EC',
          '100': '#FBF0DA',
          '200': '#F9E8C9',
          '300': '#F7E0B9',
          '400': '#F5D8A8',
          '500': '#F3D099',
          '600': '#E2BC86',
          '700': '#D1A673',
          '800': '#C19261',
          '900': '#B07E4F',
          '950': '#A36E40',
        },
      }
    },
  },
  plugins: [],
}
export default config
