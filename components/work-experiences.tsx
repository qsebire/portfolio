'use client';

import { useState } from 'react';
import WorkExperienceListSingle from './work-experience-list-single';
import { WORK_EXPERIENCES } from '@/data/work-experiences';
import WorkExperienceDetails from './work-experience-details';

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
        <div
            id='experiences-pros'
            className='py-32 grid grid-cols-5 gap-20'
        >
            <div className='w-full space-y-8 col-span-2'>{workList}</div>
            <div className='col-span-3 relative'>
                {showDetails === null && (
                    <h2 className='text-8xl font-semibold sticky top-1/2 transform -translate-y-1/2'>
                        Expériences professionnelles
                    </h2>
                )}
                {showDetails !== null && (
                    <div className='sticky top-0 h-full max-h-screen overflow-auto p-10 border flex flex-col justify-center'>
                        <div className='m-auto'>
                            <WorkExperienceDetails
                                work={WORK_EXPERIENCES[showDetails]}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WorkExperiences;
