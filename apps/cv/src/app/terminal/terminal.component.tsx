import { FC, useCallback, useEffect } from 'react';
import { useReactive } from 'ahooks';

import styles from './terminal.module.scss';
import { Message } from './message.component';
import { useTerminal } from './terminal.context';

type State = {
  command: string;
  cursor: number;
  inputBlock: boolean;
}

export const TerminalComponent: FC = () => {
  const state = useReactive<State>({
    command: ' ',
    cursor: 0,
    inputBlock: false,
  });
  const {
    history,
    commander,
  } = useTerminal();

  const handleKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      if (state.inputBlock) return;
      e.preventDefault();

      const key = e.key;

      if (key.length === 1) {
        state.command =
          state.command.slice(0, state.cursor) + key + state.command.slice(state.cursor);
        state.cursor++;
      } else if (key === 'Backspace') {
        if (state.cursor > 0) {
          state.command =
            state.command.slice(0, state.cursor - 1) + state.command.slice(state.cursor);
          state.cursor--;
        }
      } else if (key === 'Delete') {
        if (state.cursor < state.command.length) {
          state.command =
            state.command.slice(0, state.cursor) + state.command.slice(state.cursor + 1);
        }
      } else if (key === 'ArrowLeft') {
        state.cursor = Math.max(0, state.cursor - 1);
      } else if (key === 'ArrowRight') {
        state.cursor = Math.min(state.command.length, state.cursor + 1);
      } else if (key === 'Enter') {
        state.inputBlock = true;
        const command = state.command.trim();
        await commander(`echo ${command}`, 'guest')

        state.command = ' ';
        state.cursor = 0;

        try {
          await commander(command);
        } catch (e) {
          await commander(`echo Error executing command: ${(e as Error).message}`);
        } finally {
          state.inputBlock = false;
        }
      }
    },
    [state, commander]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={styles.terminal}>
      {
        history.map((v, i) => (
          <Message
            key={i}
            user={v.user}
          >
            {v.message}
          </Message>
        ))
      }
      {
        state.inputBlock
          ? null
          : (
            <Message
              user={'guest'}
              cursor={state.cursor}
            >
              {state.command}
            </Message>
          )
      }
    </div>
  );
};
