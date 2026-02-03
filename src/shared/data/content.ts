export const ABOUT_RU = [
  { label: "name", value: ["Роман Кириков"] },
  { label: "alias", value: ["kirikov-ra"] },
  { label: "role", value: ["Frontend-разработчик"] },
  { label: "location", value: ["Удаленно (Россия, Казань)"] },
  { 
    label: "specialties", 
    value: [
      "Архитектура Feature-Sliced Design (FSD)",
      "Оптимизация производительности и Core Web Vitals",
      "Доступность (a11y / WCAG)",
      "Современные паттерны React",
    ] 
  },
  { 
    label: "focus", 
    value: [
      "Предсказуемая архитектура интерфейсов",
      "Типобезопасные кодовые базы React",
      "Код, который остаётся читаемым через месяцы"
    ] 
  },
  { label: "target", value: ["Продуктовые команды и стартапы"] }
];

export const ABOUT_EN = {
  "name": "Roman Kirikov",
  "alias": "kirikov-ra",
  "role": "Frontend Developer",
  "location": "Remote (Russia, Kazan)",
  "specialties": [
    "Feature-Sliced Design (FSD) architecture",
    "Performance optimization & Core Web Vitals",
    "Accessibility (a11y / WCAG)",
    "Modern React patterns",
  ],
   "focus": [
    "Predictable UI Architecture",
    "Type-safe React Codebases",
    "Code that remains readable after months"
  ],
  "target": "Product teams and startups"
} ;

export const SKILLS = [
  {
    title: "Core foundations",
    skills: [
      "React 19",
      "TypeScript 5.x",
      "JavaScript (ES6+)",
      "Git",
      "HTML5 / Semantic UI"
    ]
  },
  {
    title: "Data management",
    skills: [
      "TanStack Query v5",
      "Zod",
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
];

export const SOCIAL_LINKS = [
  { title: "github", url: "github.com/kirikov-ra" },
  { title: "telegram", url: "telegram.com/kirikov-ra" },
  { title: "leetcode", url: "leetcode.com/kirikov-ra" },
];

export const PROJECTS = [
  {
    id: 1, 
    hashtag: "Fullstack", 
    title: "Food store", 
    description: "E-commerce платформа на React 19. Реализована корзина, фильтрация товаров через URL и интеграция с Supabase для управления остатками."
  },
  {
    id: 2, 
    hashtag: "Frontend", 
    title: "Task Tracker", 
    description: "Приложение для управления задачами с Realtime-обновлениями. Использовал Zod для валидации форм и оптимистичные обновления (Optimistic UI)."
  },
  {
    id: 3, 
    hashtag: "Frontend",
    title: "Crypto Dashboard",
    description: "Панель мониторинга крипто-активов. Сложные графики (Recharts), кастомные хуки для работы с API и продвинутая анимация на Framer Motion."
  }
];