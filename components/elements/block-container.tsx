import { twMerge } from 'tailwind-merge';

function BlockContainer({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <div
            id={id}
            className={twMerge('w-11/12 mx-auto', className)}
        >
            {children}
        </div>
    );
}

BlockContainer.displayName = 'BlockContainer';
export default BlockContainer;
