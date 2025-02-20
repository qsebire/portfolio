'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { PROJECTS } from '@/data/projects';

function ProjectsFiltersGrid() {
    const [filters, setFilters] = useState<string[]>([]);

    function handleFilter(filterName: string) {
        if (filters.includes(filterName)) {
            setFilters(filters.filter((filter) => filter !== filterName));
            return;
        }
        setFilters([...filters, filterName]);
    }

    const projectsCategories = [
        ...new Set(
            PROJECTS.flatMap((project) => {
                return project.catArr;
            })
        ),
    ];

    const filtersDisplay = projectsCategories.map((cat, id) => {
        const isFiltered = filters.includes(cat.label);
        return (
            <button
                onClick={() => handleFilter(cat.label)}
                style={
                    isFiltered
                        ? {
                              borderColor: cat.color,
                              backgroundColor: cat.color,
                              color: '#020617',
                          }
                        : { borderColor: cat.color, color: cat.color }
                }
                className='block py-1 px-2 rounded text-base border'
                key={id}
            >
                {cat.label}
            </button>
        );
    });

    const projects = PROJECTS.map((project, id) => {
        const isFiltered = project.catArr.some((cat) =>
            filters.includes(cat.label)
        );
        if (isFiltered || filters.length === 0) {
            return (
                <ProjectCard
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    title={project.title}
                    catArr={project.catArr}
                    description={project.description}
                    link={project.link}
                    key={id}
                />
            );
        }
    });

    return (
        <div className='space-y-12'>
            <div className='flex gap-2 justify-end items-end py-2'>
                <p>Filtres :</p> {filtersDisplay}
            </div>
            <div className='grid grid-cols-3 gap-12'>{projects}</div>
        </div>
    );
}

export default ProjectsFiltersGrid;
