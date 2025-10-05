import { CommandHandler } from '../terminal/terminal.context';
import { fetch } from './fetch';
import { help } from './help';
import { echo } from './echo';

export type Command = {
  run: CommandHandler;
  description?: string[];
};

export const commandsImpl: Record<string, Command> = {
  echo,
  help,
  fetch
};
