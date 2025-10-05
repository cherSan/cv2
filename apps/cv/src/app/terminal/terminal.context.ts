import { create } from 'zustand/react';
import { commandsImpl, Command } from '../commands';

export type Message = {
  user?: string;
  message: string;
  date: Date;
};

export type CommandHandler = (user?: string, args?: string[]) => Promise<void> | void;

type Terminal = {
  history: Message[];
  commander: (input: string, user?: string) => Promise<void>;
  echo: (user?: string, message?: string) => Promise<void>;
  _commands: Record<string, Command>;
  registerCommands: (cmds: Record<string, Command>) => void;
};

export const useTerminal = create<Terminal>((set, get) => ({
  history: [],
  _commands: {},
  echo: async (user, message = '') => {
    set(state => ({
      history: [
        ...state.history,
        {
          user,
          message: message,
          date: new Date(),
        }
      ],
    }));
  },

  commander: async (input, user) => {
    input = input.trim();
    if (!input) return;

    const store = get();
    const commands = store._commands;
    if (!commands) {
      await store.echo('system', 'Error: No commands registered');
      return;
    }

    const commandList = input.split('&').map(s => s.trim());

    for (const cmdLine of commandList) {
      const [cmd, ...args] = cmdLine.split(/\s+/);

      if (['history', 'commander', 'registerCommands'].includes(cmd)) {
        await store.echo('system', `Error: Command not allowed: ${cmd}`);
        continue;
      }

      const impl = commands[cmd];
      if (impl?.run) {
        try {
          await impl.run(user, args);
        } catch (err) {
          await store.echo('system', `Error executing "${cmd}": ${(err as Error).message}`);
        }
      } else {
        await store.echo('system', `Error: Command not found: ${cmd}`);
      }
    }
  },

  registerCommands: (cmds) => {
    set(() => ({
      _commands: cmds,
    }));
  },
}));

// Инициализация команд
useTerminal.getState().registerCommands(commandsImpl);
