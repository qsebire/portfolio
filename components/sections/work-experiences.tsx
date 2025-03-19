'use client';

import { useState } from 'react';
import WorkExperienceListSingle from './work-experience-list-single';
import { WORK_EXPERIENCES } from '@/data/work-experiences';
import WorkExperienceDetails from './work-experience-details';
import BlockContainer from '../elements/block-container';

function WorkExperiences() {
    const [showDetails, setShowDetails] = useState<number | null>(null);

    const workList = WORK_EXPERIENCES.map((work, index) => {
        const isOpen = showDetails === index;

        return (
            <WorkExperienceListSingle
                key={index}
                work={work}
                onClick={() => setShowDetails(isOpen ? null : index)}
                isOpen={isOpen}
            />
        );
    });

    return (
        <BlockContainer
            id='experiences-pros'
            className='py-32 flex gap-20 relative'
        >
            <div
                className='space-y-8 transition-all duration-500'
                style={
                    showDetails !== null ? { width: '30%' } : { width: '100%' }
                }
            >
                {workList}
            </div>
            <div className='sticky top-1/2 transform -translate-y-1/2 h-fit'>
                {showDetails !== null && (
                    <div
                        className='p-10 border w-full'
                        style={
                            showDetails !== null ? { width: '70%' } : undefined
                        }
                    >
                        <WorkExperienceDetails
                            work={WORK_EXPERIENCES[showDetails]}
                        />
                    </div>
                )}
            </div>
            <h2
                className='text-8xl font-semibold sticky top-1/2 transform -translate-y-1/2 h-fit'
                style={
                    showDetails !== null
                        ? {
                              transform: 'rotate(90deg)',
                              width: 0,
                              opacity: 0.2,
                              position: 'absolute',
                          }
                        : undefined
                }
            >
                Expériences professionnelles
            </h2>
        </BlockContainer>
    );
}

export default WorkExperiences;
