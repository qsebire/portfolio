'use client';

import { workExperienceType } from '@/data/work-experiences';
import Tag from './tag';
import Button from './button';

function WorkExperienceDetails({ work }: { work: workExperienceType }) {
    const {
        title,
        subtitle,
        dates,
        company,
        companyLink,
        companyDescription,
        taskDescription,
        skills,
    } = work;

    const skillsList = skills?.map((skill, index) => {
        return (
            <Tag
                label={skill}
                color='white'
                key={index}
            />
        );
    });

    return (
        <div className='space-y-1'>
            <p className='font-extralight leading-none text-2xl'>{subtitle}</p>
            <h3 className='text-6xl font-bold'>{title}</h3>
            <p className='text-fuchsia-500 italic'>
                {dates}
                {company && ' - '}
                {company && <>{company}</>}
            </p>
            <div className='space-y-6 pt-6'>
                <div>
                    <p className='italic text-fuchsia-900'>Mes tâches</p>
                    <p className='leading-relaxed'>{taskDescription}</p>
                </div>
                {skills && (
                    <div className='space-y-2'>
                        <p className='italic text-fuchsia-900'>
                            Compétences et technologies abordées
                        </p>
                        <div className='flex gap-2 flex-wrap'>{skillsList}</div>
                    </div>
                )}
                {companyDescription && (
                    <div>
                        <p className='italic text-fuchsia-900'>
                            En savoir plus sur {company}
                        </p>
                        <p className='leading-relaxed'>{companyDescription}</p>
                    </div>
                )}
                {company && companyLink && (
                    <Button
                        label={`Voir le site de ${company}`}
                        href={companyLink}
                        target='_blank'
                        type='purpleOutline'
                        size='sm'
                    />
                )}
            </div>
        </div>
    );
}

export default WorkExperienceDetails;
