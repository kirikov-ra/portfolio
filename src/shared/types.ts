export type Language = 'Ru' | 'En';

export type Commands = 'Portfolio' | 'Skills'  | 'About'  | 'Links';

export type LogEntry = {
    id: string;
    command: Commands | string;
};