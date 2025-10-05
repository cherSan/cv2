import { create } from 'zustand/react';
import { commandsImpl, Command } from '../commands';

export type Message = {
  user?: string;
  message: string;
  date: Date;
};

export type CommandHandler = (args?: string[], user?: string) => Promise<void> | void;

type Terminal = {
  history: Message[];
  commander: (input: string, user?: string) => Promise<void>;
  echo: (message?: string, user?: string) => Promise<void>;
  _commands: Record<string, Command>;
  registerCommands: (cmds: Record<string, Command>) => void;
};

const splitCommands = (input: string): string[] => {
  const commands: string[] = [];
  let current = '';
  let inQuote: string | null = null;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '"' || char === "'") {
      if (!inQuote) {
        inQuote = char;
      } else if (inQuote === char) {
        inQuote = null;
      } else {
        current += char; // внутри другой кавычки
      }
      continue; // кавычку не добавляем
    }

    if (char === '&' && !inQuote) {
      if (current.trim()) commands.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  if (current.trim()) commands.push(current.trim());
  return commands;
};


export const useTerminal = create<Terminal>((set, get) => ({
  history: [],
  _commands: {},

  echo: async (message = '', user?: string) => {
    set((state) => ({
      history: [
        ...state.history,
        {
          user,
          message,
          date: new Date(),
        },
      ],
    }));
  },

  commander: async (input: string, user?: string) => {
    input = input.trim();
    if (!input) return;

    const store = get();
    const commands = store._commands;
    if (!commands) {
      await store.echo('Error: No commands registered', 'system',);
      return;
    }

    const commandList = splitCommands(input);

    for (const cmdLine of commandList) {
      const trimmed = cmdLine.trim();
      if (!trimmed) continue;

      // Если команда echo — выводим текст напрямую и НЕ вызываем commander
      if (trimmed.startsWith('echo ')) {
        const text = trimmed.slice(5).trim().replace(/^["']|["']$/g, '');
        await store.echo(text);
        continue;
      }

      const [cmd, ...args] = trimmed.split(/\s+/);
      if (!cmd) continue;

      const impl = commands[cmd];
      if (impl?.run) {
        try {
          await impl.run(args, user);
        } catch (err) {
          await store.echo(`Error executing "${cmd}": ${(err as Error).message}`, 'system');
        }
      } else {
        await store.echo(`Command not found: ${cmd}`, 'system');
      }
    }
  },

  registerCommands: (cmds: Record<string, Command>) => {
    set(() => ({
      _commands: cmds,
    }));
  },
}));

// Инициализация команд
useTerminal.getState().registerCommands(commandsImpl);
