import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

function ArrowLink({ label, link }: { label: string; link: string }) {
    return (
        <Link href={link}>
            <div className='flex justify-between items-center gap-4 border-b border-white py-4 cursor-pointer hover:text-cyan-600 hover:border-b-cyan-500 hover:py-6 transition-all '>
                <p>{label}</p>
                <ChevronDown strokeWidth={2} />
            </div>
        </Link>
    );
}

export default ArrowLink;
