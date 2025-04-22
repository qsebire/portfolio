'use client';

import { useState } from 'react';

import slugify from '@/lib/slugify';

import Tag from '../elements/tag';
import Button from '../elements/button';
import Image from 'next/image';

import { PROJECTS, projectType } from '@/data/projects';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ProjectTitleAnimation = ({ title }: { title: string }) => {
    const sharedBlockStyle =
        'bg-background h-1/2 relative z-20 transition-all ease-in-out duration-[800ms] shadow-2xl group-hover:delay-200';
    const sharedTitleStyle =
        'text-[200px] leading-[200px] font-bold text-center text-nowrap';

    return (
        <>
            <div
                className={cn(
                    sharedBlockStyle,
                    'group-hover:-translate-y-full'
                )}
            >
                <div className='w-full h-[110px] overflow-hidden absolute bottom-0 '>
                    <p className={sharedTitleStyle}>{title}</p>
                </div>
            </div>
            <div
                className={cn(sharedBlockStyle, 'group-hover:translate-y-full')}
            >
                <div className='w-full h-[90px] overflow-hidden absolute top-0'>
                    <p className={cn(sharedTitleStyle, '-mt-[110px]')}>
                        {title}
                    </p>
                </div>
            </div>
        </>
    );
};

const ProjectInnerContent = ({ project }: { project: projectType }) => {
    const categories = project.catArr.map((cat, id) => {
        return (
            <Tag
                key={id}
                label={cat.label}
                type='outline'
                size='sm'
            />
        );
    });

    return (
        <div className='absolute top-0 left-0 w-full h-full z-10 p-10 gradient-background grid grid-cols-5 gap-10 items-center'>
            <div className='w-full h-full overflow-hidden col-span-3'>
                {project.link ||
                    (project.siteLink && (
                        <Link
                            href={
                                project.link ? project.link : project.siteLink
                            }
                            target='_blank'
                        >
                            <Image
                                src={project.imageSrc}
                                alt={project.imageAlt}
                                width={800}
                                height={400}
                                className='object-contain w-full h-full object-center'
                            />
                        </Link>
                    ))}
                {!project.link && !project.siteLink && (
                    <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        width={800}
                        height={400}
                        className='object-contain w-full h-full object-center'
                    />
                )}
            </div>
            <div className='space-y-5 col-span-2'>
                <h2 className='text-5xl font-bold'>{project.title}</h2>
                <div className='space-y-2'>
                    <div className='flex gap-2'>{categories}</div>
                    <p className='text-xl font-medium leading-snug'>
                        {project.description}
                    </p>
                </div>
                <div className='flex gap-3'>
                    {project.link && (
                        <Button
                            label='Découvrir'
                            href={project.link}
                            type='black'
                        />
                    )}
                    {project.siteLink && (
                        <Button
                            label='Voir le site'
                            href={project.siteLink}
                            type='black'
                            target='_blank'
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const Project = ({ project }: { project: projectType }) => {
    return (
        <div
            id={slugify(project.title)}
            className='scroll-mt-[20vh]'
        >
            <div className='relative h-[60vh] overflow-hidden group border-t last:border-b border-white'>
                <ProjectTitleAnimation title={project.title} />
                <ProjectInnerContent project={project} />
            </div>
        </div>
    );
};

const PortfolioProjects = () => {
    const [filters, setFilters] = useState<string[]>([]);

    function handleFilter(filterName: string) {
        if (filters.includes(filterName)) {
            setFilters(filters.filter((filter) => filter !== filterName));
            return;
        }
        setFilters([...filters, filterName]);
    }

    // Get categories used in projects without duplicates
    const projectsCategories = [
        ...new Set(
            PROJECTS.flatMap((project) => {
                return project.catArr;
            })
        ),
    ];
    // Sort categories by label
    projectsCategories.sort((a, b) => {
        if (a.label < b.label) {
            return -1;
        }
        if (a.label > b.label) {
            return 1;
        }
        return 0;
    });

    const filtersDisplay = projectsCategories.map((cat, id) => {
        const isFiltered = filters.includes(cat.label);
        return (
            <button
                onClick={() => handleFilter(cat.label)}
                style={
                    isFiltered
                        ? {
                              background: 'white',
                              color: 'var(--background)',
                          }
                        : undefined
                }
                className='block py-[2px] px-4 rounded-full font-medium border hover:bg-white/20'
                key={id}
            >
                {cat.label}
            </button>
        );
    });

    const projects = PROJECTS.map((project, index) => {
        const isFiltered = project.catArr.some((cat) =>
            filters.includes(cat.label)
        );
        if (isFiltered || filters.length === 0) {
            return (
                <Project
                    project={project}
                    key={index}
                />
            );
        }
    });

    return (
        <div className='relative mt-10'>
            <div className='flex justify-center items-center gap-3 flex-wrap p-2 border-[0.5px] border-white sticky top-[calc(100vh-60px)] z-50 bg-background w-fit m-auto rounded-full'>
                <p className='text-lg font-medium ml-4'>Filtres :</p>
                {filtersDisplay}
            </div>
            {projects}
            <div className='h-[20vh]' />
        </div>
    );
};

export default PortfolioProjects;
