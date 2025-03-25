import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva('rounded border inline-block font-semibold w-fit', {
    variants: {
        type: {
            default:
                'border-white bg-white text-slate-950 hover:text-white hover:bg-transparent',
            outline:
                'border-white bg-transparent text-white hover:text-background hover:bg-white',
            black: 'border-slate-950 bg-slate-950 text-white hover:text-slate-950 hover:bg-transparent',
            blackWhiteOutline:
                'border-white bg-slate-950 text-white hover:text-slate-950 hover:bg-white',
            purpleBg:
                'border-fuchsia-500 bg-fuchsia-500 text-slate-950 hover:text-fuchsia-500 hover:bg-transparent',
            purpleOutline:
                'border-fuchsia-500 text-fuchsia-500 hover:text-slate-950 hover:bg-fuchsia-500',
        },
        size: {
            sm: 'py-1 px-4 text-sm',
            lg: 'py-[6px] px-6 text-base',
            xl: 'py-[8px] px-8 text-xl',
        },
    },
    defaultVariants: {
        type: 'default',
        size: 'lg',
    },
});

type buttonProps = VariantProps<typeof buttonVariants>;

function Button({
    label,
    href,
    target = '_self',
    type,
    size,
}: buttonProps & {
    label: string;
    href: string;
    target?: '_self' | '_blank';
}) {
    return (
        <Link
            href={href}
            className={twMerge(buttonVariants({ type, size }))}
            target={target}
        >
            {label}
        </Link>
    );
}

export default Button;
