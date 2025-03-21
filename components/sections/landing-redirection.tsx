'use client';

import Image from 'next/image';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AnimateButton = ({
    text,
    animation = 'animate-loopVertical',
}: {
    text: string;
    animation?: 'animate-loopVertical' | 'animate-loopVerticalInverse';
}) => {
    const textClasses =
        'text-8xl font-semibold text-center transition-all duration-700 tracking-wider';

    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [repeatedText, setRepeatedText] = useState<string[]>([]);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const containerHeight = containerRef.current.clientHeight;
        const textHeight = textRef.current.clientHeight;

        if (textHeight === 0) return;

        let textArray: string[] = [];
        let count = 1;

        while (count * textHeight < containerHeight * 2) {
            textArray.push(text);
            count++;
        }

        setRepeatedText(textArray);
    }, [text]);

    console.log(repeatedText);

    return (
        <div
            ref={containerRef}
            className='h-full overflow-hidden group hover:border-[64px] border-[#090623]/50 transition-all duration-1000'
        >
            <div className='h-full w-full flex flex-col items-center justify-center  border-4 group-hover:border-white border-transparent group-hover:bg-transparent bg-[#090623]/50 transition-all duration-1000'>
                <div
                    className={cn('h-fit group-hover:animate-none ', animation)}
                >
                    <p
                        ref={textRef}
                        className={textClasses}
                    >
                        {text}
                    </p>
                    {repeatedText.map((t, index) => {
                        const textColor = index % 2 === 0 ? '#db2777' : 'white';

                        return (
                            <p
                                key={index}
                                className={cn(
                                    textClasses,
                                    'group-hover:leading-[0px] leading-none group-hover:opacity-0 opacity-100'
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
        </div>
    );
};

const LandingRedirection = () => {
    return (
        <div className='h-screen relative gradient-background shadow-[0_-35px_48px_rgba(9,6,35,0.6)]'>
            <Image
                src='/images/noise.svg'
                width='1980'
                height='1280'
                alt='grain'
                className='pointer-events-none absolute top-0 left-0 mix-blend-overlay opacity-60'
            />
            <div className='absolute w-full h-full z-50 grid grid-cols-2 items-center justify-center '>
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
