import Hero from '@/components/sections/landing-hero';
import HeroRealisations from '@/components/sections/portfolio-hero';
import RedirectPortfolioExperiences from '@/components/sections/landing-redirection';
import PortfolioProjects from '@/components/sections/portfolio-projects';
import ContactSection from '@/components/sections/contact-section';

import { PROJECTS } from '@/data/projects';

import { shuffleArray } from '@/lib/utils';

export default function Home() {
    const shuffledProjects = shuffleArray(PROJECTS);

    return (
        <div className='w-screen'>
            <div className='sticky top-0 bg-background'>
                <Hero />
            </div>
            <div
                id='top'
                className='bg-background z-10 relative'
            >
                {/* <RedirectPortfolioExperiences /> */}
                <HeroRealisations projects={shuffledProjects} />
                <PortfolioProjects projects={shuffledProjects} />
                <ContactSection />
            </div>
        </div>
    );
}
