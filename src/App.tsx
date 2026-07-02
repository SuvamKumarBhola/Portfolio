import { useState, useEffect, lazy, Suspense } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

// Sections (Lazy Loaded)
const Hero = lazy(() => import('./sections/Hero'));
const VelocityText = lazy(() => import('./sections/VelocityText'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Interests = lazy(() => import('./sections/Interests'));
const Certifications = lazy(() => import('./sections/Certifications'));
const GithubActivity = lazy(() => import('./sections/Github'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return; // Don't init Lenis while loading

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
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative w-full min-h-screen font-sans selection:bg-foreground selection:text-background">
          <CustomCursor />
          <ThemeToggle />
          <Navbar />
          
          <Suspense fallback={<div className="min-h-screen w-full bg-background" />}>
            <main className="w-full">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Interests />
              <GithubActivity />
              <Contact />
              <VelocityText />
            </main>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
