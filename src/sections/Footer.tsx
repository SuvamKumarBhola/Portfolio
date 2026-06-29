
import { Mail, ArrowUpRight } from 'lucide-react';
import profileData from '../data/profile.json';

export default function Footer() {
  const { contact, socials } = profileData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-foreground text-background pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hire Me / Contact Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-32">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
              Let's build something <span className="italic font-light">extraordinary.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <Mail size={18} />
                Send an Email
              </a>
              <button className="flex items-center justify-center gap-2 px-8 py-4 border border-background/20 rounded-full hover:bg-background/10 transition-colors">
                Schedule Meeting
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  className="block w-full px-0 py-3 bg-transparent border-0 border-b border-background/30 appearance-none focus:outline-none focus:ring-0 focus:border-background peer"
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-background/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="block w-full px-0 py-3 bg-transparent border-0 border-b border-background/30 appearance-none focus:outline-none focus:ring-0 focus:border-background peer"
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-background/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={3}
                  placeholder=" "
                  className="block w-full px-0 py-3 bg-transparent border-0 border-b border-background/30 appearance-none focus:outline-none focus:ring-0 focus:border-background peer resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-background/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="self-start text-sm font-semibold tracking-widest uppercase border-b border-transparent hover:border-background transition-colors pb-1 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-background/10">
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-background/60 hover:text-background transition-colors"
              >
                {social.platform}
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-background/60 text-sm">
            <p>© {currentYear} {profileData.name}. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="hover:text-background transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer >
  );
}
