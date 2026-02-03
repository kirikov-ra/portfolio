import { ChevronRight } from "lucide-react";
import { useState } from "react";

const UI = {
    container: "flex",
    arrow: "text-green-400 my-2",
    input: "outline-none border-none text-white w-full py-2"
} as const;

interface TerminalInputProps {
    onInput: (value: string) => void; 
}

const TerminalInput = ({onInput}: TerminalInputProps) => {
    const [commandText, setCommandText] = useState('')

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setCommandText('')
            return onInput(commandText.toLowerCase())
        }
    }

    return (
        <div className={UI.container}>
            <ChevronRight className={UI.arrow} />
            <input 
                onChange={
                    (e) => setCommandText(e.target.value)
                }
                className={UI.input} 
                onKeyDown={handleKeyDown}
                placeholder="_" 
                type="text" 
                value={commandText} 
                name={"terminal"}
            />
        </div>
    );
}

export default TerminalInput;