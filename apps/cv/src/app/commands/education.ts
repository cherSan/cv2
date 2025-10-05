// commands/education.ts
import { useTerminal } from '../terminal/terminal.context';

export const education = {
  run: async () => {
    const term = useTerminal.getState();

    await term.echo('🎓 Education');
    await term.echo('===========');
    await term.echo('• ITMO University');
    await term.echo('  Master of Computer Applications - MCA (2009-2011)');
    await term.echo('  Bachelor\'s degree, Natural Sciences (2004-2009)');
    await term.echo('');

    await term.echo('📜 Certifications');
    await term.echo('================');
    await term.echo('• IBM Cloud Essentials');
    await term.echo('• IBM Agile Explorer');
    await term.echo('• Enterprise Design Thinking Co-Creator');
    await term.echo('• Enterprise Design Thinking Practitioner');
  },
  description: [
    'Shows education background and certifications',
    'Usage: education'
  ]
};
