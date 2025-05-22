import { Advent_Pro } from 'next/font/google';

const adventPro = Advent_Pro({
    subsets: ['latin'],
});

function CardHome({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <div className='relative p-8 min-h-52'>
            <div className='w-full bg-slate-900 p-8 rounded-xl border-2 border-slate-800 shadow-[inset_0_0_16px_rgba(0,0,0,0.6)] absolute left-0 top-0 z-0 h-4/5 flex flex-col justify-end min-h-fit'>
                <div className='w-5/12 pr-8'>
                    <p className='text-lg italic'>{subtitle}</p>
                    <h2 className={`${adventPro.className} font-bold text-6xl`}>
                        {title}
                    </h2>
                </div>
            </div>
            <div className='bg-black p-6 rounded-xl min-h-full shadow-lg shadow-black/40 w-7/12 ml-auto relative z-10 '>
                {children}
            </div>
        </div>
    );
}

CardHome.displayName = 'CardHome';
export default CardHome;
