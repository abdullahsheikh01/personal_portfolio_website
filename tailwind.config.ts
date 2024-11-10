
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(calc(100vw - 930px))' },
          '100%':{transform: 'translateX(calc(100vw - 100vw))'}
        },
      },
      animation: {
        slide: 'slide 3s ease-in-out infinite',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },    
    },
  },
  plugins: [],
} satisfies Config;
