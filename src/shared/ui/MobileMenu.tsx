import { Gamepad2, User } from "lucide-react";
import type { Language } from "../types";
import ToggleLanguage from "./ToggleLanguage";
import { cn } from "../lib/utils";
import { useState } from "react";

interface MobileMenuProps {
    language: Language;
    setLanguage: (newValue: Language) => void;
    isActive: boolean;
}

const VOL_STEPS = [0, 25, 50, 75, 100] as const;
const DEFAULT_VOLUME = 25;

const UI = {
    container: "mt-4 rounded-[10px] grid grid-col-1 overflow-hidden gap-2 mt-2 transition-all duration-500 ease-in-out",
    modSelect: "flex gap-2",
    modButton: "flex gap-1 text-white h-13 flex-1 justify-center items-center shadow-(--button-shadow) bg-gray-300 rounded-[10px]",
    activeButton: "bg-gray-200",
    volumeContainer: "bg-gray-300 h-20 flex gap-2 flex-col rounded-[10px] py-2 px-4",
    volume: "w-64 flex items-center justify-between",
    volumeTitle: "text-white/50",
    volumeStep: "size-3 rounded-full bg-gray-200 relative shadow-(--button-shadow)",
    border: "w-14 h-1.5  bg-gray-200 block absolute right-2 top-[50%] translate-y-[-50%]",
    activeVolume: "bg-gray-100 z-2",
    volNum: "text-white/50 absolute top-3 left-[50%] translate-x-[-50%]"
} as const;

const MobileMenu = ({language, isActive,  setLanguage}: MobileMenuProps) => {
    const[volume, setVolume] = useState(DEFAULT_VOLUME);

    const handleChangeVolume = (step: number) => {
        setVolume(step)
    }

    return (
        <div className={cn(UI.container, isActive ? "max-h-240" : "max-h-0")}>
            <ToggleLanguage language={language} onClick={setLanguage}/>
            <div className={UI.modSelect}>
                <button className={cn(UI.modButton, UI.activeButton)}><User /> Portfolio</button>
                <button className={UI.modButton}><Gamepad2 /> Game</button>
            </div>
            <div className={UI.volumeContainer}>
                <p className={UI.volumeTitle}>Volume</p>
                <div className={UI.volume}>
                    {VOL_STEPS.map((step, index) => {
                        const isActive = step <= volume;
                        return (
                            <button
                                key={step}
                                className={cn(UI.volumeStep, isActive && UI.activeVolume)}
                                type="button"
                                onClick={() => handleChangeVolume(step)}
                            >
                                <span className={UI.volNum}>
                                    {step}
                                </span>
                                {index !== 0 && 
                                    <span className={cn(UI.border, isActive && UI.activeVolume)}></span>
                                }
                            </button>
                    )})}
                </div> 
            </div>
        </div>
    );
};

export default MobileMenu;