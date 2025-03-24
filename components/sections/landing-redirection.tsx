'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import CursorButton from '../elements/cursor-button';

const AnimateButton = ({
    text,
    animation = 'animate-loopVertical',
}: {
    text: string;
    animation?: 'animate-loopVertical' | 'animate-loopVerticalInverse';
}) => {
    const textClasses =
        'text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-[4rem] 2xl:text-7xl min-[1600px]:text-[5rem] min-[1800px]:text-8xl font-semibold text-center transition-all duration-[1s] tracking-wider';

    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [repeatedText, setRepeatedText] = useState<string[]>([]);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const containerHeight = containerRef.current.clientHeight;
        const textHeight = textRef.current.clientHeight;

        if (textHeight === 0) return;

        let textArray: string[] = [];
        let count = 0;

        while (count * textHeight < containerHeight * 2) {
            textArray.push(text);
            count++;
        }

        setRepeatedText(textArray);
    }, [text]);

    return (
        <div className='h-full w-full overflow-hidden group max-lg:border-[32px] lg:hover:border-[64px] border-[#090623]/50 transition-all duration-[1s] relative'>
            <CursorButton
                href='#top'
                containerRef={containerRef}
                gap={64}
            />
            <div
                ref={containerRef}
                className='h-full w-full flex flex-col items-center justify-center lg:bg-[#090623]/50 group-hover:bg-transparent transition-all duration-[1s]'
            >
                <div
                    className={cn(
                        'h-fit lg:group-hover:animate-none ',
                        animation
                    )}
                >
                    {repeatedText.map((t, index) => {
                        const textColor = index % 2 === 0 ? '#db2777' : 'white';

                        return (
                            <p
                                key={index}
                                className={cn(
                                    textClasses,
                                    'lg:group-hover:leading-[0px] leading-none opacity-10 lg:group-hover:opacity-0 lg:opacity-100'
                                )}
                                style={{
                                    color: textColor,
                                }}
                            >
                                {t}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className='absolute top-0 left-0 z-50 h-full w-full flex flex-col items-center justify-center border-4 border-white bg-transparent transition-all duration-[1s] lg:opacity-0 lg:group-hover:opacity-100'>
                <p
                    ref={textRef}
                    className={textClasses}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

const LandingRedirection = () => {
    return (
        <div className='h-screen overflow-hidden relative gradient-background shadow-[0_-35px_48px_rgba(9,6,35,0.6)]'>
            <Image
                src='/images/noise.svg'
                width='1980'
                height='1280'
                alt='grain'
                className='pointer-events-none absolute top-0 left-0 mix-blend-overlay opacity-60'
            />
            <div className='h-full z-50 grid grid-cols-1 lg:grid-cols-2 items-center justify-center '>
                <AnimateButton text='PORTFOLIO' />
                <AnimateButton
                    text='EXPÉRIENCES'
                    animation='animate-loopVerticalInverse'
                />
            </div>
        </div>
    );
};

export default LandingRedirection;
