import { FC } from 'react';
import { Symbol } from './symbol.component';
import styles from './message.module.scss';

type Props = {
  children: string;
  type?: 'danger' | 'warning' | undefined;
  cursor?: number;
  user?: string;
}

export const Message: FC<Props> = ({
  children,
  type,
  cursor,
  user,
}) => {
  return (
    <div className={styles.message}>
      {
        user
          ? (
            `${user.padEnd(7, ' ')} > `.split('').map((v, i) => (
              <Symbol
                key={i}
                type={type}
              >
                {v}
              </Symbol>
            ))
          )
          : null
      }
      {
        children.split('').map((v, i) => (
          <Symbol
            active={cursor === i}
            key={i}
            type={type}
          >
            {v}
          </Symbol>
        ))
      }
    </div>
  );
}
