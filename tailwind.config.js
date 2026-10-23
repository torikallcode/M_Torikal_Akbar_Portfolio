/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hitam: '#252525',
        putih: '#F4F4F4',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}
