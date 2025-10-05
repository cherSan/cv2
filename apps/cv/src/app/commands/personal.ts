// commands/personal.ts
import { useTerminal } from '../terminal/terminal.context';

export const personal = {
  about: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('👨‍💻 Aleksandr Chernushevich');
      await term.echo('Senior Software Engineer @ Agoda | ex-Luxoft, IBM');
      await term.echo('📍 Bangkok, Thailand');
      await term.echo('');
      await term.echo('Engineering leader with 15+ years of experience delivering scalable, high-performance solutions for finance and tech industries. Specialized in designing resilient architectures, leading cross-functional teams, and aligning technology with business goals.');
    },
    description: [
      'Shows professional summary and contact information',
      'Usage: about'
    ]
  },

  contact: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('📞 +66 93 179 6173');
      await term.echo('📧 chernushevich.alexander@gmail.com');
      await term.echo('🔗 linkedin.com/in/chersan0ff');
      await term.echo('🐙 github.com/cherSan');
      await term.echo('🌎 Thailand');
    },
    description: [
      'Shows contact information',
      'Usage: contact'
    ]
  },

  skills: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('🚀 Top Skills:');
      await term.echo('   • UX Research');
      await term.echo('   • A/B Testing');
      await term.echo('   • Systems Design');
      await term.echo('');
      await term.echo('💻 Technologies:');
      await term.echo('   • Frontend: React, Angular, TypeScript, Electron, React Native');
      await term.echo('   • Backend: Scala, Kotlin, NestJS, Node.js, GraphQL');
      await term.echo('   • Tools: Nx, Module Federation, Docker, Kubernetes, GitLab CI/CD');
      await term.echo('');
      await term.echo('🗣️ Languages:');
      await term.echo('   • Russian (Native)');
      await term.echo('   • English (Professional)');
      await term.echo('   • German (Elementary)');
      await term.echo('   • Spanish (Elementary)');
    },
    description: [
      'Shows professional skills and technologies',
      'Usage: skills'
    ]
  }
};
