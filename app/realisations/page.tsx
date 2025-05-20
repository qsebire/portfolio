import Hero from '@/components/sections/portfolio-hero';
import PortfolioProjects from '@/components/sections/portfolio-projects';
import ContactForm from '@/components/sections/contact-form';
import { shuffleArray } from '@/lib/utils';
import { PROJECTS } from '@/data/projects';

export default function Portfolio() {
    const shuffledProjects = shuffleArray(PROJECTS);

    return (
        <div>
            <Hero projects={shuffledProjects} />
            <PortfolioProjects projects={shuffledProjects} />
            <ContactForm />
        </div>
    );
}
