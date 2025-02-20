import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

function ArrowLink({ label, link }: { label: string; link: string }) {
    return (
        <Link href={link}>
            <div className='flex justify-between items-center gap-4 border-b border-white py-4 cursor-pointer hover:text-fuchsia-400 hover:border-b-fuchsia-400 hover:py-6 transition-all '>
                <p>{label}</p>
                <ChevronDown strokeWidth={2} />
            </div>
        </Link>
    );
}

export default ArrowLink;
