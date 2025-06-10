'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import LoopTextsAnimation from '../elements/loop-texts-animation';
import CursorButton from '../elements/cursor-button';

import quentinSebire from '../../public/images/quentin-sebire.jpg';
import { useIsMobile } from '@/lib/use-is-mobile';

const Hero = () => {
    const jobList = [
        'WordPress Intégrateur',
        'Développeur Web',
        'UI/UX Designer',
        'Développeur JavaScript',
        'Web Designer',
        'Développeur Frontend',
    ];

    const containerRef = useRef<HTMLDivElement>(null);

    const cssTitle =
        'text-[23vw] md:text-[20vw] 2xl:text-[17vw] font-bold leading-none text-white transition-all duration-[1s] ease-in-out absolute';

    const [whiteBlockStyle, setWhiteBlockStyle] = useState({
        height: '100%',
    });
    const [styleAnimation, setStyleAnimation] = useState({
        image: {
            width: '0%',
            height: '0%',
            opacity: 0,
            transform: 'rotate(0)',
        },
        leftTitle: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            opacity: 1,
        },
        rightTitle: {
            bottom: '50%',
            right: '50%',
            transform: 'translate(50%, 0)',
            opacity: 1,
        },
    });
    const [loopStyle, setLoopStyle] = useState({ opacity: 0 });
    const isMobile = useIsMobile(1024);

    useEffect(() => {
        setTimeout(() => {
            setWhiteBlockStyle({
                height: '0%',
            });
        }, 500);
        setTimeout(() => {
            setStyleAnimation({
                image: {
                    width: '',
                    height: '70%',
                    opacity: 1,
                    transform: '',
                },
                leftTitle: {
                    top: '15%',
                    left: '-24px',
                    transform: 'translate(0, 0)',
                    opacity: 0.9,
                },
                rightTitle: {
                    bottom: '15%',
                    right: '-24px',
                    transform: 'translate(0, 0)',
                    opacity: 0.9,
                },
            });
        }, 1500);
        setTimeout(() => {
            setLoopStyle({ opacity: 1 });
        }, 1500);
    }, []);

    return (
        <a
            href={isMobile ? undefined : '#top'}
            aria-disabled={isMobile}
            tabIndex={isMobile ? -1 : 0}
            className='pointer-events-none lg:pointer-events-auto'
        >
            <div
                ref={containerRef}
                className='relative h-[90vh] lg:h-screen w-screen overflow-hidden'
            >
                <CursorButton
                    content='Icon'
                    containerRef={containerRef}
                    hideOnMobile
                />
                <div
                    className='absolute z-50 bottom-0 left-1/2 -translate-x-1/2 w-full transition-all duration-[2s] ease-in-out bg-background'
                    style={whiteBlockStyle}
                />
                <div className='h-full'>
                    <h1
                        className={cn(cssTitle, 'z-20')}
                        style={styleAnimation.leftTitle}
                    >
                        Quentin
                    </h1>
                    <Image
                        src={quentinSebire}
                        alt='Quentin Sébire Web développeur Fronted'
                        className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-auto mix-blend-luminosity z-30 transition-all duration-[1s] ease-in-out -rotate-6 max-w-[65%] sm:max-w-[60%] object-contain'
                        style={styleAnimation.image}
                    />
                    <h1
                        className={cn(cssTitle, 'z-40')}
                        style={styleAnimation.rightTitle}
                    >
                        Sébire
                    </h1>
                </div>
                <div
                    className='absolute left-0 bottom-4 z-20 transition-all duration-[4s] ease-in-out'
                    style={loopStyle}
                >
                    <LoopTextsAnimation textArr={jobList} />
                </div>
            </div>
        </a>
    );
};

export default Hero;
