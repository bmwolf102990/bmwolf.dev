import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '375px',
      // => @media (min-width: 576px) { ... }
      'tablet': '768px',
      // => @media (min-width: 576px) { ... }
      'netbook': '1024px',
      // => @media (min-width: 960px) { ... }
      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
      '4k':'2560px'
      // => @media (min-width: 2560px) { ... }
    },
    extend: {
      backgroundImage: {
        'stacked_waves_blue': 'url("/stacked-waves-blue-haikei.svg")',
        'stacked_waves_green': 'url("/stacked-waves-green-haikei.svg")',
        'stacked_waves_orange': 'url("/stacked-waves-orange-haikei.svg")',
        'stacked_waves_purple': 'url("/stacked-waves-purple-haikei.svg")',
        'stacked_waves_red': 'url("/stacked-waves-red-haikei.svg")',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
