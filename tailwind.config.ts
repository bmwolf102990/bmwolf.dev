import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
