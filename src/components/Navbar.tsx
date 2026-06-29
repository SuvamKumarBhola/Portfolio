import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Interests', href: '#interests' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Vertical Index Navbar */}
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8 w-40"
      >
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">
          Index
        </h4>
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'
                  }`}
                >
                  <span
                    className={`inline-block overflow-hidden transition-all duration-300 ${
                      isActive ? 'w-4 mr-2 opacity-100' : 'w-0 mr-0 opacity-0'
                    }`}
                  >
                    —
                  </span>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      {/* Mobile Top Header (Just for the Hamburger) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 p-6 flex justify-end pointer-events-none">
        <button
          className="p-3 bg-background/80 backdrop-blur-md border border-border rounded-full text-foreground pointer-events-auto shadow-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Index
            </h4>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`text-3xl font-heading font-semibold transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
