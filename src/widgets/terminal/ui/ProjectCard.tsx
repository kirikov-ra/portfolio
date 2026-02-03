import GlareHover from "@/shared/ui/GlareHover";

type ProjectCardProps = {
    id: number;
    hashtag: string;
    title: string;
    description: string;
}

const UI = {
    projectItem: "shadow-(--button-shadow) cursor-pointer bg-gray-200 rounded-[10px] p-3 text-start",
    hashtag: "font-rubik text-yellow-400 text-xs bg-yellow-600/20 px-4 py-1 w-fit rounded-md border border-yellow-400/30",
    title: "text-lg font-rubik text-white font-medium mt-2",
    descriptionText: "text-sm font-rubik text-white/50 font-light mt-2"
} as const;

const ProjectCard = ({hashtag, title, description, id}: ProjectCardProps) => {
    return (
            <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.2}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
            >
                <button 
                    id={`project-card-${id}`}
                    name={`view-project-${title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className={UI.projectItem}
                >
                    <div className={UI.hashtag}>{hashtag}</div>
                    <div className={UI.title}>{title}</div>
                    <p className={UI.descriptionText}>{description}</p>
                </button>
            </GlareHover>
    );
};

export default ProjectCard;