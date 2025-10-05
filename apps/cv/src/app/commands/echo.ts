import { useTerminal } from '../terminal/terminal.context';

export const echo = {
  run: async (args?: string[], user?: string) => {
    const store = useTerminal.getState();

    if (!args) {
      await store.echo('system', `echo ERROR: No data`);
      return;
    }
    await store.echo(user, args?.join(' '));
  },
  description: [
    'Prints messages to the terminal.',
    'Usage: echo <message>',
    'Example: echo Hello World'
  ]
}
