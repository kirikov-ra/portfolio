import type { Language } from "../types";

interface ToggleLanguageProps {
    language: Language;
    onClick: (newValue: Language) => void; 
}

const ToggleLanguage = ({language, onClick} : ToggleLanguageProps) => {
    const Container = "rounded-[10px] bg-gray-500 h-11 text-white flex justify-center items-center p-1";
    const Active = "shadow-(--button-shadow) bg-gray-200 rounded-[8px]";
    const NotActive = "bg-gray-500";
    const LButton = "px-4 h-full flex items-center cursor-pointer";

    const handleToggle = () => {
        if (language === 'Ru') return onClick('En');
        return onClick('Ru');
    }
    
    return (
        <div 
            className={Container}
        >
            <div
                className={`${LButton} ${language === 'Ru' ? Active : NotActive}`}
                onClick={() => handleToggle()}>
                    <p>Ru</p>
            </div>
            <div
                className={`${LButton} ${language === 'En' ? Active : NotActive}`}
                onClick={() => handleToggle()}>
                    <p>En</p>
            </div>
        </div>
    );
}

export default ToggleLanguage;