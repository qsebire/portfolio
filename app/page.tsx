import ProjectsFiltersGrid from '@/components/projects-filters-grid';
import ArrowLink from '@/components/arrow-link';
import AnimateChevronDown from '@/components/animate-chevron-down';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <div className='relative flex flex-col justify-center items-center min-h-[80vh] text-center'>
                <h1 className='text-[180px] leading-[200px] font-semibold'>
                    Quentin Sébire
                </h1>
                <p className='text-4xl font-light text-cyan-500'>
                    Web Développeur Frontend
                </p>
                <AnimateChevronDown anchor='#sommaire' />
            </div>
            <div
                id='sommaire'
                className='w-2/5 py-32'
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
            </div>
            <div
                id='presentation'
                className='w-3/4 ml-auto py-32'
            >
                <p className='text-4xl font-extralight leading-normal'>
                    Bonjour, moi c'est Quentin, un Normand de 27 ans, installé à
                    Bordeaux depuis mes études. Titulaire du titre RNCP :
                    Concepteur développeur d'applications web et mobile et d’un
                    master en UI/UX Design, je peux vous apporter une vision
                    technique et créative. Mon parcours entrepreneurial et
                    professionnel m’a permis de développer une grande
                    adaptabilité et une approche pragmatique. Je suis passionné
                    par la technologie, les mangas, et la musique. Curieux et
                    polyvalent. j’aime explorer de nouveaux domaines et
                    développer mes compétences.
                </p>
            </div>
            <div
                id='projets'
                className='py-32'
            >
                <h2 className='text-8xl font-semibold border-b border-white pb-2 mb-2'>
                    Mes projets
                </h2>
                <ProjectsFiltersGrid />
            </div>
        </div>
    );
}
