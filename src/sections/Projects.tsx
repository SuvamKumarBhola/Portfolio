import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import profileData from '../data/profile.json';

const ProjectCard = ({ project }: { project: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['0 1', '1.2 1'],
  });

  const scaleProgression = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgression = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: scaleProgression, opacity: opacityProgression }}
      className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 md:p-10 border border-border bg-background hover:bg-muted/30 transition-colors duration-500 rounded-lg"
    >
      <div className="w-full lg:w-1/2 overflow-hidden rounded-md bg-muted aspect-video relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
        {/* Subtle overlay for inversion support */}
        <div className="absolute inset-0 bg-foreground/10 pointer-events-none mix-blend-overlay" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex gap-2 mb-4">
          {project.categories.map((cat: string) => (
            <span key={cat} className="text-xs uppercase tracking-widest text-muted-foreground">
              {cat}
            </span>
          ))}
        </div>
        
        <h4 className="text-3xl font-heading font-bold mb-4 group-hover:text-foreground transition-colors">
          {project.title}
        </h4>
        
        <p className="text-foreground/80 leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-transparent text-foreground/70 border border-foreground/20 rounded-full hover:bg-foreground/5 hover:border-foreground/40 hover:text-foreground transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-foreground text-background font-medium hover:scale-105 transition-transform"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2.5 border border-border hover:border-foreground transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { projects } = profileData;

  return (
    <section
      id="projects"
      className="relative w-full py-16 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground leading-[0.9]">
            FEATURED
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-muted-foreground/20 leading-[0.9] mt-2">
            PROJECTS
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
