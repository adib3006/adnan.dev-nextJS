/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        keyframes: {
            contact: {
                from: { transform: 'translateY(-15px)' },
                to: { transform: 'translateY(0px) scale(1.03)' },
            },
            home: {
                from: { transform: 'translateY(-10px)' },
                to: { transform: 'translateY(10px)' },
            },
        },
        animation: {
            'bounce-scale': 'contact 3s infinite ease alternate',
            'bounce-only': 'home 3s infinite ease alternate',
        },
    },
    plugins: [],
};
