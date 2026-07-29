import SectionHead from './section-head.tsx';
import { Mail } from 'lucide-react';
import { LuLinkedin, LuGithub } from 'react-icons/lu';


type Props = {};

export default function Contact(props: Props) {
    return (
        <section id='contact' className='mx-auto max-w-4xl px-6 py-32 text-center'>
            <SectionHead label='04 · Контакты' title='Давайте что-нибудь построим' center />
            <p className='mx-auto mt-6 max-w-xl text-muted-foreground'>
                Ищу работу или интересные пет-проекты. Пишите — отвечаю быстро.
            </p>
            <div className='mt-10 flex flex-wrap justify-center gap-3'>
                <a
                    href='mailto:midenisenko@gmail.com'
                    className='bg-gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]'
                >
                    <Mail className='h-4 w-4' /> midenisenko@gmail.com
                </a>
                <a href='https://github.com/MishaDenisenko' className='glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-colors hover:bg-white/5'>
                    <LuGithub className='h-4 w-4' /> GitHub
                </a>
                <a href='https://www.linkedin.com/in/mykhailo-denysenko-93aa85288/' className='glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-colors hover:bg-white/5'>
                    <LuLinkedin className='h-4 w-4' /> LinkedIn
                </a>
            </div>
        </section>
    );
}