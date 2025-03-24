import Hero from '@/components/sections/landing-hero';
import RedirectPortfolioExperiences from '@/components/sections/landing-redirection';

export default function Home() {
    return (
        <div>
            <div className='sticky top-0 bg-background'>
                <Hero />
            </div>
            <div id='top'>
                <RedirectPortfolioExperiences />
            </div>
        </div>
    );
}
