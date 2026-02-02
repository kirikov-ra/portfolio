export type Language = 'Ru' | 'En';

export const VALID_COMMANDS = ['portfolio', 'skills', 'about', 'links', 'help'] as const;
export type Commands = typeof VALID_COMMANDS[number];

export type LogEntry = {
    id: string;
    command: Commands | string;
};