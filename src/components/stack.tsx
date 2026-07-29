import SectionHead from './section-head.tsx';
import { Mail } from 'lucide-react';

const stack = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Redux/Zustand', 'Vite', 'Tailwind CSS', 'UI libraries'],
    Backend: ['Nest.js', 'Node.js', 'Express', 'Postgres', 'Prisma', 'REST', 'WebSocket'],
    Tools: ['Git', 'Docker', 'Figma', 'Vitest', 'GitHub Actions', 'Linux']
};

type Props = {};

export default function Stack(props: Props) {
    return (
        <section id='stack' className='mx-auto max-w-6xl px-6 py-32'>
            <SectionHead label='03 · Стек' title='Технологии, с которыми работаю' />
            <div className='mt-12 grid gap-4 md:grid-cols-3'>
                { Object.entries(stack).map(([group, items]) => (
                    <div key={ group } className='glass rounded-2xl p-6'>
                        <h3 className='font-mono text-xs uppercase tracking-wider text-muted-foreground'>{ group }</h3>
                        <div className='mt-4 flex flex-wrap gap-2'>
                            { items.map((t) => (
                                <span key={ t } className='rounded-lg bg-secondary/60 px-3 py-1.5 text-sm'>
                                  { t }
                                </span>
                            )) }
                        </div>
                    </div>
                )) }
            </div>
        </section>
    );
}