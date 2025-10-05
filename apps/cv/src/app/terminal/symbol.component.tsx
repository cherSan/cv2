import { FC } from 'react';
import s from './symbol.module.scss';
import classNames from 'classnames';

type Props = {
  children: string | undefined;
  active?: boolean;
  type: 'danger' | 'warning' | undefined;
  isUser?: boolean;
}

export const Symbol: FC<Props> = ({
  isUser = false,
  children,
  active,
  type,
}) => {
  const className = classNames([
    s.symbol,
    { [s.active]: active },
    { [s.dangerous]: type === 'danger' },
    { [s.warning]: type === 'warning' },
    { [s.user]: isUser },
  ])

  return (
    <span className={className}>
      {children}
    </span>
  )
}
