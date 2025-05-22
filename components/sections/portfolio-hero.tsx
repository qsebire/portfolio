'use client';

import { useRef } from 'react';

import Image from 'next/image';
import CursorButton from '../elements/cursor-button';

import { projectType } from '@/data/projects';
import { slugify } from '@/lib/utils';

const ProjectImage = (project: projectType) => {
    const { imageSrc, imageAlt } = project;

    return (
        <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={800}
            className='max-h-[40vh] object-contain'
        />
    );
};

const COLUMN_COUNT = 3;
const MAX_DISPLAYED = 6;

const ProjectsImages = ({ projects }: { projects: projectType[] }) => {
    const displayedProjects = projects.slice(0, MAX_DISPLAYED);

    const rotationForIndex = (index: number): number => {
        const baseRotation = 14;
        const rotationByIndex = (index % COLUMN_COUNT) * baseRotation;
        return index >= COLUMN_COUNT
            ? baseRotation - rotationByIndex
            : -baseRotation + rotationByIndex;
    };

    return (
        <div
            className='grid content-center items-center gap-[10vw] px-20 absolute top-0 left-0 w-full h-full grid-cols-3'
            style={{ gridTemplateColumns: `repeat(${COLUMN_COUNT}, 1fr)` }}
        >
            {displayedProjects.map((project, index) => {
                const containerRef = useRef(null);
                const rotation = rotationForIndex(index);

                return (
                    <a
                        href={'#' + slugify(project.title)}
                        key={project.title}
                    >
                        <div
                            ref={containerRef}
                            style={{ rotate: rotation + 'deg' }}
                            className='peer'
                        >
                            <CursorButton
                                containerRef={containerRef}
                                content='Voir'
                            />
                            <ProjectImage {...project} />
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

const Hero = ({ projects }: { projects: projectType[] }) => {
    return (
        <div className='relative gradient-background-animated'>
            <div className='relative z-10 py-40 xl:h-screen w-full flex justify-center items-center pointer-events-none'>
                <h1 className='text-[16.5vw] font-bold text-center text-nowrap z-20 text-white'>
                    Réalisations
                </h1>
                <p
                    className='absolute text-[16.5vw] font-bold text-center text-nowrap z-10 gradient-background-text-animated'
                    style={{
                        WebkitTextStroke: 8,
                    }}
                >
                    Réalisations
                </p>
            </div>
            <div className='hidden xl:block'>
                <ProjectsImages projects={projects} />
            </div>
        </div>
    );
};

export default Hero;
