'use client';

import { useEffect, useState } from 'react';

import Tag from '../elements/tag';
import Button from '../elements/button';
import Image from 'next/image';

import { projectType } from '@/data/projects';
import { cn, slugify } from '@/lib/utils';
import Link from 'next/link';

const ProjectTitleAnimation = ({ title }: { title: string }) => {
    const sharedBlockStyle =
        'bg-background h-1/2 relative z-20 transition-all ease-in-out duration-[800ms] shadow-2xl group-hover:delay-200';
    const sharedTitleStyle =
        'text-[10vw] leading-[10vw] font-bold text-center text-nowrap';

    return (
        <div className='absolute w-full h-full left-0 top-0 pointer-events-none'>
            <div
                className={cn(
                    sharedBlockStyle,
                    'group-hover:-translate-y-full'
                )}
            >
                <div className='w-full h-[5.5vw] overflow-hidden absolute bottom-0 flex justify-center gap-4'>
                    <p className={sharedTitleStyle}>{title}</p>
                    <div className='h-full relative'>
                        <p className='border bg-white text-background text-sm leading-none py-1 px-3 rounded font-semibold lg:hidden absolute -bottom-[12px]'>
                            Voir
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={cn(sharedBlockStyle, 'group-hover:translate-y-full')}
            >
                <div className='w-full h-[4.5vw] overflow-hidden flex justify-center gap-4'>
                    <p className={cn(sharedTitleStyle, '-mt-[5.5vw]')}>
                        {title}
                    </p>
                    <div className='h-full relative'>
                        <p className='border bg-white text-background text-sm leading-none py-1 px-3 rounded font-semibold lg:hidden absolute -top-[12px]'>
                            Voir
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectInnerContent = ({
    project,
    disableInteraction,
}: {
    project: projectType;
    disableInteraction: boolean;
}) => {
    const { catArr, link, siteLink, imageSrc, imageAlt, description, title } =
        project;

    const categories = catArr.map((cat, id) => {
        return (
            <Tag
                key={id}
                label={cat.label}
                type='outline'
                size='sm'
            />
        );
    });

    const ProjectImage = () => (
        <Image
            src={imageSrc}
            alt={imageAlt}
            width={1440}
            height={960}
            className='object-contain w-full h-full object-center max-h-[30vh] lg:max-h-full'
        />
    );

    return (
        <div
            className='h-full z-10 p-10 gradient-background grid lg:grid-cols-2 xl:grid-cols-7 gap-10 items-center'
            style={disableInteraction ? { pointerEvents: 'none' } : undefined}
        >
            <div className='w-full h-full overflow-hidden xl:col-span-4 row-start-2 lg:row-start-1'>
                {link ||
                    (siteLink && (
                        <Link
                            href={link ? link : siteLink}
                            target='_blank'
                        >
                            <ProjectImage />
                        </Link>
                    ))}
                {!link && !siteLink && <ProjectImage />}
            </div>
            <div className='space-y-6 xl:col-span-3 row-start-1'>
                <div className='space-y-3'>
                    <h2 className='text-4xl sm:text-5xl font-bold'>{title}</h2>
                    <p className='text-lg sm:text-xl font-medium leading-snug'>
                        {description}
                    </p>
                </div>
                <div className='flex gap-2 flex-wrap'>{categories}</div>
                <div className='flex gap-3'>
                    {link && (
                        <Button
                            label='Découvrir'
                            href={link}
                            type='black'
                        />
                    )}
                    {siteLink && (
                        <Button
                            label='Voir le site'
                            href={siteLink}
                            type='black'
                            target='_blank'
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const Project = ({
    project,
    isOpen,
}: {
    project: projectType;
    isOpen: boolean;
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            id={slugify(project.title)}
            className='scroll-mt-[20vh]'
        >
            <div className='group relative h-[14vw] hover:h-fit  lg:h-[80vh] hover:lg:h-[80vh] overflow-hidden  border-t last:border-b border-white'>
                <ProjectTitleAnimation title={project.title} />
                <ProjectInnerContent
                    project={project}
                    disableInteraction={isMobile && !isOpen}
                />
            </div>
        </div>
    );
};

const PortfolioProjects = ({ projects }: { projects: projectType[] }) => {
    const [filters, setFilters] = useState<string[]>([]);
    const [projectCurrentlyOpen, setProjectCurrentlyOpen] = useState<
        string | undefined
    >(undefined);

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
            projects.flatMap((project) => {
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

    const displayedProjects = projects.map((project, index) => {
        const isFiltered = project.catArr.some((cat) =>
            filters.includes(cat.label)
        );
        if (isFiltered || filters.length === 0) {
            return (
                <div
                    className='lg:sticky lg:top-0'
                    style={{ zIndex: index }}
                    key={project.title}
                    onClick={() => setProjectCurrentlyOpen(project.title)}
                >
                    <Project
                        project={project}
                        isOpen={projectCurrentlyOpen === project.title}
                    />
                </div>
            );
        }
    });

    return (
        <div className='relative'>
            <div className='hidden lg:flex justify-center items-center gap-3 flex-wrap p-2 border-[0.5px] border-white sticky top-[calc(100vh-60px)] z-50 bg-background w-fit m-auto rounded-full'>
                <p className='text-lg font-medium ml-4'>Filtres :</p>
                {filtersDisplay}
            </div>
            <div className='lg:-mt-12'>{displayedProjects}</div>
            <div className='relative h-[60px] z-[60] bg-background -mb-[60px]' />
        </div>
    );
};

export default PortfolioProjects;
