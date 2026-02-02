import { Gamepad2, User, Volume2, VolumeX } from "lucide-react";
import IconButton from "../../../shared/ui/IconButton";
import { useCallback, useState } from "react";
import ToggleLanguage from "../../../shared/ui/ToggleLanguage";
import type { Commands, Language, LogEntry } from "../../../shared/types";
import CommandButton from "./CommandButton";
import Terminal from "./Terminal";

const UI = {
    containerBorder: "bg-gray-500 max-w-250 w-full flex flex-col h-[90vh] rounded-[20px] p-2",
    dotsContainer: "flex gap-1 pl-7 pt-2",
    dot: "rounded-full bg-gray-100 w-3 h-3",
    container: "bg-gray-400 rounded-[20px] flex-1 min-h-0  flex mt-4 p-5",
    leftPanel: "flex flex-col gap-5 items-center w-fit mr-5",
    logoContainer: "bg-gray-500 rounded-full size-11 flex justify-center items-center",
    logo: "font-press-start text-white",
    hr: "h-[2px] bg-gray-300 border-t-[1px] border-t-gray-500 border-b-[1px] border-b-gray-200 w-12",
    rightPanel: "w-full flex flex-1 min-h-0 flex-col",
    header: "flex justify-between",
    nickname: "font-pixel text-white bg-gray-500 px-8 h-11 rounded-[10px] flex justify-center items-center",
    quickCommands: "flex gap-5 mt-5"

} as const;

const TerminalWindow = () => {
    const [valueIsActive, setValueIsActive] = useState(true);
    const [language, setLanguage] = useState<Language>('Ru');
    const [content, setContent] = useState<LogEntry[]>([]);

    const handlePrintContent = useCallback((command: Commands) => {
        setContent(prev => [
            ...prev, 
            {
                id: crypto.randomUUID(),
                command: command
            }
        ])
        
        return ;
    }, []);


    return (
        <div className={UI.containerBorder}>
                <div className={UI.dotsContainer}>
                    <div className={UI.dot}></div>
                    <div className={UI.dot}></div>
                    <div className={UI.dot}></div>
                </div>
            <div className={UI.container}>
                <div className={UI.leftPanel}>

                        <div className={UI.logoContainer}>
                            <p className={UI.logo}>K</p>
                        </div>
                        <div className={UI.hr}></div>
                        <IconButton isActive={true} >
                            <User />
                        </IconButton>
                        <IconButton isActive={false}>
                            <Gamepad2 />
                        </IconButton>
                        <div className={UI.hr}></div>
                        <IconButton  isActive={valueIsActive} onClick={setValueIsActive}>
                            {valueIsActive ?
                                <Volume2 /> :
                                <VolumeX /> 
                            }
                        </IconButton>
                </div>
                <div className={UI.rightPanel}>
                    <div className={UI.header}>
                        <div className={UI.nickname}>
                            <p>kirikov.tech</p>
                        </div>
                        <ToggleLanguage language={language} onClick={setLanguage}/>
                    </div>
                    <div className={UI.quickCommands}>
                        <CommandButton onClick={handlePrintContent} command={"Portfolio"} />
                        <CommandButton onClick={handlePrintContent} command={"Skills"} />
                        <CommandButton onClick={handlePrintContent} command={"About"} />
                        <CommandButton onClick={handlePrintContent} command={"Links"} />
                    </div>
                    <Terminal content={content} />
                </div>                
            </div>
        </div>
    );
}

export default TerminalWindow;