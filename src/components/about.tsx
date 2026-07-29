import { Code2, Database, Sparkles } from 'lucide-react';
import SectionHead from './section-head.tsx';

type Props = {};

export default function About(props: Props) {
    const cards = [
        {
            icon: Code2,
            title: 'Frontend',
            desc: 'Пишу отзывчивые интерфейсы на React и Next на TypeScript. Слежу за accessibility и производительностью.'
        },
        {
            icon: Database,
            title: 'Backend',
            desc: 'Работаю с Node.js, Nest.js, Postgres и REST/tRPC API. Разбираюсь в схемах данных и авторизации.'
        },
        {
            icon: Sparkles,
            title: 'Продукт',
            desc: 'Люблю понимать задачу целиком — от UX до деплоя. Хочу расти в сторону senior-инженера.'
        }
    ];
    return (
        <section id='about' className='mx-auto max-w-6xl px-6 py-32'>
            <SectionHead label='01 · О себе' title='Джуниор с амбициями senior' />
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