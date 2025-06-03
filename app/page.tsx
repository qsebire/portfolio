import Hero from '@/components/sections/landing-hero';
import HeroRealisations from '@/components/sections/portfolio-hero';
import PortfolioProjects from '@/components/sections/portfolio-projects';
import ContactSection from '@/components/sections/contact-section';

import { PROJECTS } from '@/data/projects';

export default function Home() {
    return (
        <div className='w-screen'>
            <div className='sticky top-0 bg-background'>
                <Hero />
            </div>
            <div
                id='top'
                className='z-10 relative lg:bg-background'
            >
                <HeroRealisations projects={PROJECTS} />
                <PortfolioProjects projects={PROJECTS} />
                <ContactSection />
            </div>
        </div>
    );
}
