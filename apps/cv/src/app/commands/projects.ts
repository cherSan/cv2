// commands/projects.ts
import { useTerminal } from '../terminal/terminal.context';

export const projects = {
  run: async (args?: string[]) => {
    const term = useTerminal.getState();

    const projectList = {
      agoda_travel: {
        name: 'Global Travel Platform - Core Systems',
        client: 'Agoda',
        period: '2024 - Present',
        description: 'Scalable, fault-tolerant systems powering global travel platform with millions of daily users. Focus on frontend excellence with React, backend services in Scala/Kotlin, and platform infrastructure improvements.',
        role: 'Senior Software Engineer',
        responsibilities: [
          'Designed and developed scalable, fault-tolerant systems and microservices for millions of daily users',
          'Built and optimized high-performance user interfaces with React, focusing on speed, usability, and accessibility',
          'Developed backend services with Scala and Kotlin on JVM stack, emphasizing clean architecture and performance',
          'Participated in A/B testing, product experiments, and data-driven decision making',
          'Collaborated with DevOps to improve CI/CD pipelines, observability, and deployment automation',
          'Created internal tools and developer platforms to boost team productivity',
          'Provided technical leadership and contributed to strategic architectural planning'
        ],
        tech: ['React', 'TypeScript', 'Scala', 'Kotlin', 'JVM', 'GraphQL', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Terraform', 'Prometheus/Grafana', 'A/B Testing']
      },

      millennium_corporate: {
        name: 'Main Corporate System Application',
        client: 'Millennium (via Luxoft)',
        period: '2022-2024',
        description: 'Cross-platform corporate banking system covering web, desktop, and mobile solutions for financial operations and client management.',
        role: 'Chief Software Engineer / Senior Programmer',
        responsibilities: [
          'Designed and implemented microfrontend architecture using Nx and Module Federation',
          'Developed cross-platform applications: Angular, Electron (desktop), React Native (mobile)',
          'Built scalable backend services with NestJS, Node.js, and GraphQL',
          'Integrated Glue42 for cross-application communication in financial environments',
          'Collaborated with DevOps to support CI/CD pipelines and environment configuration',
          'Mentored junior developers, conducted code reviews, and shared best practices',
          'Worked closely with client to clarify requirements and plan deliverables'
        ],
        tech: ['Angular', 'React Native', 'Electron', 'NestJS', 'Node.js', 'Nx', 'GraphQL', 'TypeScript', 'Glue42', 'Microfrontends', 'CI/CD']
      },

      luxoft_trading: {
        name: 'Trading Platform Applications',
        client: 'Luxoft Finance Clients',
        period: '2019-2022',
        description: 'Mobile, desktop and web applications for traders with React technologies stack across multiple financial institutions.',
        role: 'Software Developer',
        responsibilities: [
          'Developed cross-platform trading applications using React technologies',
          'Managed customer communication and requirements gathering',
          'Handled code organization and system architecture design',
          'Performed DevOps tasks and deployment operations',
          'Led development processes and technical decision making',
          'Ensured system reliability and performance optimization'
        ],
        tech: ['React', 'React Native', 'TypeScript', 'GraphQL', 'Node.js', 'Atlassian Jira', 'Finance APIs']
      },

      blockchain_platforms: {
        name: 'Blockchain Digital Assets & Security Platforms',
        client: 'IBM',
        period: '2018-2019',
        description: 'Two blockchain-based projects: secure personal data interaction using decentralized technologies and digital assets management platform.',
        role: 'Software Developer',
        responsibilities: [
          'Frontend architecture design and implementation for blockchain applications',
          'UX design and validation for decentralized user experiences',
          'GraphQL integration on both frontend and backend layers',
          'Frontend analytics and performance monitoring implementation',
          'Communication with customers and stakeholders on technical solutions',
          'Participation in project solution design and key technical decisions',
          'Mentoring of junior developers and code review processes'
        ],
        tech: ['Angular', 'TypeScript', 'GraphQL', 'Java', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'Blockchain', 'Decentralized Tech']
      },

      alfa_bank_trading: {
        name: 'Cross-Platform Banking & Trading Application',
        client: 'Alfa-Bank',
        period: '2017-2018',
        description: 'Comprehensive banking application for managing various account types and monitoring trading activity with financial instruments across web and mobile platforms.',
        role: 'Senior Software Engineer',
        responsibilities: [
          'Frontend development for Web, iOS (WebKit), and Android platforms',
          'Designing and maintaining scalable UI architecture for financial operations',
          'Integration with backend services via customer banking APIs',
          'Development of reusable UI components and design system',
          'Build configuration and CI/CD pipeline support',
          'Collaboration with customers and internal stakeholders',
          'API analysis, integration planning, and technical documentation'
        ],
        tech: ['React', 'Redux', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'iOS WebKit', 'Android', 'Banking APIs']
      },

      citibank_nordea: {
        name: 'Internal Banking Systems',
        client: 'Citibank, Nordea (via Luxoft)',
        period: '2015-2017',
        description: 'User interfaces for internal banking systems at major financial institutions, focusing on high-performance, scalable, and user-friendly interfaces.',
        role: 'Software Development Lead',
        responsibilities: [
          'Developed scalable UIs using React, Angular, and React Native',
          'Delivered cross-platform solutions for web and mobile banking clients',
          'Participated in requirement discussions and sprint planning with financial clients',
          'Managed tasks in Jira: breakdown, estimation, and progress tracking',
          'Conducted code reviews and mentored junior developers',
          'Contributed to improving team practices and code quality standards',
          'Actively engaged in Agile processes and client presentations'
        ],
        tech: ['React', 'Angular', 'React Native', 'TypeScript', 'Banking Systems', 'Scrum', 'Jira']
      },

      discount_platform: {
        name: 'AllDiscountsHere E-commerce Platform',
        client: 'AllDiscountsHere',
        period: '2015 (9 months)',
        description: 'Comprehensive discount system with rich functionality including client and organization management systems for promotional campaigns.',
        role: 'Web Back-end Developer',
        responsibilities: [
          'Developed full-stack discount system with rich functionality',
          'Worked on two main systems: Client-facing and Organization management',
          'Performed both frontend and backend development tasks',
          'System planning and architecture design for e-commerce platform',
          'Integration with different external payment and inventory systems',
          'Implementation of new functionalities and business features'
        ],
        tech: ['AngularJS 1.x', 'CoffeeScript', 'JavaScript', 'PHP', 'Yii Framework', 'MySQL', 'E-commerce']
      },

      client_portal: {
        name: 'Client Portal & CSS Monitoring System',
        client: 'Luxoft Internal',
        period: '2012-2014',
        description: 'Dual-system project: Client Portal for project status tracking and CSS System for monitoring customer interest through surveys and linguistic analysis.',
        role: 'Web Developer',
        responsibilities: [
          'Developed Client Portal system for project status tracking and client communication',
          'Built CSS System for monitoring customer interest with surveys and linguistic analysis',
          'Handled full development lifecycle and system maintenance',
          'Communicated with customers and gathered business requirements',
          'Organized development processes and team workflows',
          'Provided mentoring to team members and integration implementation'
        ],
        tech: ['AngularJS 1.x', 'PHP', 'JavaScript', 'Java', 'Node.js', 'BizTalk', 'Active Directory', 'Linguistic Analysis']
      },

      game_development: {
        name: 'Game Development Projects',
        client: 'VipProject',
        period: '2011-2012',
        description: 'Web backend development for various game development projects, focusing on system architecture and feature implementation.',
        role: 'Web Backend Developer',
        responsibilities: [
          'Web backend development for game development projects',
          'System architecture design and implementation',
          'Feature development and maintenance for gaming platforms',
          'Performance optimization and scalability improvements'
        ],
        tech: ['Web Technologies', 'Backend Development', 'Game Development', 'System Architecture']
      }
    };

    if (!args?.length) {
      await term.echo('┌─────────────────────────────────────────────────────────────┐');
      await term.echo('│                     🚀 KEY PROJECTS                         │');
      await term.echo('└─────────────────────────────────────────────────────────────┘');
      await term.echo('');

      Object.entries(projectList).forEach(([key, project]) => {
        term.echo(`• ${project.name}`);
        term.echo(`  🏢 ${project.client}`);
        term.echo(`  📅 ${project.period}`);
        term.echo(`  👨‍💻 ${project.role}`);
        term.echo(`  🔍 Run: projects ${key} for detailed information`);
        term.echo('');
      });
      return;
    }

    const key = args[0];
    const project = projectList[key as keyof typeof projectList];

    if (!project) {
      await term.echo(`❌ Project not found: ${key}`);
      await term.echo(`💡 Use 'projects' to see available projects`);
      return;
    }

    await term.echo('┌─────────────────────────────────────────────────────────────┐');
    await term.echo('│                     🚀 PROJECT DETAILS                      │');
    await term.echo('└─────────────────────────────────────────────────────────────┘');
    await term.echo('');

    await term.echo(`📋 ${project.name}`);
    await term.echo(`🏢 Client: ${project.client}`);
    await term.echo(`📅 Period: ${project.period}`);
    await term.echo(`👨‍💻 Role: ${project.role}`);
    await term.echo('');

    await term.echo('📝 Project Description:');
    await term.echo(`   ${project.description}`);
    await term.echo('');

    await term.echo('🎯 Key Responsibilities:');
    project.responsibilities.forEach((responsibility, index) => {
      term.echo(`   ${index + 1}. ${responsibility}`);
    });

    await term.echo('');
    await term.echo('🛠️ Technologies & Tools:');
    await term.echo(`   ${project.tech.join(', ')}`);

    await term.echo('');
    await term.echo('💡 Use "projects" to see all available projects');
  },
  description: [
    'Shows detailed project portfolio information',
    'Usage: projects [project_key]',
    'Available projects:',
    '  agoda_travel, millennium_corporate, luxoft_trading, blockchain_platforms,',
    '  alfa_bank_trading, citibank_nordea, discount_platform, client_portal, game_development',
    'Example: projects agoda_travel',
    'Example: projects blockchain_platforms'
  ]
};
