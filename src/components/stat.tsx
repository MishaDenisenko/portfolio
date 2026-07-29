type Props = {
    title: string
    description: string
};

export default function Stat({ title, description }: Props) {
    return (
        <div>
            <div className='font-display text-2xl font-semibold text-foreground'>{ title }</div>
            <div className='text-xs uppercase tracking-wider'>{ description }</div>
        </div>
    );
}