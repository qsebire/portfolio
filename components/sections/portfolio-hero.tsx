'use client';

import { useRef } from 'react';
import CursorButton from '../elements/cursor-button';
import { PROJECTS, projectType } from '@/data/projects';
import Tag from '../elements/tag';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../elements/button';

function ProjectCard(project: projectType) {
    const { title, catArr, description, link, siteLink } = project;

    const categories = catArr.map((cat, id) => {
        return (
            <Tag
                key={id}
                label={cat.label}
                color={cat.color}
            />
        );
    });

    return (
        <div className='relative'>
            <div className='aspect-video flex flex-col justify-center items-center gap-8 px-10 py-14 border border-white z-10 text-center'>
                <div className='space-y-4 md:space-y-5'>
                    <h3 className='text-4xl sm:text-6xl md:text-7xl font-bold leading-none'>
                        {title}
                    </h3>
                    <p className='text-2xl'>{description}</p>
                </div>
                {siteLink && (
                    <Button
                        label='Découvrir'
                        href={siteLink}
                        target='_blank'
                        type='outline'
                        size='xl'
                    />
                )}
            </div>
            <div className='absolute -bottom-4 flex justify-center gap-2 flex-wrap w-full'>
                {categories}
            </div>
        </div>
    );
}

function ProjectCardDesktop(project: projectType) {
    const { title, catArr, description, link, siteLink } = project;

    const categories = catArr.map((cat, id) => {
        return (
            <Tag
                key={id}
                label={cat.label}
                color={cat.color}
            />
        );
    });

    return (
        <div className='absolute z-[200] top-4 left-4 max-w-[500px] px-6 py-8 border border-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-700'>
            <div className='absolute top-0 left-0 w-full h-full bg-background opacity-90 z-10' />
            <div className='relative z-20 space-y-5'>
                <div className='space-y-3 md:space-y-3'>
                    <h3 className='text-3xl font-bold leading-none'>{title}</h3>
                    <p className='text-lg'>{description}</p>
                </div>
                <div className='flex gap-2 flex-wrap w-full'>{categories}</div>
            </div>
        </div>
    );
}

const ProjectsMobile = () => {
    const projects = PROJECTS.map((project, index) => {
        return (
            <ProjectCard
                key={index}
                {...project}
            />
        );
    });

    return (
        <div className='lg:hidden relative p-16 space-y-16'>
            <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-background to-[64px] opacity-90' />
            {projects}
        </div>
    );
};

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

const ProjectsDesktop = () => {
    const nbColumns = PROJECTS.length >= 8 ? 4 : Math.ceil(PROJECTS.length / 2);

    const projectsImages = PROJECTS.map((project, index) => {
        const containerRef = useRef(null);

        const moduloCol = index % nbColumns;
        const calcRotate =
            index + 1 > nbColumns / 2 ? moduloCol - 1 : moduloCol - 2;
        const degNbr = index + 1 > nbColumns ? calcRotate * -8 : calcRotate * 8;
        console.log(degNbr);

        return (
            <div className='group'>
                <div
                    key={index}
                    ref={containerRef}
                    style={{ rotate: degNbr + 'deg' }}
                    className='peer'
                >
                    <CursorButton
                        containerRef={containerRef}
                        href={
                            project.siteLink ? project.siteLink : project.link
                        }
                    />
                    <ProjectImage {...project} />
                </div>
                <ProjectCardDesktop {...project} />
            </div>
        );
    });

    return (
        <div
            className='hidden lg:grid content-center items-center gap-[10vw] px-20 absolute top-0 left-0 w-full h-full'
            style={{ gridTemplateColumns: `repeat(${nbColumns}, 1fr)` }}
        >
            {projectsImages}
        </div>
    );
};

const Hero = () => {
    return (
        <div className='relative bg-background'>
            <ProjectsDesktop />
            <div className='h-screen sticky top-0 w-full flex justify-center items-center text-[20vw] font-bold gradient-background-text text-center pointer-events-none z-10'>
                <h1>Portfolio</h1>
            </div>
            <ProjectsMobile />
        </div>
    );
};

export default Hero;
