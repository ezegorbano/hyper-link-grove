import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  external?: boolean;
}

export const LinkButton = ({ href, icon, children, external = true }: LinkButtonProps) => {
  return (
    <Button
      variant="linktree"
      className="w-full h-14 text-left justify-start text-base font-medium group"
      asChild
    >
      <a 
        href={href} 
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="flex items-center gap-4"
      >
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
          {icon}
        </div>
        <span className="flex-1">{children}</span>
        <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </div>
      </a>
    </Button>
  );
};