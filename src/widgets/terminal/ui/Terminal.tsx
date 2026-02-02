import Links from "./Links";
import Skills from "./Skills";

const UI = {
    container: "bg-gray-300 rounded-[10px] p-4 flex-1 mt-4 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-white/10 scrollbar-hover:scrollbar-thumb-white/30 scrollbar-active:scrollbar-thumb-white/30"
} as const;

const Terminal = () => {

    return (
        <div className={UI.container}>
            <Skills />
            <Links />
        </div>
    );
}

export default Terminal;