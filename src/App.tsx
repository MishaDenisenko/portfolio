import Header from './components/header.tsx';
import Hero from './components/hero.tsx';
import About from './components/about.tsx';
import Projects from './components/projects.tsx';
import Stack from './components/stack.tsx';
import Contact from './components/contact.tsx';
import Footer from './components/footer.tsx';
import { useState } from 'react';


export type Lang = 'en' | 'ru' | 'ua';

function App() {
    const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') || 'en') as Lang);
    
    const changeLanguage = (lang: Lang) => {
        setLang(lang);
        localStorage.setItem('lang', lang);
    };
    
    return (
        <div className={ 'max-h-screen' }>
            <Header lang={ lang } changeLang={ changeLanguage } />
            <Hero lang={ lang } />
            <About lang={ lang } />
            <Projects lang={ lang } />
            <Stack lang={ lang } />
            <Contact lang={ lang } />
            <Footer />
        </div>
    );
}

export default App;
