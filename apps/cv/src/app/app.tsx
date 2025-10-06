import { TerminalComponent } from './terminal/terminal.component';
import { useMemo } from 'react';

export const Application = () => {
  const isMobile = useMemo(() => /Mobi|Android|iPhone/i.test(navigator.userAgent), []);

  if (isMobile) {
    return (
      <div className="mobile-warning">
        <p>
          This application is not optimized for mobile devices. Please use a desktop or laptop computer.
        </p>
      </div>
    )
  }
  return (
    <TerminalComponent />
  );
}
