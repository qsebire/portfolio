import { workExperienceType } from '@/data/work-experiences';
import { PlusCircle } from 'lucide-react';
import { MouseEventHandler } from 'react';

function WorkExperienceListSingle({
    work,
    onClick,
    isOpen,
}: {
    work: workExperienceType;
    onClick: MouseEventHandler<HTMLButtonElement>;
    isOpen: boolean;
}) {
    const { title, subtitle, dates, company } = work;

    return (
        <button
            onClick={onClick}
            className='[&:not(:last-child)]:border-b border-b-white pb-8 flex gap-8 items-center text-left group w-full'
        >
            <div className='space-y-1 w-full'>
                <p className='font-extralight leading-none'>{subtitle}</p>
                <h3 className='text-3xl font-bold'>{title}</h3>
                <p className='text-fuchsia-500 italic'>
                    {dates}
                    {company && ' - '}
                    {company && <>{company}</>}
                </p>
            </div>
            <div className='group-hover:text-fuchsia-500 min-w-8 relative'>
                <PlusCircle size={32} />
                <p className='text-base absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap hidden group-hover:block'>
                    Voir plus
                </p>
            </div>
        </button>
    );
}

export default WorkExperienceListSingle;
