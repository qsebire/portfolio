const LoopTextsAnimation = ({ textArr }: { textArr: string[] }) => {
    const jobListDisplay = textArr.map((text, index) => {
        let color = '#db2777';
        if (index % 2 !== 0) {
            color = 'white';
        }

        return (
            <div
                key={index}
                className='flex gap-6 items-center'
            >
                <p
                    className='text-3xl md:text-4xl font-light'
                    style={{ color: color }}
                >
                    {text}
                </p>
                <div
                    className='w-2 h-2 rounded-full'
                    style={{ backgroundColor: 'white' }}
                />
            </div>
        );
    });

    return (
        <div className='flex gap-6 items-center animate-loop w-max whitespace-nowrap px-3'>
            {jobListDisplay}
            {jobListDisplay}
        </div>
    );
};

LoopTextsAnimation.displayName = 'LoopTextsAnimation';
export default LoopTextsAnimation;
