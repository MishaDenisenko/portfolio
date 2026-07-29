import Header from './components/header.tsx';
import Hero from './components/hero.tsx';
import About from './components/about.tsx';
import Projects from './components/projects.tsx';
import Stack from './components/stack.tsx';
import Contact from './components/contact.tsx';
import Footer from './components/footer.tsx';


function App() {
    return (
        <div className={ 'max-h-screen' }>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Stack />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
