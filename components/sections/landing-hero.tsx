'use client';

import Image from 'next/image';
import quentinSebire from '../../public/images/quentin-sebire.jpg';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import LoopTextsAnimation from '../elements/loop-texts-animation';

const LandingHero = () => {
    const jobList = [
        'Développeur Web',
        'UI/UX Designer',
        'Développeur Frontend',
        'WordPress Intégrateur',
        'Développeur JavaScript',
        'Web Designer',
    ];

    const cssTitle =
        'text-[340px] font-semibold leading-none text-white transition-all duration-[1s] ease-in-out absolute';

    const [whiteBlockStyle, setWhiteBlockStyle] = useState({
        height: '100%',
    });
    const [imageStyle, setImageStyle] = useState({
        width: '0%',
        height: '0%',
        opacity: 0,
        transform: 'rotate(0)',
    });
    const [leftTitleStyle, setLeftTitleStyle] = useState({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        opacity: 1,
    });
    const [rightTitleStyle, setRightTitleStyle] = useState({
        bottom: '50%',
        right: '50%',
        transform: 'translate(50%, 0)',
        opacity: 1,
    });
    const [loopStyle, setLoopStyle] = useState({ opacity: 0 });

    useEffect(() => {
        setTimeout(() => {
            setWhiteBlockStyle({
                height: '0%',
            });
        }, 500);
        setTimeout(() => {
            setImageStyle({
                width: '',
                height: '80%',
                opacity: 1,
                transform: '',
            });
            setLeftTitleStyle({
                top: '15%',
                left: '-24px',
                transform: 'translate(0)',
                opacity: 0.9,
            });
            setRightTitleStyle({
                bottom: '15%',
                right: '-24px',
                transform: 'translate(0)',
                opacity: 0.9,
            });
        }, 1500);
        setTimeout(() => {
            setLoopStyle({ opacity: 0.6 });
        }, 2500);
    }, []);

    return (
        <div className='relative h-screen w-screen overflow-hidden'>
            <div
                className='bg-[#090623] absolute z-50 bottom-0 left-1/2 -translate-x-1/2 w-full transition-all duration-[2s] ease-in-out'
                style={whiteBlockStyle}
            />
            <div className='h-full'>
                <h1
                    className={twMerge(cssTitle, 'z-20')}
                    style={leftTitleStyle}
                >
                    Quentin
                </h1>
                <Image
                    src={quentinSebire}
                    alt='Quentin Sébire Web développeur Fronted'
                    className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-auto mix-blend-luminosity z-30 transition-all duration-[1s] ease-in-out hover:mix-blend-normal -rotate-6 hover:rotate-0'
                    style={imageStyle}
                />
                <h1
                    className={twMerge(cssTitle, 'z-40')}
                    style={rightTitleStyle}
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
    );
};

export default LandingHero;
