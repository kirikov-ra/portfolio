export type Language = 'Ru' | 'En';

export const VALID_COMMANDS = ['projects', 'skills', 'about', 'links', 'help'] as const;
export type Commands = typeof VALID_COMMANDS[number];

export type LogEntry = {
    id: string;
    command: string;
};

export type HelpCommand = {
    command: string;
    description: string;
};