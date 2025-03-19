'use client';

import Image from 'next/image';
import quentinSebire from '../../public/images/quentin-sebire-web-developpeur.jpg';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import BlockContainer from '../elements/block-container';

function HomeHero() {
    const imageCSS: string =
        'absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 opacity-80 h-full z-0 object-cover transition-all duration-1000 w-full';
    const [cssAnimationText, setCssAnimationText] = useState('opacity-0');
    const [cssAnimationImage, setCssAnimationImage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setCssAnimationText('opacity-1 mx-auto text-center');
            setCssAnimationImage('-rotate-[5deg] w-1/3 opacity-15 h-4/5');
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='relative h-screen flex'>
            <BlockContainer className='relative z-10 space-y-4 self-center'>
                <h1
                    className={twMerge(
                        'font-semibold w-fit text-[160px] leading-[.9] transition-all duration-700',
                        cssAnimationText
                    )}
                >
                    Quentin
                    <br />
                    Sébire
                </h1>
                <p
                    className={twMerge(
                        'italic text-fuchsia-500 z-10 w-fit whitespace-nowrap text-5xl leading-tight transition-all duration-700',
                        cssAnimationText
                    )}
                >
                    Web Développeur
                    <br />
                    Frontend
                </p>
            </BlockContainer>
            <Image
                src={quentinSebire}
                alt='Quentin Sébire Web développeur Fronted'
                className={twMerge(imageCSS, cssAnimationImage)}
            />
        </div>
    );
}

export default HomeHero;
