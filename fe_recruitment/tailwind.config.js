/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(221 83% 53%)',
          light: 'hsl(214 100% 91%)',
          dark: 'hsl(221 83% 45%)',
        },
        secondary: {
          DEFAULT: 'hsl(271 81% 56%)',
        },
        background: 'hsl(0 0% 98%)',
        surface: 'hsl(0 0% 100%)',
        'text-base': 'hsl(222 47% 11%)',
        'text-muted': 'hsl(215 16% 47%)',
        border: 'hsl(214 32% 91%)',
        success: 'hsl(142 71% 45%)',
        danger: 'hsl(0 84% 60%)',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        glow: '0 0 15px -3px hsl(221 83% 53% / 0.3)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
