'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDownCircle } from 'lucide-react';
import Link from 'next/link';

function AnimateChevronDown({ anchor }: { anchor: string }) {
    const [chevronTransitionCSS, setChevronTransitionCSS] =
        useState('size-4 opacity-0');

    useEffect(() => {
        const timer = setTimeout(() => {
            setChevronTransitionCSS('size-12 opacity-40');
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Link href={anchor}>
            <ChevronDownCircle
                strokeWidth={1}
                className={twMerge(
                    'transition-all duration-700 animate-bounce',
                    chevronTransitionCSS
                )}
            />
        </Link>
    );
}

AnimateChevronDown.displayName = 'AnimateChevronDown';
export default AnimateChevronDown;
