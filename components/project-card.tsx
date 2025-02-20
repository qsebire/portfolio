import Image, { StaticImageData } from 'next/image';
import Button from './button';
import Link from 'next/link';

function ProjectCard({
    imageSrc,
    imageAlt = '',
    title,
    catArr,
    description,
    link,
}: {
    imageSrc: StaticImageData;
    imageAlt?: string;
    title: string;
    catArr: { label: string; color: string }[];
    description: string;
    link: string;
}) {
    const categories = catArr.map((cat, id) => {
        return (
            <p
                style={{ borderColor: cat.color, color: cat.color }}
                className='block py-1 px-2 rounded text-sm border'
                key={id}
            >
                {cat.label}
            </p>
        );
    });

    return (
        <div className='relative group cursor-pointer h-full'>
            <div className='relative flex flex-col gap-8 justify-between px-10 py-14 border border-white z-10 bg-slate-950 bg-opacity-50 group-hover:-top-6 group-hover:-right-6 group-hover:opacity-20 transition-all duration-700 h-full'>
                <div className='space-y-3'>
                    <h3 className='text-4xl font-bold'>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='flex gap-2'>{categories}</div>
            </div>
            <div className='absolute -top-6 -right-6 z-0 opacity-10 w-3/4 group-hover:z-20 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 group-hover:w-full transition-all duration-700'>
                <Link href={link}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={800}
                        height={800}
                    />
                </Link>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Button
                        label='Découvrir'
                        href={link}
                        type='blackWhiteOutline'
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
