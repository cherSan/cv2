// commands/experience.ts
import { useTerminal } from '../terminal/terminal.context';

export const experience = {
  run: async (args?: string[]) => {
    const term = useTerminal.getState();

    const experiences = {
      agoda: {
        company: 'Agoda',
        position: 'Senior Software Engineer',
        period: 'Sep 2024 - Present (1 year 2 months)',
        domain: 'Travel Tech, E-commerce',
        achievements: [
          'Designed scalable, fault-tolerant systems for millions of daily users',
          'Built high-performance UIs with React, focusing on speed and accessibility',
          'Developed backend services with Scala and Kotlin on JVM stack',
          'Participated in A/B testing and data-driven decision making',
          'Improved CI/CD pipelines and deployment automation'
        ],
        tech: ['React', 'TypeScript', 'Scala', 'Kotlin', 'GraphQL', 'Docker', 'Kubernetes']
      },
      luxoft_uk: {
        company: 'Luxoft UK',
        position: 'Chief Software Engineer',
        period: 'Sep 2023 - May 2024 (9 months)',
        domain: 'Finance IT - Millennium',
        achievements: [
          'Designed microfrontend architecture using Nx and Module Federation',
          'Developed cross-platform apps: Angular, Electron, React Native',
          'Built scalable backend with NestJS, Node.js, GraphQL',
          'Integrated Glue42 for financial applications communication',
          'Mentored junior developers and conducted code reviews'
        ],
        tech: ['Angular', 'Electron', 'NestJS', 'Nx', 'TypeScript', 'Glue42']
      },
      // ... другие компании в том же формате
    };

    if (!args?.length) {
      await term.echo('💼 Work Experience');
      await term.echo('================');
      Object.entries(experiences).forEach(([key, exp]) => {
        term.echo(`• ${exp.company} - ${exp.position} (${exp.period})`);
        term.echo(`  Run: experience ${key} for details`);
      });
      return;
    }

    const key = args[0];
    const exp = experiences[key as keyof typeof experiences];

    if (!exp) {
      await term.echo(`❌ Experience not found. Use 'experience' to see list.`);
      return;
    }

    await term.echo(`🏢 ${exp.company}`);
    await term.echo(`📝 ${exp.position}`);
    await term.echo(`📅 ${exp.period}`);
    await term.echo(`🌐 ${exp.domain}`);
    await term.echo('');
    await term.echo('🎯 Key Achievements:');
    exp.achievements.forEach(achievement => {
      term.echo(`   • ${achievement}`);
    });
    await term.echo('');
    await term.echo('🛠️ Technologies:');
    await term.echo(`   ${exp.tech.join(', ')}`);
  },
  description: [
    'Shows work experience details',
    'Usage: experience [company]',
    'Companies: agoda, luxoft_uk, luxoft_mexico, ibm, alfa_bank, etc.',
    'Example: experience agoda'
  ]
};
