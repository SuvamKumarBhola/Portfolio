import StaggeredGrid, { type BentoItem } from '../components/StaggeredGrid';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import profileData from '../data/profile.json';

// Dummy background images for the staggered grid
const backgroundImages = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1523289217630-0dd16184ac8e?auto=format&fit=crop&q=80&w=400&h=400",
];

const iconMap: Record<string, React.ReactNode> = {
  Github: <FaGithub size={24} />,
  Linkedin: <FaLinkedin size={24} />,
  Twitter: <FaTwitter size={24} />
};

export default function Contact() {
  const bentoItems: BentoItem[] = profileData.socials.map((social, idx) => ({
    id: idx,
    title: social.platform,
    subtitle: 'Follow Me',
    description: `Connect with me on ${social.platform}`,
    icon: iconMap[social.icon] || <FaEnvelope size={24} />,
    image: backgroundImages[idx % backgroundImages.length]
  }));

  return (
    <section id="contact" className="w-full min-h-screen bg-[#000] overflow-hidden border-b border-border text-white">
      <div className="w-full h-full flex flex-col items-center justify-center py-24">
        <StaggeredGrid 
          images={backgroundImages} 
          bentoItems={bentoItems} 
          centerText="CONTACT"
          showFooter={false}
        />
      </div>
    </section>
  );
}
