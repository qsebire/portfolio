import LandingHero from '@/components/sections/landing-hero';
import LandingRedirection from '@/components/sections/landing-redirection';

export default function Home() {
    return (
        <div>
            <div className='sticky top-0 bg-background'>
                <LandingHero />
            </div>
            <div id='top'>
                <LandingRedirection />
            </div>
        </div>
    );
}
