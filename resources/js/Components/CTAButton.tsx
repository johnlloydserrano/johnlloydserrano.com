import { Button } from "@/Components/ui/button";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface IconButtonProps {
    icon: LucideIcon;
    children: ReactNode;
    className?: string;
    variant?: "primary" | "default" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
    onClick?: () => void;
}

export const CTAButton = ({
    icon: Icon,
    children,
    className = "",
    variant = "default",
    onClick,
}: IconButtonProps) => {
    return (
        <Button
            className={`w-full sm:w-auto px-6 py-3 relative overflow-hidden group ${className}`}
            variant={variant}
            onClick={onClick}
        >
            <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 flex items-center gap-2">
                <Icon />
                {children}
            </span>
        </Button>
    );
};
