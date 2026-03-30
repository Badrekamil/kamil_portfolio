import { useEffect } from 'react';
import './index.css';

// Components
import Sidebar from './components/Sidebar';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Reveal from './components/Reveal';
import WhyHireMe from './components/WhyHireMe';

function App() {
  // We can attach global observer logic here if we wanted, 
  // but using a generic <Reveal> wrapper component below is simpler for React.

  return (
    <div className="container">
      <Sidebar />
      <div className="content-area">
        
        <Reveal>
          <HeroImage />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <WhyHireMe />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Stats />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

        <footer className="footer">
          <p>&copy; 2026 Badre Kamil | Built with ❤️ in DevOps</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
