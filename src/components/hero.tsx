import heroBlob from '../assets/hero-blob.jpg';
import { ArrowUpRight } from 'lucide-react';
import Stat from './stat.tsx';
import CodeCard from './code-card.tsx';
import type { Lang } from '../App.tsx';
import { translations } from '../data/translations.ts';

type Props = {
    lang: Lang
};

export default function Hero({ lang }: Props) {
    const { label, title, subtitle, desc, projects, contacts, stats } = translations[lang].hero;
    
    return (
        <section id='home' className='relative flex min-h-screen items-center overflow-hidden px-6 pt-24'>
            <div className='pointer-events-none absolute inset-0 -z-10'>
                <img
                    src={ heroBlob }
                    alt=''
                    width={ 1280 }
                    height={ 1280 }
                    className='absolute -right-40 top-10 h-175 w-175 animate-float opacity-70 blur-3xl'
                />
            </div>
            
            <div className='mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]'>
                <div className='animate-fade-up'>
                    <div className='glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground'>
                        <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400' />
                        { label }
                    </div>
                    <h1 className='font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl'>
                        { title } <br />
                        <span className='text-gradient'>{ subtitle }</span>
                    </h1>
                    <p className='mt-6 max-w-xl text-lg text-muted-foreground'>
                        { desc }
                    </p>
                    <div className='mt-8 flex flex-wrap gap-3'>
                        <a
                            href='#projects'
                            className='bg-gradient-brand group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]'
                        >
                            { projects }
                            <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                        </a>
                        <a
                            href='#contact'
                            className='glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5'
                        >
                            { contacts }
                        </a>
                    </div>
                    
                    <div className='mt-12 flex items-center gap-6 text-sm text-muted-foreground'>
                        <Stat title='10+' description={ stats.projects } />
                        <div className='h-8 w-px bg-border' />
                        <Stat title={ stats.years } description={ stats.code } />
                        <div className='h-8 w-px bg-border' />
                        <Stat title='∞' description={ stats.coffee } />
                    </div>
                </div>
                
                <div className='relative hidden lg:block'>
                    <CodeCard />
                </div>
            </div>
        </section>
    );
}