import ProjectsFiltersGrid from '@/components/projects-filters-grid';
import ArrowLink from '@/components/arrow-link';
import AnimateChevronDown from '@/components/animate-chevron-down';
import quentinSebire from '../public/images/quentin-sebire.jpg';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <div className='relative flex flex-col justify-center items-center min-h-[80vh] text-center'>
                <h1 className='text-[160px] leading-tight font-semibold z-10'>
                    Quentin Sébire
                </h1>
                <p className='text-4xl font-light text-fuchsia-400 z-10'>
                    Web Développeur Frontend
                </p>
                {/* <Image
                    src={quentinSebire}
                    alt='Quentin Sébire Web développeur Fronted'
                    width={1920}
                    height={1280}
                    className='absolute z-0 h-full object-cover opacity-5'
                /> */}
                <Image
                    src={quentinSebire}
                    alt='Quentin Sébire Web développeur Fronted'
                    className='absolute z-0 h-full w-auto -rotate-6 opacity-30 top-4'
                />
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
                    Bonjour, moi c'est Quentin, un{' '}
                    <span className='font-normal text-fuchsia-400'>
                        Normand de 27 ans
                    </span>
                    , installé à Bordeaux depuis mes études. Titulaire du titre
                    RNCP :{' '}
                    <span className='font-normal text-fuchsia-400'>
                        Concepteur développeur d'applications web et mobile
                    </span>{' '}
                    et d’un master en{' '}
                    <span className='font-normal text-fuchsia-400'>
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
        </div>
    );
}
