import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('border inline-block font-semibold w-fit rounded', {
    variants: {
        type: {
            default: 'border-white bg-white text-slate-950',
            outline:
                'border-white bg-transparent text-white hover:text-background hover:bg-white',
            black: 'border-slate-950 bg-slate-950 text-white hover:text-slate-950 hover:bg-transparent',
            blackWhiteOutline:
                'border-white bg-slate-950 text-white hover:text-slate-950 hover:bg-white',
            purpleBg:
                'border-pink-600 bg-pink-600 text-slate-950 hover:text-pink-600 hover:bg-transparent',
            purpleOutline:
                'border-pink-600 text-pink-600 hover:text-slate-950 hover:bg-pink-600',
        },
        hover: {
            outlineWhite:
                'hover:text-white hover:bg-transparent hover:border-white',
            outlineBlack:
                'hover:text-slate-950 hover:bg-transparent hover:border-background',
            outlinePurple:
                'hover:text-pink-600 hover:bg-transparent hover:border-pink-600',
            bgWhite: 'hover:text-background hover:bg-white hover:border-white',
            bgBlack:
                'hover:text-white hover:bg-background hover:border-background',
            bgPurple:
                'hover:text-white hover:bg-pink-600 hover:border-pink-600',
        },
        size: {
            sm: 'py-1 px-4 text-sm',
            lg: 'py-[6px] px-6 text-base',
            xl: 'py-[8px] px-8 text-xl',
        },
    },
    defaultVariants: {
        type: 'default',
        hover: 'outlineWhite',
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
            className={cn(buttonVariants({ type, size }))}
            target={target}
        >
            {label}
        </Link>
    );
}

Button.displayName = 'Button';
export default Button;
