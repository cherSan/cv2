import { create } from 'zustand/react';

export type Message = {
  user?: string;
  message: string;
  date: Date;
};

type Terminal = {
  history: Message[];
  echo: (user: string, message: string[]) => void;
  help: (user: string) => Promise<void>;
  admin: (user: string) => Promise<void>;
  commander: (input: string, user?: string) => Promise<void>;
};

export const useTerminal = create<Terminal>((set, get) => ({
  history: [],
  echo: (user, message) => set(state => ({
    history: [
      ...state.history,
      {
        message: message.join(' '),
        user,
        date: new Date(),
      }
    ]
  })),
  admin: async () => {
    const store = get();
    await store.commander('echo ALEKS')
  },
  help: async (user) => {
    const store = get();

    const allKeys = Object.keys(store);

    const commands = allKeys.filter(
      key =>
        typeof (store as any)[key] === 'function' &&
        !['commander', 'history'].includes(key)
    );

    await store.commander('echo Available commands:', 'system');
    for (const cmd of commands) {
      await store.commander(`echo - ${cmd}`);
    }
  },
  commander: async (input: string, user) => {
    input = input.trim();
    if (!input) return;
    const store = get();
    const commandsList = input.split('&').map(s => s.trim());
    for (const cmdLine of commandsList) {
      const [cmd, ...args] = cmdLine.split(/\s+/);
      if (cmd === 'history' || cmd === 'commander') {
        await store.commander(`echo Error: Command not found: ${cmd}`)
      } else {
        const impl = store[cmd] as any;
        if (impl) {
          await impl?.(user, args);
        } else {
          await store.commander(`echo Error: Command not found: ${cmd}`)
        }
      }
    }
  },
}))
