import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const montserrat = Montserrat({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Quentin Sébire - Portfolio',
    description:
        'Portfolio de Quentin Sébire, Développeur Web JavaScript, React & React Native',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='fr'
            className='scroll-smooth '
            suppressHydrationWarning={false}
        >
            <body
                className={`${montserrat.className} antialiased bg-background`}
            >
                <div className='min-h-screen'>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
