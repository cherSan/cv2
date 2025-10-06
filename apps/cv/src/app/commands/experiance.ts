// commands/experience.ts
import { useTerminal } from '../terminal/terminal.context';

export const experience = {
  run: async (args?: string[]) => {
    const term = useTerminal.getState();

    const experiences = {
      agoda: {
        company: 'Agoda',
        position: 'Senior Software Engineer',
        period: 'Sep 2024 - Present',
        domain: 'Travel Tech, E-commerce',
        achievements: [
          'Designed and developed scalable, fault-tolerant systems and microservices for millions of daily users',
          'Built and optimized high-performance user interfaces with React, focusing on speed, usability, and accessibility',
          'Developed backend services with Scala and Kotlin on the JVM stack, emphasizing clean architecture and performance',
          'Participated in A/B testing, product experiments, and data-driven decision making to improve customer experience',
          'Collaborated with DevOps and platform teams to improve CI/CD pipelines, observability, and deployment automation',
          'Created internal tools and developer platforms to boost team productivity and ensure consistent engineering practices',
          'Provided technical leadership, mentored engineers, and contributed to strategic architectural planning',
          'Drove improvements in developer experience through process automation, local dev tooling, and shared libraries'
        ],
        tech: ['React', 'TypeScript', 'Scala', 'Kotlin', 'JVM', 'GraphQL', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Terraform', 'Prometheus/Grafana', 'A/B Testing Frameworks']
      },

      luxoft_uk: {
        company: 'Luxoft UK',
        position: 'Chief Software Engineer',
        period: 'Sep 2023 - May 2024 (9 months)',
        domain: 'Finance IT - Millennium',
        achievements: [
          'Designed and implemented microfrontend architecture using Nx and Module Federation',
          'Developed cross-platform applications: Angular, Electron (desktop), React Native (mobile)',
          'Built scalable backend services with NestJS, Node.js, and GraphQL',
          'Integrated Glue42 for cross-application communication in complex financial environments',
          'Collaborated with DevOps to support CI/CD pipelines and environment configuration',
          'Participated in all Scrum ceremonies: sprint planning, grooming, stand-ups, retrospectives',
          'Worked closely with the customer to clarify requirements, plan deliverables, and organize sprint content',
          'Maintained and refined the product backlog using Jira',
          'Mentored junior developers, conducted code reviews, and shared best practices across the team'
        ],
        tech: ['Angular', 'Electron', 'NestJS', 'Node.js', 'Nx', 'TypeScript', 'Glue42', 'Atlassian Jira', 'Git', 'Scrum', 'CI/CD', 'Microfrontends']
      },

      luxoft_mexico: {
        company: 'Luxoft Mexico',
        position: 'Senior Programmer',
        period: 'Sep 2022 - Sep 2023 (1 year 1 month)',
        domain: 'Finance IT - Millennium',
        achievements: [
          'Designed and implemented microfrontend architecture using Nx and Module Federation',
          'Developed cross-platform applications: Angular & React (web), Electron (desktop), React Native (mobile)',
          'Built scalable backend services with NestJS, Node.js, and GraphQL',
          'Integrated Glue42 for cross-application communication in complex financial environments',
          'Collaborated with DevOps to support CI/CD pipelines and environment configuration',
          'Participated in all Scrum ceremonies: sprint planning, grooming, stand-ups, retrospectives',
          'Worked closely with the customer to clarify requirements, plan deliverables, and organize sprint content',
          'Maintained and refined the product backlog using Jira',
          'Mentored junior developers, conducted code reviews, and shared best practices across the team'
        ],
        tech: ['Angular', 'React', 'React Native', 'Electron', 'NestJS', 'Node.js', 'GraphQL', 'Nx', 'TypeScript', 'Glue42', 'Atlassian Jira', 'Git', 'Scrum', 'CI/CD', 'Microfrontends']
      },

      luxoft_developer: {
        company: 'Luxoft',
        position: 'Software Developer',
        period: 'Sep 2019 - Sep 2022 (3 years 1 month)',
        domain: 'Finance IT',
        achievements: [
          'Developed mobile, desktop and web applications for traders based on React technologies',
          'Handled customer communication and requirements gathering',
          'Managed code organization and architecture design',
          'Performed DevOps tasks and deployment operations',
          'Led development processes and technical decision making'
        ],
        tech: ['Atlassian Jira', 'GraphQL', 'Node.js', 'React', 'React Native', 'TypeScript']
      },

      ibm: {
        company: 'IBM',
        position: 'Software Developer',
        period: 'Sep 2018 - Sep 2019 (1 year 1 month)',
        domain: 'Consulting & Financial Services (Blockchain)',
        achievements: [
          'Frontend architecture design and implementation for blockchain projects',
          'UX design and validation for decentralized applications',
          'GraphQL integration on both frontend and backend',
          'Frontend analytics and performance monitoring',
          'Communication with customers and stakeholders',
          'Participation in project solution design and key technical decisions',
          'Active frontend development and feature implementation',
          'Mentoring of junior developers and code review'
        ],
        tech: ['Angular', 'TypeScript', 'GraphQL', 'Java', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'Git', 'GitLab', 'Blockchain']
      },

      alfa_bank: {
        company: 'Alfa-Bank',
        position: 'Senior Software Engineer',
        period: 'Sep 2017 - Sep 2018 (1 year 1 month)',
        domain: 'Financial Technology (FinTech)',
        achievements: [
          'Frontend development for Web, iOS (WebKit), and Android platforms',
          'Designing and maintaining scalable UI architecture',
          'Integration with backend services via customer APIs',
          'Development of reusable UI components',
          'Build configuration and CI/CD support',
          'Collaboration with customers and internal stakeholders',
          'API analysis and integration planning',
          'Issue investigation and task estimation',
          'Sprint planning and demo presentations',
          'Participation in technical discussions and solution design'
        ],
        tech: ['React', 'Redux', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'IntelliJ IDEA', 'Atlassian Jira', 'Bitbucket', 'Confluence']
      },

      luxoft_lead: {
        company: 'Luxoft',
        position: 'Software Development Lead',
        period: 'Sep 2015 - Sep 2017 (2 years 1 month)',
        domain: 'Finance IT - Citibank, Nordea',
        achievements: [
          'Developed user interfaces for internal banking systems at Citibank and Nordea',
          'Worked within Scrum teams with close collaboration with clients and business stakeholders',
          'Built high-performance, scalable, and user-friendly interfaces for web and mobile platforms',
          'Developed scalable UIs using React, Angular, and React Native',
          'Delivered cross-platform solutions for web and mobile clients',
          'Participated in requirement discussions, sprint planning, and task refinement with clients',
          'Actively engaged in Agile processes: daily standups, sprint planning, and retrospectives',
          'Managed tasks in Jira: breakdown, estimation, and progress tracking',
          'Conducted code reviews and mentored junior developers',
          'Contributed to improving team practices and code quality'
        ],
        tech: ['React', 'Angular', 'React Native', 'TypeScript', 'Atlassian Jira', 'Git', 'Scrum']
      },

      alldiscounts: {
        company: 'AllDiscountsHere',
        position: 'Web Back-end Developer',
        period: 'Jan 2015 - Sep 2015 (9 months)',
        domain: 'E-commerce',
        achievements: [
          'Developed discount system with rich functionality',
          'Worked on two main systems: Client and Organization',
          'Performed both frontend and backend development',
          'System planning and architecture design',
          'Integration with different external systems',
          'Implementation of new functionalities and features'
        ],
        tech: ['AngularJS 1.x', 'CoffeeScript', 'JavaScript', 'PHP', 'Yii Framework', 'MySQL', 'Atlassian Confluence', 'Atlassian Jira']
      },

      luxoft_web: {
        company: 'Luxoft',
        position: 'Web Developer',
        period: 'Nov 2012 - Sep 2014 (1 year 11 months)',
        domain: 'Client Portals & Monitoring Systems',
        achievements: [
          'Developed Client Portal system for project status tracking and client communication',
          'Built CSS System for monitoring customer interest level with surveys and linguistic analysis',
          'Handled development and system maintenance',
          'Communicated with customers and gathered requirements',
          'Organized development processes and workflows',
          'Provided mentoring to team members',
          'Implemented integration solutions'
        ],
        tech: ['AngularJS 1.x', 'PHP', 'JavaScript', 'Java', 'Node.js', 'BizTalk', 'Active Directory', 'Atlassian BitBucket', 'Atlassian Jira', 'Git']
      },

      vipproject: {
        company: 'VipProject',
        position: 'Web Backend Developer',
        period: 'Jan 2011 - Nov 2012 (1 year 11 months)',
        domain: 'Game Development',
        achievements: [
          'Web backend development for game development projects',
          'System architecture and implementation',
          'Feature development and maintenance'
        ],
        tech: ['Web Technologies', 'Backend Development', 'Game DEV']
      }
    };

    if (!args?.length) {
      await term.echo('┌─────────────────────────────────────────────────────────────┐');
      await term.echo('│                    💼 WORK EXPERIENCE                        │');
      await term.echo('└─────────────────────────────────────────────────────────────┘');
      await term.echo('');

      Object.entries(experiences).forEach(([key, exp]) => {
        term.echo(`• ${exp.company} - ${exp.position}`);
        term.echo(`  📅 ${exp.period}`);
        term.echo(`  🌐 ${exp.domain}`);
        term.echo(`  🔍 Run: experience ${key} for details`);
        term.echo('');
      });
      return;
    }

    const key = args[0];
    const exp = experiences[key as keyof typeof experiences];

    if (!exp) {
      await term.echo(`❌ Experience not found: ${key}`);
      await term.echo(`💡 Use 'experience' to see available companies`);
      return;
    }

    await term.echo('┌─────────────────────────────────────────────────────────────┐');
    await term.echo('│                    💼 WORK EXPERIENCE                        │');
    await term.echo('└─────────────────────────────────────────────────────────────┘');
    await term.echo('');

    await term.echo(`🏢 ${exp.company}`);
    await term.echo(`📝 ${exp.position}`);
    await term.echo(`📅 ${exp.period}`);
    await term.echo(`🌐 ${exp.domain}`);
    await term.echo('');

    await term.echo('🎯 Key Achievements:');
    exp.achievements.forEach((achievement, index) => {
      term.echo(`   ${index + 1}. ${achievement}`);
    });

    await term.echo('');
    await term.echo('🛠️ Technologies:');
    await term.echo(`   ${exp.tech.join(', ')}`);

    await term.echo('');
    await term.echo('💡 Use "experience" to see all positions');
  },
  description: [
    'Shows detailed work experience information',
    'Usage: experience [company_key]',
    'Available companies:',
    '  agoda, luxoft_uk, luxoft_mexico, luxoft_developer, ibm,',
    '  alfa_bank, luxoft_lead, alldiscounts, luxoft_web, vipproject',
    'Example: experience agoda',
    'Example: experience ibm'
  ]
};
