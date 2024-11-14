
import { transform } from "next/dist/build/swc/generated-native";
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
          '0%': { 
            transform: 'translateX(0%)' 
          },
          '50%': { 
            transform: 'translateX(calc(100vw - 90vw))' 
          },
          '100%':{
            transform: 'translateX(calc(100vw - 100vw))'
          }
        },
        beat:{
          '0%':{
            transform:'scale(1)',
          },
          '100%':{
            transform:'scale(1.2)'
          }
        }
      },
      animation: {
        slide: 'slide 3s ease-in-out infinite',
        beat: 'beat 0.6s infinite alternate'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens:{
        sm:{min:'600px',max:'767px'},
        lap:{min:'414px',max:'599px'},//Large Android Phones 
        lmd:{min:'360px',max:'413px'},//Large and medium Mobile Devices
      }
    },
  },
  plugins: [],
} satisfies Config;
