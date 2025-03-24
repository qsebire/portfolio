'use client';

import { useRef } from 'react';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';
import CursorButton from '../elements/cursor-button';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className='sticky top-0 bg-background h-screen flex items-center justify-center'
        >
            <CursorButton
                href='#top'
                content='Icon'
                containerRef={containerRef}
            />
            <div className='text-[20vw] top-[-10vh] font-bold gradient-background-text'>
                <h1>Portfolio</h1>
            </div>
        </div>
    );
};

export default Hero;
