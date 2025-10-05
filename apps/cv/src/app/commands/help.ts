import { useTerminal } from '../terminal/terminal.context';
import { commandsImpl } from './index';

export const help = {
  run: async (user?: string, args?: string[]) => {
    const store = useTerminal.getState();

    if (!args?.length) {
      await store.commander('echo Usage: help <command?>', 'system');
      await store.commander('echo Example: help echo')
      await store.commander('echo Available commands:');
      for (const cmd in commandsImpl) {
        await store.commander(`echo - ${cmd}`);
      }
      return;
    }

    const cmd = args[0];
    const impl = commandsImpl[cmd];

    if (!impl) {
      await store.commander(`echo ❌ Command not found: ${cmd}`, 'system');
      return;
    }

    const desc = impl.description || ['No description'];
    desc.forEach(line => {
      store.commander(`echo ${line}`, 'system');
    });
  },
  description: [
  ]
};
