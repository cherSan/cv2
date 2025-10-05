import { FC, useCallback, useEffect, useRef } from 'react';
import { useReactive } from 'ahooks';
import styles from './terminal.module.scss';
import { Message } from './message.component';
import { useTerminal } from './terminal.context';

type State = {
  command: string;
  cursor: number;
  inputBlock: boolean;
  historyIndex: number | null; // индекс для навигации ↑/↓
};

export const TerminalComponent: FC = () => {
  const initialized = useRef(false);


  const state = useReactive<State>({
    command: ' ',
    cursor: 0,
    inputBlock: false,
    historyIndex: null,
  });

  const { history, commander } = useTerminal();

  const handleKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      if (state.inputBlock) return;

      // Разрешаем стандартные сочетания клавиш
      if (e.ctrlKey || e.metaKey) return;

      const key = e.key;

      // История команд (из history, только user = 'guest')
      const userHistory = history
        .filter((h) => h.user === 'guest' && !h.message.startsWith('Error'))
        .map((h) => h.message.trim())
        .filter(Boolean);

      if (key === 'ArrowUp') {
        e.preventDefault();
        if (userHistory.length === 0) return;

        if (state.historyIndex === null) {
          state.historyIndex = userHistory.length - 1;
        } else if (state.historyIndex > 0) {
          state.historyIndex--;
        }

        state.command = userHistory[state.historyIndex] ?? '';
        state.cursor = state.command.length;
        return;
      }

      if (key === 'ArrowDown') {
        e.preventDefault();
        if (state.historyIndex === null) return;

        if (state.historyIndex < userHistory.length - 1) {
          state.historyIndex++;
          state.command = userHistory[state.historyIndex] ?? '';
        } else {
          state.historyIndex = null;
          state.command = ' ';
        }
        state.cursor = state.command.length;
        return;
      }

      e.preventDefault();

      if (key.length === 1) {
        state.command =
          state.command.slice(0, state.cursor) + key + state.command.slice(state.cursor);
        state.cursor++;
        state.historyIndex = null;
      } else if (key === 'Backspace') {
        if (state.cursor > 0) {
          state.command =
            state.command.slice(0, state.cursor - 1) + state.command.slice(state.cursor);
          state.cursor--;
        }
        state.historyIndex = null;
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

        if (command) {
          await commander(`echo ${command}`, 'guest');
        }

        state.command = ' ';
        state.cursor = 0;
        state.historyIndex = null;

        try {
          if (command) await commander(command);
        } catch (e) {
          await commander(`echo Error: ${(e as Error).message}`);
        } finally {
          state.inputBlock = false;
        }
      }
    },
    [state, commander, history]
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent) => {
      if (state.inputBlock) return;

      e.preventDefault();
      const pastedText = e.clipboardData?.getData('text') ?? '';
      if (!pastedText) return;

      state.command =
        state.command.slice(0, state.cursor) +
        pastedText +
        state.command.slice(state.cursor);
      state.cursor += pastedText.length;
      state.historyIndex = null;
    },
    [state]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('paste', handlePaste);
    };
  }, [handleKeyDown, handlePaste]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (async () => {
      await commander('echo ===============================', 'system');
      await commander('echo Aleksandr Chernushevich', 'system');
      await commander('echo Developer', 'system');
      await commander('echo Welcome to my personal terminal!', 'system');
      await commander('echo Type "help" to see available commands.', 'system');
      await commander('echo ===============================', 'system');
    })();
  }, [commander]);

  return (
    <div className={styles.terminal}>
      {history.map((v, i) => (
        <Message key={i} user={v.user}>
          {v.message}
        </Message>
      ))}
      {!state.inputBlock && (
        <Message user="guest" cursor={state.cursor}>
          {state.command}
        </Message>
      )}
    </div>
  );
};
