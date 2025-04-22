'use client';

import { useRef } from 'react';

import slugify from '@/lib/slugify';

import Image from 'next/image';
import CursorButton from '../elements/cursor-button';

import { PROJECTS, projectType } from '@/data/projects';

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

const ProjectsImages = () => {
    const columnCount = 3;

    const displayedProjects =
        PROJECTS.length > 6 ? PROJECTS.slice(0, 6) : PROJECTS;

    const projectImages = displayedProjects.map((project, index) => {
        const containerRef = useRef(null);

        const baseRotation = 14;
        const rotationByIndex = (index % columnCount) * baseRotation;
        const rotationByRow =
            index >= columnCount
                ? baseRotation - rotationByIndex
                : -baseRotation + rotationByIndex;

        return (
            <div
                ref={containerRef}
                style={{ rotate: rotationByRow + 'deg' }}
                className='peer'
                key={index}
            >
                <CursorButton
                    containerRef={containerRef}
                    href={'#' + slugify(project.title)}
                    content='Icon'
                />
                <ProjectImage {...project} />
            </div>
        );
    });

    return (
        <div
            className='grid content-center items-center gap-[10vw] px-20 absolute top-0 left-0 w-full h-full grid-cols-3'
            style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
        >
            {projectImages}
        </div>
    );
};

const Hero = () => {
    return (
        <div className='relative bg-background'>
            <div className='h-screen sticky top-0 w-full flex justify-center items-center text-[20vw] font-bold gradient-background-text-animated text-center pointer-events-none z-10'>
                <h1>Portfolio</h1>
            </div>
            <ProjectsImages />
        </div>
    );
};

export default Hero;
