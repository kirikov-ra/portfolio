import Links from "./Links";
import Skills from "./Skills";

const Container = "bg-gray-300 rounded-[10px] p-4 flex-1 mt-4 overflow-y-auto";

const Terminal = () => {


    return (
        <div className={Container}>
            <Skills />
            <Links />
        </div>
    );
}

export default Terminal;