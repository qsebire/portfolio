'use client';

import Image from 'next/image';
import AnimateChevronDown from './animate-chevron-down';
import quentinSebire from '../public/images/quentin-sebire-web-developpeur.jpg';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

function HomeHero() {
    const titleCSS: string =
        'font-medium z-10 transition-all duration-1000 w-fit';
    const subtitleCSS: string =
        'font-extralight text-fuchsia-500 z-10 transition-all duration-1000 w-fit whitespace-nowrap';
    const imageCSS: string =
        'absolute top-1/2 -translate-y-1/2 right-0 z-0 h-auto max-h-full object-contain -rotate-[10deg] opacity-80 transition-all duration-1000';

    const [cssAnimationTexts, setCssAnimationTexts] = useState(
        'ml-[50%] -translate-x-1/2'
    );
    const [cssAnimationTitle, setCssAnimationTitle] = useState(
        'text-[220px] leading-[.8]'
    );
    const [cssAnimationSubtitle, setCssAnimationSubtitle] = useState(
        'text-8xl leading-[.9]'
    );
    const [cssAnimationImage, setCssAnimationImage] = useState('w-0');

    useEffect(() => {
        const timer = setTimeout(() => {
            setCssAnimationTexts('ml-0 translate-x-0');
            setCssAnimationTitle('text-[170px] leading-[.9]');
            setCssAnimationSubtitle('text-7xl leading-[.9]');
            setCssAnimationImage('w-7/12');
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='relative w-4/5 mx-auto -mt-16'>
            <div className='h-screen space-y-4 flex flex-col justify-center transition-all'>
                <p
                    className={twMerge(
                        titleCSS,
                        cssAnimationTexts,
                        cssAnimationTitle
                    )}
                >
                    Quentin
                </p>
                <p
                    className={twMerge(
                        titleCSS,
                        cssAnimationTexts,
                        cssAnimationTitle
                    )}
                >
                    Sébire
                </p>
                <p
                    className={twMerge(
                        subtitleCSS,
                        cssAnimationTexts,
                        cssAnimationSubtitle
                    )}
                >
                    Web Développeur
                </p>
                <p
                    className={twMerge(
                        subtitleCSS,
                        cssAnimationTexts,
                        cssAnimationSubtitle
                    )}
                >
                    Frontend
                </p>
                <div className='pt-4'>
                    <AnimateChevronDown anchor='#sommaire' />
                </div>
            </div>
            <Image
                src={quentinSebire}
                alt='Quentin Sébire Web développeur Fronted'
                className={twMerge(imageCSS, cssAnimationImage)}
            />
        </div>
    );
}

export default HomeHero;
