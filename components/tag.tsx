function Tag({ label, color }: { label: string; color: string }) {
    return (
        <p
            style={{ borderColor: color, color: color }}
            className='block py-1 px-2 rounded text-sm border'
        >
            {label}
        </p>
    );
}

export default Tag;
