import ProjectsFiltersGrid from '@/components/projects-filters-grid';
import ArrowLink from '@/components/arrow-link';
import WorkExperiences from '@/components/work-experiences';
import HomeHero from '@/components/home-hero';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HomeHero />
            <div className='py-32 relative'>
                <div
                    id='sommaire'
                    className='w-3/5 group/container'
                >
                    <ArrowLink
                        label='Présentation'
                        link='#presentation'
                    />
                    <ArrowLink
                        label='Projets'
                        link='#projets'
                    />
                    <ArrowLink
                        label='Expériences professionnelles'
                        link='#experiences-pros'
                    />
                    <ArrowLink
                        label='Études & Formations'
                        link='#etudes-formations'
                    />
                    <ArrowLink
                        label='Hobbies'
                        link='#hobbies'
                    />
                    <p className='absolute top-1/2 right-0 transform -translate-y-1/2 block group-hover/container:hidden text-right opacity-10 text-[200px] pointer-events-none leading-none'>
                        Sommaire
                    </p>
                </div>
            </div>
            <div
                id='presentation'
                className='w-3/4 ml-auto py-32'
            >
                <p className='text-4xl font-extralight leading-normal'>
                    Bonjour, moi c'est Quentin, un{' '}
                    <span className='font-normal text-fuchsia-500'>
                        Normand de 27 ans
                    </span>
                    , installé à Bordeaux depuis mes études. Titulaire du titre
                    RNCP :{' '}
                    <span className='font-normal text-fuchsia-500'>
                        Concepteur développeur d'applications web et mobile
                    </span>{' '}
                    et d’un master en{' '}
                    <span className='font-normal text-fuchsia-500'>
                        UI/UX Design
                    </span>
                    . Mon parcours entrepreneurial et professionnel m’a permis
                    de développer une grande adaptabilité et une approche
                    pragmatique et créative. Je suis passionné par la
                    technologie, les mangas et la musique. Curieux et
                    polyvalent, j’aime explorer de nouveaux domaines afin de
                    développer mes compétences.
                </p>
            </div>
            <div
                id='projets'
                className='py-32'
            >
                <ProjectsFiltersGrid />
            </div>
            <WorkExperiences />
        </div>
    );
}
