/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'valentine-pink': '#ff6b9d',
                'valentine-light': '#ff8fb3',
                'valentine-lighter': '#ffa2c6',
                'valentine-bg': '#fff0f3',
            },
            fontFamily: {
                dancing: ['Dancing Script', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 10s ease infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 157, 0.4)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 107, 157, 0.8)' },
                },
            },
        },
    },
    plugins: [],
}
