'use client';

import { useEffect, useState } from 'react';

export function useIsMobile(breackpoint = 640) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < breackpoint);
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, [breackpoint]);

    return isMobile;
}
