import LandingHero from '@/components/sections/landing-hero';
import LandingRedirection from '@/components/sections/landing-redirection';

export default function Home() {
    return (
        <div className='space-y-16'>
            <div className='sticky top-0 bg-background'>
                <LandingHero />
            </div>
            <LandingRedirection />
        </div>
    );
}
