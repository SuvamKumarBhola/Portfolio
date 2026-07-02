import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import profileData from "../data/profile.json";
import type { HTMLAttributes } from "react";

export default function About() {
  return (
    <section id="about" className="w-full bg-background px-4 py-16 text-foreground border-b border-border">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </section>
  );
}

type BlockProps = {
  className?: string;
  [key: string]: any;
};

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-xl border border-border bg-muted/20 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl md:text-5xl font-heading font-semibold leading-tight">
      Hi, I'm {profileData.name.split(' ')[0]}.{" "}
      <span className="text-muted-foreground italic font-light">
        {profileData.tagline}
      </span>
    </h1>
    <a
      href="#contact"
      className="flex items-center gap-2 text-foreground/80 hover:text-foreground hover:underline transition-colors w-fit font-medium"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.05,
      }}
      className="col-span-6 bg-muted/40 md:col-span-3 hover:bg-foreground hover:text-background transition-colors group cursor-pointer"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl group-hover:scale-110 transition-transform"
      >
        <FaYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.05,
      }}
      className="col-span-6 bg-muted/40 md:col-span-3 hover:bg-foreground hover:text-background transition-colors group cursor-pointer"
    >
      <a
        href={profileData.socials.find(s => s.platform === 'GitHub')?.url || '#'}
        className="grid h-full place-content-center text-3xl group-hover:scale-110 transition-transform"
      >
        <FaGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.05,
      }}
      className="col-span-6 bg-muted/40 md:col-span-3 hover:bg-foreground hover:text-background transition-colors group cursor-pointer"
    >
      <a
        href={profileData.socials.find(s => s.platform === 'LinkedIn')?.url || '#'}
        className="grid h-full place-content-center text-3xl group-hover:scale-110 transition-transform"
      >
        <FaLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.05,
      }}
      className="col-span-6 bg-muted/40 md:col-span-3 hover:bg-foreground hover:text-background transition-colors group cursor-pointer"
    >
      <a
        href={profileData.socials.find(s => s.platform === 'Twitter')?.url || '#'}
        className="grid h-full place-content-center text-3xl group-hover:scale-110 transition-transform"
      >
        <FaTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug font-heading">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-muted-foreground font-sans text-2xl font-light">
        {profileData.about.shortBio}
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl text-foreground" />
    <p className="text-center text-lg text-muted-foreground">{profileData.contact.location}</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9 flex flex-col justify-center">
    <p className="mb-4 text-xl font-semibold">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-md border border-border bg-background px-4 py-2.5 transition-colors focus:border-foreground focus:outline-0 placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);
