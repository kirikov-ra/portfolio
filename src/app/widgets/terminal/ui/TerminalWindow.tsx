import { Gamepad2, User, Volume2, VolumeX } from "lucide-react";
import IconButton from "../../../../shared/ui/IconButton";
import { useState } from "react";
import ToggleLanguage from "../../../../shared/ui/ToggleLanguage";
import type { Language } from "../../../../shared/types";

const TerminalWindow = () => {
    const [valueIsActive, setValueIsActive] = useState(true);
    const [language, setLanguage] = useState<Language>('Ru');

    const ContainerBorder = "bg-gray-500 max-w-250 w-full min-h-195 h-fit rounded-[20px] p-2";
    const DotsContainer = "flex gap-1 pl-7 pt-2";
    const Dot = "rounded-full bg-gray-100 w-3 h-3";
    const Container = "bg-gray-400 rounded-[20px] size-full flex mt-4 p-5";
    const LeftPanel = "flex flex-col gap-5 flex flex-col items-center w-fit mr-5";
    const LogoContainer = "bg-gray-500 rounded-full size-11 flex justify-center items-center";
    const Logo = "font-press-start text-white";
    const Hr = "h-[2px] bg-gray-300 border-t-[1px] border-t-gray-500 border-b-[1px] border-b-gray-200 w-12";
    const RightPanel = "w-full";
    const Header = "flex justify-between";
    const Nickname = "font-pixel text-white bg-gray-500 px-8 h-11 rounded-[10px] flex justify-center items-center";
    const LanguageToggle = "flex text-white";

    return (
        <div className={ContainerBorder}>
                <div className={DotsContainer}>
                    <div className={Dot}></div>
                    <div className={Dot}></div>
                    <div className={Dot}></div>
                </div>
            <div className={Container}>
                <div className={LeftPanel}>

                        <div className={LogoContainer}>
                            <p className={Logo}>K</p>
                        </div>
                        <div className={Hr}></div>
                        <IconButton isActive={true} >
                            <User />
                        </IconButton>
                        <IconButton isActive={false}>
                            <Gamepad2 />
                        </IconButton>
                        <div className={Hr}></div>
                        <IconButton  isActive={valueIsActive} onClick={setValueIsActive}>
                            {valueIsActive ?
                                <Volume2 /> :
                                <VolumeX /> 
                            }
                        </IconButton>
                </div>
                <div className={RightPanel}>
                    <div className={Header}>
                        <div className={Nickname}>
                            <p>kirikov.tech</p>
                        </div>
                        <ToggleLanguage language={language} onClick={setLanguage}/>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default TerminalWindow;