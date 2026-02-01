import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface IconButtonProps {
    children: ReactNode;
    isActive?: boolean;
    onClick?: (newValue: boolean) => void; 
}

const UI = {
    container: "rounded-[10px] group cursor-pointer max-w-48 w-full h-13 px-4 text-white flex items-center bg-gray-300 hover:shadow-(--button-shadow) hover:bg-gray-200",
    arrow: "text-white mr-2 group-hover:text-green-400"
} as const;

const CommandButton = ({children, isActive, onClick} : IconButtonProps) => {

    const handleToggle = () => {
        if (onClick) return onClick(!isActive);
    }

    return (
        <div 
            className={UI.container}
            onClick={() => handleToggle()}
        >
            <ChevronRight className={UI.arrow} />
            <p>/ {children}</p>
        </div>
    );
}

export default CommandButton;