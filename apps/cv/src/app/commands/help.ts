import { useTerminal } from '../terminal/terminal.context';
import { commandsImpl } from './index';

export const help = {
  run: async (args?: string[]) => {
    const store = useTerminal.getState();

    if (!args?.length) {
      await store.commander('echo Usage: help [command]');
      await store.commander('echo Example: help echo')
      await store.commander(`echo Available commands: help [${Object.keys(commandsImpl).join(' | ')}]`);
      return;
    }

    const cmd = args[0];
    const impl = commandsImpl[cmd];

    if (!impl) {
      await store.commander(`echo ❌ Command not found: ${cmd}`);
      return;
    }

    const desc = impl.description || ['No description'];
    desc.forEach((line, i) => {
      store.commander(`echo ${line}`);
    });
  },
  description: [
  ]
};
