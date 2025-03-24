'use client';

import { ArrowBigDown } from 'lucide-react';
import Link from 'next/link';
import { RefObject, useEffect, useState } from 'react';

const CursorButton = ({
    content = 'Voir',
    href,
    containerRef,
    gap = 0,
}: {
    content?: 'Voir' | 'Icon';
    href: string;
    containerRef: RefObject<HTMLDivElement | null>;
    gap?: number;
}) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorOpacity, setCursorOpacity] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.style.cursor = 'none';

        const handleMouseMove = (event: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            setCursorPosition({
                x: event.clientX - rect.left - 40 - gap,
                y: event.clientY - rect.top - 40 - gap,
            });
            setCursorOpacity(1);
        };

        const handleMouseEnter = () => {
            setCursorOpacity(1);
        };
        const handleMouseLeave = () => {
            setCursorOpacity(0);
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [containerRef]);

    return (
        <a
            href={href}
            className='absolute top-0 left-0 z-[999] transition-transform duration-0 cursor-none mix-blend-difference'
            style={{
                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                opacity: cursorOpacity,
            }}
        >
            <div className='border-2 border-white text-white aspect-square flex justify-center items-center rounded-full w-20 active:bg-white/20'>
                {content === 'Voir' ? (
                    <p className='text-2xl font-semibold'>Voir</p>
                ) : (
                    <ArrowBigDown size={32} />
                )}
            </div>
        </a>
    );
};

export default CursorButton;
