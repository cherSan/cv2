import { CommandHandler } from '../terminal/terminal.context';
import { fetch } from './fetch';
import { help } from './help';
import { echo } from './echo';
import { weather } from './weather';
import { time } from './time';
import { personal } from './personal';
import { experience } from './experiance';
import { projects } from './projects';
import { education } from './education';
import { stats } from './stats';
import { games } from './gams';
import { internet } from './internet';
import { devtools } from './devtools';

export type Command = {
  run: CommandHandler;
  description?: string[];
};

export const commandsImpl: Record<string, Command> = {
  echo,
  help,
  fetch,
  weather,
  time,
  ...personal,
  experience,
  projects,
  education,
  stats,
  ...games,
  ...internet,
  ...devtools
};
