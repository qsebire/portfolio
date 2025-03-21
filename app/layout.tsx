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
                {/* <PatternBackground /> */}
                <div className='min-h-screen'>
                    <main>{children}</main>
                    <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center py-6'>
                        <a
                            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                aria-hidden
                                src='/file.svg'
                                alt='File icon'
                                width={16}
                                height={16}
                            />
                            Learn
                        </a>
                        <a
                            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                aria-hidden
                                src='/window.svg'
                                alt='Window icon'
                                width={16}
                                height={16}
                            />
                            Examples
                        </a>
                        <a
                            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                            href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                aria-hidden
                                src='/globe.svg'
                                alt='Globe icon'
                                width={16}
                                height={16}
                            />
                            Go to nextjs.org →
                        </a>
                    </footer>
                </div>
            </body>
        </html>
    );
}
