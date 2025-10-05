import { useTerminal } from '../terminal/terminal.context';

export const help = {
  run: async (args?: string[]) => {
    const store = useTerminal.getState();
    const commands = store._commands;

    // Если нет аргументов — выводим список команд
    if (!args?.length) {
      await store.echo(`Usage: help [command]`);
      await store.echo(`Example: help echo`);
      await store.echo(`Available commands: [${Object.keys(commands).join(' | ')}]`);
      return;
    }

    // Если указан конкретный команд
    const cmd = args[0];
    const impl = commands[cmd];

    if (!impl) {
      await store.echo(`❌ Command not found: ${cmd}`);
      return;
    }

    const desc = impl.description || ['❌ No description available'];
    for (const line of desc) {
      await store.echo(line);
    }
  },

  description: [
    'Shows help for commands.',
    'Usage: help [command]',
    'Example: help echo',
  ],
};
