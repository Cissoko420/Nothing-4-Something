import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        neon: "0 0 5px theme('colors.blue.200'), 0 0 20px theme('colors.red.500')",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        customBounce: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        customPulse: {
          '0%, 100%': {
            opacity: '1.5',
          },
          '50%': {
            opacity: '0.3',
          },
        },
      },
      animation: {
        'custom-bounce': 'customBounce 4s infinite',
        'custom-pulse': 'customPulse 3s infinite',
      },
    },
  },
  plugins: [],
}
export default config
