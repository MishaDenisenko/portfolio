type Props = {};

export default function CodeCard(props: Props) {
    const code = `const dev = {\n\tname: "Michail Denisenko",\n\trole: "Junior Fullstack",\n\tstack: ["TS", "React", "Node"],\n\tlocation: "Kiev, UA",\n\tlearning: true,\n\tcoffee: Infinity,\n};`;
    
    return (
        <div className='glass relative rounded-2xl p-1 shadow-(--shadow-soft)'>
            <div className='flex items-center gap-1.5 border-b border-border/50 px-4 py-3'>
                <span className='h-3 w-3 rounded-full bg-red-400/70' />
                <span className='h-3 w-3 rounded-full bg-yellow-400/70' />
                <span className='h-3 w-3 rounded-full bg-emerald-400/70' />
                <span className='ml-3 font-mono text-xs text-muted-foreground'>about.ts</span>
            </div>
            <pre className='overflow-x-auto p-6 font-mono text-[13px] leading-relaxed'>
                { code }
            </pre>
        </div>
    );
}