type Props = {
    label: string,
    title: string,
    center?: boolean,
};

export default function SectionHead({ center, label, title }: Props) {
    return (
        <div className={ center ? 'text-center' : '' }>
            <div className='font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'>{ label }</div>
            <h2 className='mt-3 font-display text-4xl font-semibold sm:text-5xl'>
                { title }
            </h2>
        </div>
    );
}