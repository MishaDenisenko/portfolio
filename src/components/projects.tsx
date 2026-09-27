import SectionHead from './section-head.tsx';
import { ExternalLink } from 'lucide-react';
import type { Lang } from '../App.tsx';
import { translations } from '../data/translations.ts';


const projects = [
    {
        title: 'Employees',
        link: 'https://github.com/MishaDenisenko/fullstack-employees',
        tag: 'Full-stack',
        stack: ['Next.js', 'Nest.js', 'PostgreSQL', 'JWT', 'TypeScript'],
        accent: 'bg-[radial-gradient(circle,rgba(139,92,246,0.45)_0%,rgba(217,70,239,0.15)_45%,transparent_70%)]' // violet
    },
    {
        title: 'VacanSee',
        link: 'https://github.com/MishaDenisenko/react-vacancy-list',
        tag: 'Full-stack',
        stack: ['React', 'Zustand', 'TypeScript', 'JSON Server'],
        accent: 'bg-[radial-gradient(circle,rgba(6,182,212,0.45)_0%,rgba(59,130,246,0.15)_45%,transparent_70%)]' // cyan
    },
    {
        title: 'Network Social',
        link: 'https://github.com/MishaDenisenko/react-client-app',
        tag: 'Web chat',
        stack: ['React', 'Express.js', 'WebSocket', 'MongoDB', 'TypeScript'],
        accent: 'bg-[radial-gradient(circle,rgba(16,185,129,0.45)_0%,rgba(20,184,166,0.15)_45%,transparent_70%)]' // emerald
    },
    {
        title: 'Sana Detal Clinic',
        link: 'https://sana-dental-clinic.vercel.app',
        tag: 'Experiment',
        stack: ['React', 'Vite', 'TypeScript', 'Tailwindcss'],
        accent: 'bg-[radial-gradient(circle,rgba(236,72,153,0.45)_0%,rgba(244,63,94,0.15)_45%,transparent_70%)]' // pink
    }
];

type Props = {
    lang: Lang
};

export default function Projects({ lang }: Props) {
    const { projectsDesc, label, title } = translations[lang].projects;
    
    return (
        <section id='projects' className='mx-auto max-w-6xl px-6 py-32'>
            <SectionHead label={ label } title={ title } />
            <div className='mt-12 grid gap-5 md:grid-cols-2'>
                { projects.map((p) => (
                    <article
                        key={ p.title }
                        className='glass group relative isolate overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 '
                    >
                        <div className={ `absolute pointer-events-none -right-45 -top-50 h-120 w-120 rounded-full bg-linear-to-br ${ p.accent } opacity-75` } />
                        <div className='relative'>
                            <div className='flex items-start justify-between'>
                                <span className='font-mono text-xs uppercase tracking-wider text-muted-foreground'>{ p.tag }</span>
                                <a href={ p.link } className={ 'text-muted-foreground opacity-100 md:opacity-0 transition-opacity md:group-hover:opacity-100' }>
                                    <ExternalLink className='h-4 w-4' />
                                </a>
                            </div>
                            <h3 className='mt-4 font-display text-2xl font-semibold'>{ p.title }</h3>
                            <p className='mt-2 text-sm text-muted-foreground'>
                                { projectsDesc.find(({ title }) => title === p.title)?.desc }
                            </p>
                            <div className='mt-6 flex flex-wrap gap-2'>
                                { p.stack.map((s) => (
                                    <span key={ s } className='rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground'>
                                        { s }
                                    </span>
                                )) }
                            </div>
                        </div>
                    </article>
                )) }
            </div>
        </section>
    );
}