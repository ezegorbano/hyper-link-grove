import { ProfileSection } from "./ProfileSection";
import { LinkButton } from "./LinkButton";
import { Mail, Youtube, Linkedin } from "lucide-react";

export const LinktreeApp = () => {
  const links = [
    {
      href: "mailto:brian@example.com",
      icon: <Mail className="w-5 h-5" />,
      text: "Email Me",
      external: false
    },
    {
      href: "https://x.com/brianmanning",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      text: "Discourse @ X"
    },
    {
      href: "https://tradingview.com/u/brianmanning",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      text: "Investing @ TradingView"
    },
    {
      href: "https://youtube.com/@brianmanning",
      icon: <Youtube className="w-5 h-5" />,
      text: "Watching @ YouTube"
    },
    {
      href: "https://open.spotify.com/user/brianmanning",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.5c-.17 0-.33-.07-.46-.2-1.67-1.37-3.77-2.07-6.26-2.07-1.4 0-2.8.23-4.15.68-.19.06-.4-.02-.52-.2-.12-.18-.1-.42.05-.58.17-.18.42-.27.67-.27.2 0 .4.04.58.11 1.46-.48 3-.73 4.58-.73 2.74 0 5.09.77 6.98 2.29.17.14.2.39.06.56-.07.09-.18.14-.29.14-.1 0-.2-.03-.28-.08l-.96-.75z"/>
        </svg>
      ),
      text: "Listening @ Spotify"
    },
    {
      href: "https://goodreads.com/brianmanning",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      text: "Reading @ Goodreads"
    },
    {
      href: "https://linkedin.com/in/brianmanning",
      icon: <Linkedin className="w-5 h-5" />,
      text: "Experience @ LinkedIn"
    },
    {
      href: "https://stratumsix.com",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      text: "Work @ Stratum Six"
    }
  ];

  return (
    <div className="min-h-screen bg-background bg-gradient-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative container mx-auto px-4 py-12 max-w-md">
        <ProfileSection />
        
        <div className="mt-12 space-y-4">
          {links.map((link, index) => (
            <LinkButton
              key={index}
              href={link.href}
              icon={link.icon}
              external={link.external}
            >
              {link.text}
            </LinkButton>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Built with ❤️ for GitHub Pages
          </p>
        </div>
      </div>
    </div>
  );
};