import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FD9745',
        mainAccent: '#fc7303',
        overlay: 'rgba(0,0,0,0.8)',
        bg: '#f5f5f5',
        text: '#000',
        border: '#000',
        darkBg: '#272933',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      screens: {
        w450: { raw: '(max-width: 450px)' },
      },
    },
  },
  darkMode: 'class',
  plugins: [tailwindAnimate],
}
export default config
