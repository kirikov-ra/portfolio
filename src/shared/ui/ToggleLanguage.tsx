import type { Language } from "../types";

interface ToggleLanguageProps {
    language: Language;
    onClick: (newValue: Language) => void; 
}

const UI = {
    container: "rounded-[10px] bg-gray-500 h-11 text-white flex justify-center items-center p-1",
    active: "shadow-(--button-shadow) bg-gray-200 rounded-[8px]",
    default: "bg-gray-500",
    languageButton: "px-4 h-full flex items-center cursor-pointer"
} as const;

const ToggleLanguage = ({language, onClick} : ToggleLanguageProps) => {


    const handleToggle = () => {
        if (language === 'Ru') return onClick('En');
        return onClick('Ru');
    }
    
    return (
        <div 
            className={UI.container}
        >
            <div
                className={`${UI.languageButton} ${language === 'Ru' ? UI.active : UI.default}`}
                onClick={() => handleToggle()}>
                    <p>Ru</p>
            </div>
            <div
                className={`${UI.languageButton} ${language === 'En' ? UI.active : UI.default}`}
                onClick={() => handleToggle()}>
                    <p>En</p>
            </div>
        </div>
    );
}

export default ToggleLanguage;