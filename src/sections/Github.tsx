import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import profileData from '../data/profile.json';

export default function GithubActivity() {
  const explicitTheme = {
    light: ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#e91e63'],
    dark: ['#2d132b', '#732c52', '#a03d72', '#d15c8c', '#ffd6e8'],
  };

  // Extract GitHub username from profile data
  const githubSocial = profileData.socials.find(s => s.platform.toLowerCase() === 'github');
  const githubUsername = githubSocial ? githubSocial.url.split('/').pop() || 'SuvamKumarBhola' : 'SuvamKumarBhola';

  return (
    <section
      id="github"
      className="relative w-full py-16 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground leading-[0.9]">
            GITHUB
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-muted-foreground/20 leading-[0.9] mt-2">
            ACTIVITY
          </h2>
        </div>

        <div className="w-full border border-border rounded-lg p-8 bg-muted/10 flex flex-col gap-8 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
            <div>
              <h4 className="text-2xl font-semibold mb-1">Real-time Activity</h4>
              <p className="text-muted-foreground">My GitHub contributions map</p>
            </div>
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-border hover:border-foreground transition-colors rounded-md text-sm font-medium"
            >
              Follow on GitHub
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center overflow-x-auto w-full py-4 text-foreground/80"
          >
            <div className="min-w-max pr-4">
              <GitHubCalendar 
                username={githubUsername} 
                theme={explicitTheme}
                colorScheme="dark"
                blockSize={12}
                blockMargin={5}
                fontSize={12}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
