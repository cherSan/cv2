// commands/stats.ts
import { useTerminal } from '../terminal/terminal.context';

export const stats = {
  run: async () => {
    const term = useTerminal.getState();

    await term.echo('📊 Career Statistics');
    await term.echo('==================');
    await term.echo('• 15+ years in software engineering');
    await term.echo('• 10K+ TPS systems experience');
    await term.echo('• 50M+ users systems scale');
    await term.echo('• 8+ major companies worked with');
    await term.echo('• 20+ successful projects delivered');
    await term.echo('• 5+ programming languages proficiency');
    await term.echo('• 10+ frameworks and platforms expertise');
    await term.echo('');
    await term.echo('🌍 International Experience:');
    await term.echo('   Russia → Mexico → UK → Thailand');
  },
  description: [
    'Shows career statistics and achievements',
    'Usage: stats'
  ]
};
