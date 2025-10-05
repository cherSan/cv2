import { FC } from 'react';
import s from './symbol.module.scss';
import classNames from 'classnames';

type Props = {
  children: string | undefined;
  active?: boolean;
  type: 'danger' | 'warning' | undefined;
}

export const Symbol: FC<Props> = ({
  children,
  active,
  type,
}) => {
  const className = classNames([
    s.symbol,
    { [s.active]: active },
    { [s.dangerous]: type === 'danger' },
    { [s.warning]: type === 'warning' }
  ])

  return (
    <div className={className}>
      {children}
    </div>
  )
}
