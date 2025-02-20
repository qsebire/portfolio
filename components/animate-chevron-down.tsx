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
            setChevronTransitionCSS('size-12 opacity-100');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Link href={anchor}>
            <ChevronDownCircle
                strokeWidth={1}
                className={twMerge(
                    'absolute bottom-0 transition-all duration-700 animate-bounce ',
                    chevronTransitionCSS
                )}
            />
        </Link>
    );
}

export default AnimateChevronDown;
