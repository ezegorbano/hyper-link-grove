import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

export const ProfileSection = () => {
  return (
    <div className="text-center space-y-6">
      <div className="relative">
        <Avatar className="w-32 h-32 mx-auto ring-4 ring-primary/20 shadow-elevated">
          <AvatarImage src={profileImage} alt="Profile" />
          <AvatarFallback className="text-2xl bg-gradient-primary text-white">
            BM
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
      
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Brian Manning</h1>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Digital entrepreneur and deep tech investor in AI, autonomous vehicles, 
          bitcoin, cloud, cybersecurity, defense, nuclear power, robotics, space.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:text-primary transition-colors"
          asChild
        >
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:text-primary transition-colors"
          asChild
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:text-primary transition-colors"
          asChild
        >
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </a>
        </Button>
      </div>
    </div>
  );
};