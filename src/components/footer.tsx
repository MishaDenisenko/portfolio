type Props = {};

export default function Footer(props: Props) {
    return (
        <footer className='border-t border-border/50 px-6 py-8'>
            <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground'>
                <span className='font-mono'>© 2026 Michail Denisenko</span>
                <span className='font-mono text-xs'>built with React</span>
            </div>
        </footer>
    );
}