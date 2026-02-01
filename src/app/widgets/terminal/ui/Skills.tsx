const UI = {
    container: "font-mono leading-relaxed mb-4",
    title: "text-gray-100",
    mySymbol: "text-white",
    skillWrapper: "text-pink-400 ml-4",
    skillItem: "ml-4 text-sky-300"
} as const;

const SKILLS = [
  {
    title: "Core foundations",
    skills: [
      "React 19 (Compiler, Actions, Suspense)",
      "TypeScript 5.x (Strict)",
      "JavaScript (ES6+)",
      "Git (Conventional Commits)",
      "HTML5 / Semantic UI"
    ]
  },
  {
    title: "Data management",
    skills: [
      "TanStack Query v5",
      "Zod (Schema Validation)",
      "Redux Toolkit",
      "React Hook Form",
      "Axios"
    ]
  },
  {
    title: "Styling and UI",
    skills: [
      "Tailwind CSS v4",
      "shadcn/ui",
      "Framer Motion",
      "clsx / tailwind-merge"
    ]
  },
   {
    title: "Ecosystem and tools",
    skills: [
      "Vite",
      "Turborepo",
      "ESLint / Prettier",
      "GitHub Actions (CI/CD)"
    ]
  },
  {
    title: "Testing ecosystem",
    skills: [
      "Vitest"
    ]
  },
  {
    title: "Architecture and practices",
    skills: [
      "Feature-Sliced Design (FSD)",
      "Architecture Scalability",
      "Accessibility (a11y / WCAG)",
      "Performance & SEO Optimization",
      "Responsive & Mobile-First Design"
    ]
  }
] as const;

const Skills = () => {

    return (
        <div className={UI.container}>
            <p className={UI.title}>// Skills</p>
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