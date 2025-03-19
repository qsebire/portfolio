import Image, { StaticImageData } from 'next/image';
import Button from '../elements/button';
import Tag from '../elements/tag';
import Link from 'next/link';
import { projectType } from '@/data/projects';

function ProjectCard({
    imageSrc,
    imageAlt = '',
    title,
    catArr,
    description,
    link,
    siteLink,
}: projectType) {
    const categories = catArr.map((cat, id) => {
        return (
            <Tag
                key={id}
                label={cat.label}
                color={cat.color}
            />
        );
    });

    return (
        <div className='relative group cursor-pointer h-full'>
            <div className='relative flex flex-col gap-8 justify-center px-10 py-14 border border-white z-10 bg-slate-950 bg-opacity-50 group-hover:-top-6 group-hover:-right-6 group-hover:opacity-20 transition-all duration-700 h-full'>
                <div className='space-y-3'>
                    <h3 className='text-4xl font-bold'>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='flex gap-2 flex-wrap'>{categories}</div>
            </div>
            <div className='absolute -top-6 -right-6 z-0 opacity-10 w-3/4 group-hover:z-20 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 group-hover:w-full transition-all duration-700 h-full'>
                <Link href={link}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={800}
                        height={800}
                        className='h-full object-contain object-right-top group-hover:object-center'
                    />
                </Link>
                {siteLink && (
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <Button
                            label='Découvrir'
                            href={siteLink}
                            target='_blank'
                            type='blackWhiteOutline'
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
