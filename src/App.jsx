import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Credentials from './components/Credentials/Credentials';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { ResumeProvider } from './components/Resume/Resume';

function App() {
  return (
    <ResumeProvider>
      <a className="skip-link" href="#main">
        Skip to the content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Credentials />
        <Skills />
      </main>
      <Footer />
    </ResumeProvider>
  );
}

export default App;
