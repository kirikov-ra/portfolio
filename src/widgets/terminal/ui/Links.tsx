import { SOCIAL_LINKS } from "@/shared/data/content";

const UI = {
    container: "font-mono leading-relaxed",
    title: "text-gray-100",
    mySymbol: "text-white",
    linkName: "text-sky-300 ml-4",
    link: "text-green-400 hover:text-green-300 hover:underline transition-colors cursor-pointer"
} as const;

const Links = () => {

    return (
        <div className={UI.container}>
            <p className={UI.title}>// Social Links</p>
            <p className={UI.mySymbol}>{'{'}</p>
            {SOCIAL_LINKS.map(({title, url}, index) => (
                <p className={UI.linkName} key={title}>
                    "{title}"
                    <span className={UI.mySymbol}>: </span>
                    <a 
                        href={`https://${url}`}
                        className={UI.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >"{url}"</a>
                    {
                        SOCIAL_LINKS.length - 1 !== index && 
                        <span className={UI.mySymbol}>,</span>
                    }
                </p>
            ))}
            <p className={UI.mySymbol}>{'}'}</p>
        </div>
    );
}

export default Links;