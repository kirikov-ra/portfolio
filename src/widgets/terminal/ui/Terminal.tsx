import type { LogEntry } from "../../../shared/types";
import Links from "./Links";
import Skills from "./Skills";

const UI = {
    container: "bg-gray-300 rounded-[10px] p-4 flex-1 mt-4 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-white/10 scrollbar-hover:scrollbar-thumb-white/30 scrollbar-active:scrollbar-thumb-white/30"
} as const;

const Terminal = ({content}: {content: LogEntry[]}) => {

    return (
        <div className={UI.container}>
            {content.map(({id, command}) => {
                switch (command) {
                    case 'Portfolio':
                        return <div key={id}>/{command}</div>
                    case 'Skills':
                        return <div key={id}><Skills /></div>
                    case 'About':
                        return <div key={id}>/{command}</div>
                    case 'Links':
                        return <div key={id}><Links /></div>
                }
            })}
        </div>
    );
}

export default Terminal;