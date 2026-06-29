import { motion } from 'framer-motion';

export default function GithubActivity() {
  // Generates dummy data for a stylized contribution graph
  const generateContributions = () => {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        // Randomly assign a level of contribution
        const rand = Math.random();
        let level = 0;
        if (rand > 0.8) level = 4;
        else if (rand > 0.6) level = 3;
        else if (rand > 0.4) level = 2;
        else if (rand > 0.2) level = 1;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionData = generateContributions();

  return (
    <section
      id="github"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            06 // Open Source
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold leading-tight">
            Code as <span className="text-muted-foreground italic">craft.</span>
          </h3>
        </div>

        <div className="w-full border border-border rounded-lg p-8 bg-muted/10 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
            <div>
              <h4 className="text-2xl font-semibold mb-1">GitHub Activity</h4>
              <p className="text-muted-foreground">1,234 contributions in the last year</p>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-border hover:border-foreground transition-colors rounded-md text-sm font-medium"
            >
              Follow on GitHub
            </a>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-1 min-w-[800px]">
              {contributionData.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1">
                  {week.map((level, dIndex) => (
                    <motion.div
                      key={`${wIndex}-${dIndex}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: (wIndex * 7 + dIndex) * 0.002 }}
                      className={`w-3 h-3 rounded-[2px] transition-colors duration-300 ${
                        level === 0
                          ? 'bg-muted border border-border/50'
                          : level === 1
                          ? 'bg-foreground/20'
                          : level === 2
                          ? 'bg-foreground/50'
                          : level === 3
                          ? 'bg-foreground/80'
                          : 'bg-foreground'
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 items-center justify-end text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-[2px] bg-muted border border-border/50" />
              <div className="w-3 h-3 rounded-[2px] bg-foreground/20" />
              <div className="w-3 h-3 rounded-[2px] bg-foreground/50" />
              <div className="w-3 h-3 rounded-[2px] bg-foreground/80" />
              <div className="w-3 h-3 rounded-[2px] bg-foreground" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
