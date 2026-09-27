import { Code2, Database, Sparkles } from 'lucide-react';
import SectionHead from './section-head.tsx';
import type { Lang } from '../App.tsx';
import { translations } from '../data/translations.ts';

type Props = {
    lang: Lang
};

export default function About({ lang }: Props) {
    const { cardsInfo, label, title } = translations[lang].about;
    
    const cards = [
        { icon: Code2 },
        { icon: Database },
        { icon: Sparkles }
    ].map((icon, i) =>
        ({ ...icon, ...cardsInfo[i] })
    );
    
    return (
        <section id='about' className='mx-auto max-w-6xl px-6 py-32'>
            <SectionHead label={ label } title={ title } />
            <div className='mt-12 grid gap-4 md:grid-cols-3'>
                { cards.map(({ icon: Icon, title, desc }) => (
                    <div key={ title } className='glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/4'>
                        <div className='bg-gradient-brand inline-flex h-11 w-11 items-center justify-center rounded-xl'>
                            <Icon className='h-5 w-5 text-primary-foreground' />
                        </div>
                        <h3 className='mt-5 text-lg font-semibold'>{ title }</h3>
                        <p className='mt-2 text-sm text-muted-foreground'>{ desc }</p>
                    </div>
                )) }
            </div>
        </section>
    );
}