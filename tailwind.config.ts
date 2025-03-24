import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            keyframes: {
                first: {
                    '0%, 100%': {
                        transform: 'translateX(0) translateY(0) scale(1)',
                    },
                    '50%': {
                        transform:
                            'translateX(50px) translateY(-50px) scale(1.1)',
                    },
                },
                second: {
                    '0%, 100%': {
                        transform: 'translateX(0) translateY(0) scale(1)',
                    },
                    '50%': {
                        transform:
                            'translateX(-50px) translateY(50px) scale(0.9)',
                    },
                },
                third: {
                    '0%, 100%': {
                        transform: 'translateX(0) translateY(0) scale(1)',
                    },
                    '50%': {
                        transform:
                            'translateX(30px) translateY(-30px) scale(1.05)',
                    },
                },
                fourth: {
                    '0%, 100%': {
                        transform: 'translateX(0) translateY(0) scale(1)',
                    },
                    '50%': {
                        transform:
                            'translateX(-30px) translateY(30px) scale(0.95)',
                    },
                },
                fifth: {
                    '0%, 100%': {
                        transform: 'translateX(0) translateY(0) scale(1)',
                    },
                    '50%': {
                        transform:
                            'translateX(40px) translateY(-40px) scale(1.08)',
                    },
                },
                loopVertical: {
                    '0%': {
                        transform: 'translateY(0%)',
                    },
                    '100%': {
                        transform: 'translateY(-23.8%)',
                    },
                },
                loopVerticalInverse: {
                    '0%': {
                        transform: 'translateY(0%)',
                    },
                    '100%': {
                        transform: 'translateY(23.8%)',
                    },
                },
            },
            animation: {
                first: 'first 10s infinite ease-in-out',
                second: 'second 12s infinite ease-in-out',
                third: 'third 14s infinite ease-in-out',
                fourth: 'fourth 16s infinite ease-in-out',
                fifth: 'fifth 18s infinite ease-in-out',
                loopVertical: '3s loopVertical linear infinite',
                loopVerticalInverse: '3s loopVerticalInverse linear infinite',
            },
        },
    },
    plugins: [],
} satisfies Config;
