import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';

// Sections (to be implemented)
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Interests from './sections/Interests';
import Certifications from './sections/Certifications';
import GithubActivity from './sections/Github';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-foreground selection:text-background">
      <CustomCursor />
      <ThemeToggle />
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Interests />
        <GithubActivity />
      </main>
      <Footer />
    </div>
  );
}

export default App;
