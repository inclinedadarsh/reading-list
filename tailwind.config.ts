import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shadowPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
        }
      },
      animation: {
        shadowPulse: 'shadowPulse 2s infinite'
      }
    }
  },
  plugins: [],
};
export default config;
