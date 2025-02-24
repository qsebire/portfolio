import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

type typeElementSize = {
    width: number;
    height: number;
};

function ArrowLink({ label, link }: { label: string; link: string }) {
    return (
        <div className='group'>
            <Link href={link}>
                <div className='flex justify-between items-center gap-4 border-b border-white py-4 cursor-pointer text-2xl hover:text-fuchsia-500 hover:border-b-fuchsia-500 hover:py-6 hover:text-4xl transition-all'>
                    <p>{label}</p>
                    <ChevronDown strokeWidth={2} />
                </div>
            </Link>
            <p className='absolute top-1/2 right-0 transform -translate-y-1/2 hidden group-hover:block text-right opacity-10 text-[200px] text-fuchsia-500 pointer-events-none leading-[170px]'>
                {label}
            </p>
        </div>
    );
}

export default ArrowLink;
