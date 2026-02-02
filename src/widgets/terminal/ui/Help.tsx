import type { HelpCommand } from "../../../shared/types";

const UI = {
    container: "font-mono gap-2 mt-4 text-white flex",
    lastCommand: "flex items-center",
    arrow: "text-white",
    content: "ml-6",
    errorMessage: "text-red-500 flex flex-col ml-6",
    helpMessage: "text-white",
    button: "text-green-400 cursor-pointer"
} as const;

const HELP_COMMANDS: HelpCommand[] = [
  { command: "about", description: "learn about me" },
  { command: "skills", description: "view my skill set" },
  { command: "projects", description: "browse my projects" },
  { command: "experience", description: "work experience" },
  { command: "pr [1-4]", description: "detailed project view" },
  { command: "social", description: "social profiles" },
  { command: "contact", description: "get in touch" },
  { command: "clear", description: "clear the terminal" },
  { command: "help", description: "show all commands" },
];


const Help = ({onClick} : {onClick: (value: string) => void}) => {

    const handleClickHelp = (value: string) => {
        return onClick(value);
    }

    return (
        <>
            {HELP_COMMANDS.map(({command, description}) => {
                return  <div className={UI.container}>
                            <button className={UI.button} onClick={() => handleClickHelp(command)}>
                                {command}
                            </button>
                            <p> - </p>
                            {description}
                        </div>
            })}
        </>
    )
}

export default Help;