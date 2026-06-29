import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "Hello", language: "English" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Ciao", language: "Italian" },
  { text: "Hallo", language: "German" },
  { text: "こんにちは", language: "Japanese" },
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => onComplete(), 500);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= greetings.length) {
          clearInterval(interval);
          setIsAnimating(false);
          return prevIndex;
        }

        return nextIndex;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isAnimating, onComplete]);

  // Animation variants for the text
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-background text-foreground"
    >
      <section
        aria-label="Rapid greetings in different languages"
        className="flex min-h-[200px] items-center justify-center gap-1 p-4"
      >
        <div className="relative flex h-16 w-60 items-center justify-center overflow-visible">
          {isAnimating ? (
            <AnimatePresence mode="popLayout">
              <motion.div
                animate={textVariants.visible}
                aria-live="off"
                className="absolute flex items-center gap-3 font-medium text-4xl text-gray-800 dark:text-gray-200"
                exit={textVariants.exit}
                initial={textVariants.hidden}
                key={currentIndex}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-black dark:bg-white"
                />
                {greetings[currentIndex].text}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex items-center gap-3 font-medium text-4xl text-gray-800 dark:text-gray-200">
              <div
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-black dark:bg-white"
              />
              {greetings[currentIndex].text}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
