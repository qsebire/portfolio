import ArrowLink from '../elements/arrow-link';
import BlockContainer from '../elements/block-container';

function Summary() {
    return (
        <BlockContainer className='py-32 relative '>
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
                <p className='absolute top-1/2 right-0 transform -translate-y-1/2 block group-hover/container:hidden text-right opacity-10 text-[200px] pointer-events-none leading-none font-semibold'>
                    Sommaire
                </p>
            </div>
        </BlockContainer>
    );
}

export default Summary;
