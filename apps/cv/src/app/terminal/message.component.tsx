import { FC, useMemo } from 'react';
import { Symbol } from './symbol.component';
import styles from './message.module.scss';

type Props = {
  children: string;
  type?: 'danger' | 'warning';
  cursor?: number;
  user?: string;
};

export const Message: FC<Props> = ({ children, type, cursor, user }) => {
  const chars = useMemo(() => Array.from(children), [children]);
  const userPrefix = useMemo(() => (user ? `${user.padEnd(7, ' ')} > ` : ''), [user]);
  const prefixChars = useMemo(() => Array.from(userPrefix), [userPrefix]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      console.log('Text copied successfully');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <div className={styles.message} onClick={handleCopy}>
      {prefixChars.map((v, i) => (
        <Symbol key={`prefix-${i}`} type={type} isUser={user === 'guest'}>
          {v}
        </Symbol>
      ))}

      {chars.map((v, i) => (
        <Symbol
          key={`char-${i}`}
          type={type}
          isUser={user === 'guest'}
          active={cursor === i}
        >
          {v}
        </Symbol>
      ))}
    </div>
  );
};
