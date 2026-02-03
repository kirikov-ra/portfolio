import { ChevronRight } from "lucide-react";
import type { Commands } from "@/shared/types";
import { memo } from "react";

interface CommandButtonProps {
    command: Commands;
    onClick?: (value: Commands) => void; 
}

const UI = {
    container: "font-mono text-sm md:text-base rounded-[10px] group cursor-pointer max-w-40 md:max-w-48 w-full h-12 sm:h-13 px-3 sm:px-4 text-white text-nowrap flex flex-nowrap items-center bg-gray-300 hover:shadow-(--button-shadow) hover:bg-gray-200",
    arrow: "text-white mr-px sm:mr-2 group-hover:text-green-400"
} as const;

const CommandButton = memo(({command, onClick} : CommandButtonProps) => {

    const handleToggle = () => {
        if (onClick) return onClick(command);
    }

    return (
        <div 
            className={UI.container}
            onClick={handleToggle}
        >
            <ChevronRight className={UI.arrow} />
            <p>{command}</p>
        </div>
    );
});

export default CommandButton;