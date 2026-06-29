import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'default' | 'invert'>('default');

  useEffect(() => {
    // Check initial preference from local storage or system
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'invert') {
      setTheme('invert');
      document.documentElement.setAttribute('data-theme', 'invert');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'invert' : 'default';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    
    if (newTheme === 'invert') {
      document.documentElement.setAttribute('data-theme', 'invert');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-transform duration-300"
      aria-label="Toggle Invert Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'default' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
