import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const tagVariants = cva(
    'block py-1 px-3 text-[16px] font-medium rounded-full',
    {
        variants: {
            type: {
                default: 'bg-white text-background',
                outline: 'border border-white bg-transparent text-white',
            },
            size: {
                sm: 'py-[2px] px-2 text-sm',
                lg: 'py-1 px-3 text-[16px]',
                xl: 'py-[6px] px-4 text-base',
            },
        },
        defaultVariants: {
            type: 'default',
            size: 'lg',
        },
    }
);

type tagProps = VariantProps<typeof tagVariants>;

function Tag({
    label,
    color,
    type,
    size,
}: tagProps & { label: string; color?: string }) {
    let customColor = undefined;
    if (color) {
        if (type === 'outline') {
            customColor = {
                border: `1px solid ${color}`,
                color: color,
            };
        } else {
            customColor = { backgroundColor: color };
        }
    }

    return (
        <p
            style={customColor}
            className={cn(tagVariants({ type, size }))}
        >
            {label}
        </p>
    );
}

export default Tag;
