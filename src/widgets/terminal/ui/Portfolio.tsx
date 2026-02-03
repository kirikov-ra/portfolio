import { PROJECTS } from "../../../shared/data/content";

import ProjectCard from "./ProjectCard";

const Portfolio = () => {
    return (
        <div className={"grid grid-cols-2 gap-4 w-full mt-4"}>
            {PROJECTS.map((project) => (
                <ProjectCard
                    key={project.id}
                    {...project}
                />          
            ))}
            
        </div>
    );
}

export default Portfolio;