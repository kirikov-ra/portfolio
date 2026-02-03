import { memo, type ReactNode } from "react";

interface IconButtonProps {
    children: ReactNode;
    isActive: boolean;
    onClick?: (newValue: boolean) => void; 
}

const UI = {
    container: "rounded-[16px] md:rounded-[20px] cursor-pointer size-11 md:size-13 text-white flex justify-center items-center",
    active: "shadow-(--button-shadow) bg-gray-200",
    default: "bg-gray-300"
} as const;


const IconButton = memo(({children, isActive, onClick} : IconButtonProps) => {


    const handleToggle = () => {
        if (onClick) return onClick(!isActive);
    }

    return (
        <div 
            className={`${UI.container} ${isActive ? UI.active : UI.default}`}
            onClick={() => handleToggle()}
        >
            {children}
        </div>
    );
});

export default IconButton;