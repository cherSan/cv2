import { useTerminal } from '../terminal/terminal.context';

export const help = {
  run: async (args?: string[]) => {
    const store = useTerminal.getState();
    const commands = store._commands;

    // Если нет аргументов — выводим красивый список команд по группам
    if (!args?.length) {
      await store.echo('┌─────────────────────────────────────────────────────────────┐');
      await store.echo('│                       🎯 HELP MENU                           │');
      await store.echo('└─────────────────────────────────────────────────────────────┘');
      await store.echo('');

      // Группировка команд
      const commandGroups = {
        '👤 PERSONAL': ['about', 'contact', 'skills', 'certifications', 'languages'],
        '💼 PROFESSIONAL': ['experience', 'projects', 'education', 'stats'],
        '🎮 GAMES & FUN': ['guess', 'quiz', 'joke', 'quote', 'doge', 'fortune', 'matrix', 'ascii'],
        '🛠️ DEVELOPMENT': ['timestamp', 'base64', 'uuid', 'lorem'],
        '🌐 INTERNET': ['weather', 'fetch'],
        '⚙️ SYSTEM': ['help', 'echo', 'clear', 'history', 'theme', 'easteregg']
      };

      for (const [group, groupCommands] of Object.entries(commandGroups)) {
        const availableCommands = groupCommands.filter(cmd => commands[cmd]);

        if (availableCommands.length > 0) {
          await store.echo(`${group}:`);
          await store.echo(`  ${availableCommands.join(' | ')}`);
          await store.echo('');
        }
      }

      await store.echo('💡 Usage: help <command> for detailed information');
      await store.echo('📖 Example: help experience');
      return;
    }

    const cmd = args[0];
    const impl = commands[cmd];

    if (!impl) {
      await store.echo(`❌ Command not found: ${cmd}`);
      await store.echo('💡 Use "help" to see all available commands');
      return;
    }

    await store.echo('┌─────────────────────────────────────────────────────────────┐');
    await store.echo(`│               📖 ${cmd.toUpperCase().padEnd(43)} │`);
    await store.echo('└─────────────────────────────────────────────────────────────┘');
    await store.echo('');

    const desc = impl.description || ['❌ No description available'];
    for (const line of desc) {
      await store.echo(`  ${line}`);
    }

    await store.echo('');
    await store.echo('💡 Type the command name to execute it');
  },

  description: [
    'Shows detailed help information for commands',
    'Usage: help [command]',
    'Example: help experience',
    'Run without arguments to see all available commands'
  ],
};
