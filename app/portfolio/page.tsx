import Hero from '@/components/sections/portfolio-hero';
import ProjectsFiltersGrid from '@/components/sections/projects-filters-grid';

export default function Portfolio() {
    return (
        <div>
            <Hero />
            <div
                id='top'
                className='relative z-10 pt-60 -mt-60'
            >
                <div className='absolute h-full w-full z-20 bg-gradient-to-b from-transparent to-background to-[200px] opacity-70' />
                <div className='relative z-30'>
                    <ProjectsFiltersGrid />
                </div>
            </div>
        </div>
    );
}
