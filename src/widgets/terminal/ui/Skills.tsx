import { SKILLS } from "@/shared/data/content";

const UI = {
    container: "font-mono leading-relaxed",
    mySymbol: "text-white",
    skillWrapper: "text-pink-400 ml-4",
    skillItem: "ml-4 text-sky-300"
} as const;

const Skills = () => {

    return (
        <div className={UI.container}>
            <p className={UI.mySymbol}>{'{'}</p>

            {SKILLS.map(({title, skills}, index) => (
                <div className={UI.skillWrapper} key={title}>
                    "{title}"
                    <span className={UI.mySymbol}>{": [ "}</span>
                    <ul>
                        {skills.map((skill, index) => (
                            <li className={UI.skillItem} key={skill}>
                                "{skill}"
                                {
                                    skills.length - 1 !== index && 
                                    <span className={UI.mySymbol}>,</span>
                                }
                            </li>
                        ))}
                    </ul>
                    
                    <span className={UI.mySymbol}>{" ]"}</span>
                    {
                        SKILLS.length - 1 !== index && 
                        <span className={UI.mySymbol}>,</span>
                    }
                </div>
            ))}
            <p className={UI.mySymbol}>{'}'}</p>
        </div>
    );
}

export default Skills;