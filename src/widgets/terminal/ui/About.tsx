import { ABOUT_RU } from "../../../shared/data/content";

const UI = {
    container: "font-mono leading-relaxed text-sm md:text-base",
    title: "text-gray-100",
    mySymbol: "text-white",
    label: "text-pink-400 shrink-0",
    valueText: "text-sky-300",
    wrapper: "ml-4 flex",
    itemContainer: "ml-4 text-sky-300 text-wrap",
    indent: "pl-4",
    block: "block",
    inline: "inline"
} as const;

const About = () => {
    return (
        <div className={UI.container}>
            <p className={UI.title}>// Personal Info</p>
            <p className={UI.mySymbol}>{'{'}</p>
            
            {ABOUT_RU.map(({ label, value }, groupIndex) => {
                const isArray = value.length > 1;
                const isLastGroup = groupIndex === ABOUT_RU.length - 1;

                return (
                    <div className={UI.wrapper} key={label}>
                        <span className={UI.label}>"{label}"</span>
                        <span className={UI.mySymbol}>: </span>
                        
                        <div className={UI.itemContainer}>
                            {isArray && <span className={UI.mySymbol}>[</span>}
                            
                            <div className={isArray ? UI.indent : UI.inline}>
                                {value.map((text, idx) => (
                                    <div 
                                        key={idx} 
                                        className={isArray ? UI.block : UI.inline}
                                    >
                                        <span className={UI.valueText}>"{text}"</span>
                                        {idx < value.length - 1 && (
                                            <span className={UI.mySymbol}>,</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {isArray && <span className={UI.mySymbol}>]</span>}
                            {!isLastGroup && <span className={UI.mySymbol}>,</span>}
                        </div>
                    </div>
                );
            })}
            
            <p className={UI.mySymbol}>{'}'}</p>
        </div>
    );
}

export default About;