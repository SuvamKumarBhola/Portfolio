import { useEffect, useState } from 'react';
import { AnimatedThemeToggler } from "../registry/magicui/animated-theme-toggler";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    // Check initial preference from local storage or system
    const oldStored = localStorage.getItem('portfolio-theme');
    const newStored = localStorage.getItem('theme');
    
    if (newStored === 'dark' || oldStored === 'invert') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'invert');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
      setTheme('light');
    }
  }, []);

  if (!mounted) return null;

  return (
    <AnimatedThemeToggler
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
      theme={theme}
      onThemeChange={(newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme === 'dark' ? 'invert' : 'default');
        
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'invert');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.removeAttribute('data-theme');
        }
      }}
      variant="circle"
    />
  );
}
