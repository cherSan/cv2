// commands/projects.ts
import { useTerminal } from '../terminal/terminal.context';

export const projects = {
  run: async (args?: string[]) => {
    const term = useTerminal.getState();

    const projectList = {
      millennium: {
        name: 'Main Corporate System Application',
        client: 'Millennium',
        period: '2022-2024',
        description: 'Cross-platform corporate system covering web, desktop, and mobile solutions',
        role: 'Chief Software Engineer / Senior Programmer',
        responsibilities: [
          'Microfrontend architecture with Nx and Module Federation',
          'Cross-platform development: Angular, Electron, React Native',
          'Backend services with NestJS and GraphQL',
          'Glue42 integration for financial applications',
          'Team mentorship and technical leadership'
        ],
        tech: ['Angular', 'React Native', 'Electron', 'NestJS', 'Nx', 'GraphQL']
      },
      blockchain: {
        name: 'Blockchain Digital Assets Platform',
        client: 'IBM',
        period: '2018-2019',
        description: 'Two blockchain projects for secure personal data and digital assets management',
        role: 'Software Developer',
        responsibilities: [
          'Frontend architecture design and implementation',
          'UX design and validation',
          'GraphQL integration frontend/backend',
          'Performance monitoring and analytics',
          'Junior developers mentoring'
        ],
        tech: ['Angular', 'TypeScript', 'GraphQL', 'Java', 'Go', 'Blockchain']
      },
      trading: {
        name: 'Cross-Platform Trading Application',
        client: 'Alfa-Bank',
        period: '2017-2018',
        description: 'Bank account management and trading activity monitoring',
        role: 'Senior Software Engineer',
        responsibilities: [
          'Frontend for Web, iOS WebKit, Android platforms',
          'Scalable UI architecture design',
          'Backend integration via customer APIs',
          'CI/CD and build configuration'
        ],
        tech: ['React', 'Redux', 'TypeScript', 'Spring Boot', 'Java']
      }
    };

    if (!args?.length) {
      await term.echo('🚀 Key Projects');
      await term.echo('==============');
      Object.entries(projectList).forEach(([key, project]) => {
        term.echo(`• ${project.name} (${project.client})`);
        term.echo(`  Run: projects ${key} for details`);
      });
      return;
    }

    const key = args[0];
    const project = projectList[key as keyof typeof projectList];

    if (!project) {
      await term.echo(`❌ Project not found. Use 'projects' to see list.`);
      return;
    }

    await term.echo(`📋 ${project.name}`);
    await term.echo(`🏢 ${project.client}`);
    await term.echo(`📅 ${project.period}`);
    await term.echo(`👨‍💻 ${project.role}`);
    await term.echo('');
    await term.echo(`📝 ${project.description}`);
    await term.echo('');
    await term.echo('🎯 Responsibilities:');
    project.responsibilities.forEach(resp => {
      term.echo(`   • ${resp}`);
    });
    await term.echo('');
    await term.echo('🛠️ Technologies:');
    await term.echo(`   ${project.tech.join(', ')}`);
  },
  description: [
    'Shows detailed project information',
    'Usage: projects [project_key]',
    'Available: millennium, blockchain, trading',
    'Example: projects millennium'
  ]
};
