function Tag({ label, color }: { label: string; color: string }) {
    return (
        <p
            style={{ backgroundColor: color }}
            className='block py-1 px-3 text-[16px] text-background font-semibold'
        >
            {label}
        </p>
    );
}

export default Tag;
