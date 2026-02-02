import { ChevronRight } from "lucide-react";
import { type LogEntry } from "../../../shared/types";
import Links from "./Links";
import Skills from "./Skills";
import TerminalInput from "./TerminalInput";
import Help from "./Help";

interface TerminalProps {
    content: LogEntry[];
    onInput: (value: string) => void;
}

const UI = {
    container: "font-mono bg-gray-300 rounded-[10px] p-4 flex-1 flex flex-col gap-4 mt-4 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-white/10 scrollbar-hover:scrollbar-thumb-white/30 scrollbar-active:scrollbar-thumb-white/30",
    lastCommand: "flex items-center text-white",
    arrow: "text-white",
    content: "ml-6",
    errorMessage: "text-red-500 flex flex-col ml-6",
    helpMessage: "text-white",
    button: "text-green-400 cursor-pointer"
} as const;

const Terminal = ({content, onInput}: TerminalProps) => {
    const handleInputChange = (value: string) => {
        return onInput(value)
    };

    const handleClickHelp = (value: string) => {
        return onInput(value);
    }

    return (
        <div className={UI.container}>
            {content.map(({id, command}) => { return (
                <div key={id}> 
                    <div className={UI.lastCommand}><ChevronRight className={UI.arrow} />{command}</div>

                    {(() => {
                        switch (command) {
                            case 'portfolio':
                                return <div className={UI.content}>/{command}</div>
                            case 'skills':
                                return <div className={UI.content}><Skills /></div>
                            case 'about':
                                return <div className={UI.content}>/{command}</div>
                            case 'links':
                                return <div className={UI.content}><Links /></div>
                            case 'help':
                                return <div className={UI.content}><Help onClick={handleClickHelp} /></div>
                            default:
                                return  <div className={UI.errorMessage}>
                                            {command}: command not found
                                            <pre className={UI.helpMessage}>
                                                Type 
                                                "<button className={UI.button} onClick={() => handleClickHelp('help')}>help</button>"  
                                                to see all available commands
                                            </pre>
                                        </div>
                        }
                    })()}

                </div>
            )})}
            <TerminalInput onInput={handleInputChange} />
        </div>
    );
};

export default Terminal;