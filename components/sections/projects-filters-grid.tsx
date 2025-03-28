'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { PROJECTS } from '@/data/projects';
import BlockContainer from '../elements/block-container';

function ProjectsFiltersGrid() {
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
                              borderColor: cat.color,
                              color: cat.color,
                          }
                        : undefined
                }
                className='block py-1 px-2 rounded text-base border hover:text-fuchsia-500 hover:border-fuchsia-500'
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
                    key={id}
                    {...project}
                />
            );
        }
    });

    return (
        <BlockContainer
            id='projets'
            className='space-y-16 py-32 z-40'
        >
            <div className='flex gap-3 items-end flex-wrap pb-2'>
                <p>Filtres :</p> {filtersDisplay}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-12'>
                {projects}
            </div>
        </BlockContainer>
    );
}

export default ProjectsFiltersGrid;
