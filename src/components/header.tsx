import type { Lang } from '../App.tsx';
import { translations } from '../data/translations.ts';
import { Globe } from 'lucide-react';

type Props = {
    lang: Lang,
    changeLang: (lang: Lang) => void
};

export default function Header({ lang, changeLang }: Props) {
    const { greeting, about, projects, stack, contact } = translations[lang].header;
    
    const handleLanguageChange = (): void => {
        changeLang(lang === 'ru' ? 'en' : lang === 'en' ? 'ua' : 'ru');
    };
    
    return (
        <header className={ 'fixed flex gap-5 top-4 left-1/2 z-50 -translate-x-1/2 select-none' }>
            <nav className='glass flex items-center gap-1 rounded-full px-2 py-2 text-sm capitalize'>
                <a href='#home' className='rounded-full px-4 py-1.5 font-medium text-foreground'>
                    <span className='text-gradient font-display'>{ greeting }</span>
                </a>
                { [
                    [about, '#about'],
                    [projects, '#projects'],
                    [stack, '#stack'],
                    [contact, '#contact']
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
            <div
                className={ 'glass rounded-full px-4 py-2 text-sm items-center flex gap-2 cursor-pointer' }
                onClick={ handleLanguageChange }
            >
                <Globe size={ 20 } />
                <span className={ 'uppercase' }>{ lang }</span>
            </div>
        
        </header>
    );
}