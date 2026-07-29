type Props = {};

export default function Header(props: Props) {
    return (
        <header className={ 'fixed top-4 left-1/2 z-50 -translate-x-1/2' }>
            <nav className='glass flex items-center gap-1 rounded-full px-2 py-2 text-sm'>
                <a href='#home' className='rounded-full px-4 py-1.5 font-medium text-foreground'>
                    <span className='text-gradient font-display'>Приветствие</span>
                </a>
                { [
                    ['О себе', '#about'],
                    ['Проекты', '#projects'],
                    ['Стек', '#stack'],
                    ['Контакты', '#contact']
                ].map(([label, href]) => (
                    <a
                        key={ href }
                        href={ href }
                        className='hidden rounded-full px-4 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block'
                    >
                        { label }
                    </a>
                )) }
            </nav>
        </header>
    );
}