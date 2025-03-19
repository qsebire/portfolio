import ProjectsFiltersGrid from '@/components/sections/projects-filters-grid';
import WorkExperiences from '@/components/sections/work-experiences';
import HomeHero from '@/components/sections/home-hero';
import Summary from '@/components/sections/summary';
import BlockContainer from '@/components/elements/block-container';

export default function Home() {
    return (
        <div>
            <HomeHero />
            <Summary />
            <BlockContainer
                id='presentation'
                className='py-32'
            >
                <div className='w-3/4 ml-auto'>
                    <p className='text-4xl font-extralight leading-normal'>
                        Bonjour, moi c'est Quentin, un{' '}
                        <span className='font-normal text-fuchsia-500'>
                            Normand de 27 ans
                        </span>
                        , installé à Bordeaux depuis mes études. Titulaire du
                        titre RNCP :{' '}
                        <span className='font-normal text-fuchsia-500'>
                            Concepteur développeur d'applications web et mobile
                        </span>{' '}
                        et d’un master en{' '}
                        <span className='font-normal text-fuchsia-500'>
                            UI/UX Design
                        </span>
                        . Mon parcours entrepreneurial et professionnel m’a
                        permis de développer une grande adaptabilité et une
                        approche pragmatique et créative. Je suis passionné par
                        la technologie, les mangas et la musique. Curieux et
                        polyvalent, j’aime explorer de nouveaux domaines afin de
                        développer mes compétences.
                    </p>
                </div>
            </BlockContainer>
            <ProjectsFiltersGrid />
            <WorkExperiences />
        </div>
    );
}
