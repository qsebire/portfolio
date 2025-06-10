'use client';

import { useRef } from 'react';

import Image from 'next/image';
import CursorButton from '../elements/cursor-button';

import { projectType } from '@/data/projects';
import { slugify } from '@/lib/utils';

const ProjectImage = ({
    project,
    rotation,
}: {
    project: projectType;
    rotation: number;
}) => {
    const { imageSrc, imageAlt } = project;
    const containerRef = useRef(null);

    return (
        <a href={'#' + slugify(project.title)}>
            <div
                ref={containerRef}
                style={{ rotate: rotation + 'deg' }}
                className='peer'
            >
                <CursorButton
                    containerRef={containerRef}
                    content='Voir'
                />
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={800}
                    className='max-h-[40vh] object-contain'
                />
            </div>
        </a>
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
            className='grid content-center items-center gap-[10vw] py-[6vh]'
            style={{ gridTemplateColumns: `repeat(${COLUMN_COUNT}, 1fr)` }}
        >
            {displayedProjects.map((project, index) => {
                const rotation = rotationForIndex(index);

                return (
                    <ProjectImage
                        rotation={rotation}
                        project={project}
                        key={project.title}
                    />
                );
            })}
        </div>
    );
};

const Hero = ({ projects }: { projects: projectType[] }) => {
    return (
        <div className='relative w-full overflow-hidden bg-background'>
            <div className='relative lg:absolute z-10 h-full flex justify-center items-center pointer-events-none'>
                <h1 className='text-[15vw] font-bold text-center text-nowrap z-20 gradient-background-text-animated'>
                    Réalisations
                </h1>
                <span
                    className='absolute text-[15vw] font-bold text-white text-nowrap z-10'
                    style={{
                        WebkitTextStroke: '1vw',
                    }}
                >
                    Réalisations
                </span>
            </div>
            <div className='hidden lg:block'>
                <ProjectsImages projects={projects} />
            </div>
        </div>
    );
};

export default Hero;
