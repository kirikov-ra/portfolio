import type { ReactNode } from "react";

interface IconButtonProps {
    children: ReactNode;
    isActive: boolean;
    onClick?: (newValue: boolean) => void; 
}

const IconButton = ({children, isActive, onClick} : IconButtonProps) => {
    const Container = "rounded-[20px] cursor-pointer size-13 text-white flex justify-center items-center";
    const Active = "shadow-(--button-shadow) bg-gray-200";
    const NotActive = "bg-gray-300";

    const handleToggle = () => {
        if (onClick) return onClick(!isActive);
    }

    return (
        <div 
            className={`${Container} ${isActive ? Active : NotActive}`}
            onClick={() => handleToggle()}
        >
            {children}
        </div>
    );
}

export default IconButton;