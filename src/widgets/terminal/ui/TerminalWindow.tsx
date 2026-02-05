import { Gamepad2, Menu, User, Volume2, VolumeX } from "lucide-react";
import IconButton from "@/shared/ui/IconButton";
import { useCallback, useState } from "react";
import ToggleLanguage from "@/shared/ui/ToggleLanguage";
import type { Language, LogEntry } from "@/shared/types";
import CommandButton from "./CommandButton";
import Terminal from "./Terminal";
import clsx from "clsx";
import MobileMenu from "@/shared/ui/MobileMenu";

const DOMAIN_NAME = "kirikov.tech";

const UI = {
    containerBorder: "bg-gray-500 max-w-250 w-full flex flex-col h-full md:h-[90vh] md:rounded-[20px] p-2",
    dotsContainer: "flex gap-1 ml-7",
    dot: "rounded-full bg-gray-100 w-3 h-3",
    container: "bg-gray-400 rounded-[20px] gap-2 sm:gap-5 flex-1 min-h-0 flex mt-2 p-2 sm:p-5",
    leftPanel: "flex-col gap-5 items-center w-fit hidden sm:flex",
    logoContainer: "bg-gray-500 rounded-full size-11 flex justify-center items-center",
    logo: "font-press-start text-white",
    hr: "h-[2px] bg-gray-300 border-t-[1px] border-t-gray-500 border-b-[1px] border-b-gray-200 w-12",
    rightPanel: "w-full flex flex-1 min-h-0 min-w-0 flex-col",
    header: "w-full flex justify-between",
    nickname: "font-pixel text-white bg-gray-500 w-32 sm:w-38 h-11 rounded-[10px] flex justify-center items-center",
    quickCommands: "rounded-[10px] flex gap-2 sm:gap-5 py-2 mt-3 min-w-0 w-full overflow-x-auto scrollbar scrollbar-track-transparent scrollbar-thumb-white/10",
    dotsAndMenu: "flex justify-between items-center",
    mobileMenuButton: "block sm:hidden bg-gray-300 flex justify-center items-center size-11 shadow-(--button-shadow) rounded-[10px] active:bg-gray-200",
    menuIcon: "text-gray-100",
    toggleLanguage: "hidden sm:block"
} as const;

const TerminalWindow = () => {
    const [valueIsActive, setValueIsActive] = useState(true);
    const [language, setLanguage] = useState<Language>('Ru');
    const [content, setContent] = useState<LogEntry[]>([]);
    const [logoText, setLogoText] = useState(DOMAIN_NAME)
    const [menuIsActive, setMenuIsActive] = useState(false)

    const handlePrintContent = useCallback((command: string) => {
        if (command === 'clear') return setContent([]);
        setContent(prev => [
            ...prev, 
            {
                id: crypto.randomUUID(),
                command: command
            }
        ]);
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(DOMAIN_NAME);
            setLogoText("Скопировано");
            setTimeout(() => {setLogoText(DOMAIN_NAME)}, 2000);
        } catch (err) {
            console.error("Ошибка при копировании: ",err);
        }
    }

    const handleMenuOpen = async () => {
        setMenuIsActive(prev => !prev)
    }

    return (
        <div className={UI.containerBorder}>
            <div className={UI.dotsAndMenu}>
                <div className={UI.dotsContainer}>
                    <div className={UI.dot}></div>
                    <div className={UI.dot}></div>
                    <div className={UI.dot}></div>
                </div>
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
                            {valueIsActive 
                                ? <Volume2 /> 
                                : <VolumeX /> 
                            }
                        </IconButton>
                </div>
                <div className={UI.rightPanel}>
                    <div className={UI.header}>
                        <div className={clsx(UI.logoContainer, "sm:hidden")}>
                            <p className={UI.logo}>K</p>
                        </div>
                        <div 
                            className={UI.nickname}
                            onClick={handleCopy}
                        >
                            <p>{logoText}</p>
                        </div>
                        <div 
                            className={UI.mobileMenuButton}
                            onClick={handleMenuOpen}
                        >
                            <Menu className={UI.menuIcon} />
                        </div>
                        <div className={UI.toggleLanguage}>
                            <ToggleLanguage language={language} onClick={setLanguage}/>
                        </div>
                    </div>
                    <MobileMenu isActive={menuIsActive} language={language} setLanguage={setLanguage} />
                    <div className={UI.quickCommands}>
                        <CommandButton onClick={handlePrintContent} command={"projects"} />
                        <CommandButton onClick={handlePrintContent} command={"skills"} />
                        <CommandButton onClick={handlePrintContent} command={"about"} />
                        <CommandButton onClick={handlePrintContent} command={"links"} />
                    </div>
                    <Terminal content={content} onInput={handlePrintContent} />
                </div>                
            </div>
        </div>
    );
}

export default TerminalWindow;