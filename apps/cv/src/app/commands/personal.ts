import { useTerminal } from '../terminal/terminal.context';

export const personal = {
  about: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('┌─────────────────────────────────────────────────────────────┐');
      await term.echo('│                    👨‍💻 PROFESSIONAL PROFILE                 │');
      await term.echo('└─────────────────────────────────────────────────────────────┘');
      await term.echo('');
      await term.echo('🎯 Aleksandr Chernushevich');
      await term.echo('   Senior Software Engineer @ Agoda | ex-Luxoft, IBM');
      await term.echo('   📍 Bangkok, Thailand | 🌎 International Experience');
      await term.echo('');
      await term.echo('📈 Engineering leader with 15+ years of experience delivering');
      await term.echo('   scalable, high-performance solutions for finance and tech');
      await term.echo('   industries. Proven track record in building systems');
      await term.echo('   handling 10K+ TPS and 50M+ users.');
      await term.echo('');
      await term.echo('🎯 Specializations:');
      await term.echo('   • Designing resilient, fault-tolerant architectures');
      await term.echo('   • Leading cross-functional engineering teams');
      await term.echo('   • Aligning technology with business objectives');
      await term.echo('   • Driving DevOps transformation and cloud optimization');
      await term.echo('   • Clean architecture and long-term product scalability');
      await term.echo('');
      await term.echo('🏆 Key Achievements:');
      await term.echo('   • Built systems serving 50M+ users globally');
      await term.echo('   • Designed architectures handling 10K+ transactions/sec');
      await term.echo('   • Led teams in delivering complex financial platforms');
      await term.echo('   • Implemented cost-effective cloud infrastructure solutions');
      await term.echo('   • Mentored 20+ developers across multiple organizations');
    },
    description: [
      'Shows comprehensive professional summary and career overview',
      'Usage: about'
    ]
  },

  contact: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('┌─────────────────────────────────────────────────────────────┐');
      await term.echo('│                       📞 CONTACT INFO                        │');
      await term.echo('└─────────────────────────────────────────────────────────────┘');
      await term.echo('');
      await term.echo('📱 Mobile:');
      await term.echo('   +66 93 179 6173 (Thailand)');
      await term.echo('');
      await term.echo('📧 Email:');
      await term.echo('   chernushevich.alexander@gmail.com');
      await term.echo('');
      await term.echo('💼 Professional:');
      await term.echo('   🔗 LinkedIn: linkedin.com/in/chersan0ff');
      await term.echo('   🐙 GitHub:   github.com/cherSan');
      await term.echo('   💻 Portfolio: Available upon request');
      await term.echo('');
      await term.echo('🌍 Location:');
      await term.echo('   Bangkok, Thailand');
      await term.echo('   Open to: Remote opportunities & International roles');
      await term.echo('');
      await term.echo('🕒 Availability:');
      await term.echo('   Currently employed at Agoda');
      await term.echo('   Available for interesting opportunities and collaborations');
    },
    description: [
      'Shows comprehensive contact information and availability',
      'Usage: contact'
    ]
  },

  skills: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('┌─────────────────────────────────────────────────────────────┐');
      await term.echo('│                     🛠️ TECHNICAL SKILLS                     │');
      await term.echo('└─────────────────────────────────────────────────────────────┘');
      await term.echo('');

      await term.echo('🚀 CORE EXPERTISE:');
      await term.echo('   • UX Research & User-Centered Design');
      await term.echo('   • A/B Testing & Data-Driven Development');
      await term.echo('   • Systems Design & Architecture Planning');
      await term.echo('   • Microservices & Distributed Systems');
      await term.echo('   • Performance Optimization & Scalability');
      await term.echo('');

      await term.echo('💻 FRONTEND MASTERY:');
      await term.echo('   • Frameworks:    React, Angular, Vue.js, ...');
      await term.echo('   • Mobile:        React Native, Ionic, iOS/Android WebKit, NativeScript, Capacitor, Expo');
      await term.echo('   • Desktop:       Electron, Glue42');
      await term.echo('   • Languages:     TypeScript, JavaScript, HTML5, CSS3');
      await term.echo('   • State Mgmt:    Redux, NgRx, MobX, Context API (React), Zustand, ...');
      await term.echo('   • Styling:       Tailwind CSS, Material-UI, Bootstrap, SASS/SCSS, Less, Ant Design, ...');
      await term.echo('');

      await term.echo('⚙️ BACKEND EXPERTISE:');
      await term.echo('   • JVM Stack:     Scala, Kotlin, Java');
      await term.echo('   • Node.js:       NestJS, Express, Fastify, NextJS');
      await term.echo('   • API:           GraphQL, REST, gRPC, WebSocket, ...');
      await term.echo('   • Databases:     PostgreSQL, MySQL, MongoDB, Redis, ...');
      await term.echo('   • Messaging:     Kafka, RabbitMQ, AWS SQS');
      await term.echo('');

      await term.echo('🏗️ ARCHITECTURE & DEVOPS:');
      await term.echo('   • MicroFrontends: Nx, Module Federation, Single-SPA');
      await term.echo('   • Containers:     Docker, Kubernetes, Podman');
      await term.echo('   • Cloud:          AWS, GCP, Azure, IBM Cloud');
      await term.echo('   • CI/CD:          GitLab CI/CD, Jenkins, GitHub Actions');
      await term.echo('   • IaC:            Terraform, CloudFormation, Ansible');
      await term.echo('   • Monitoring:     Prometheus, Grafana, ELK Stack, New Relic');
      await term.echo('');

      await term.echo('🛠️ DEVELOPMENT TOOLS:');
      await term.echo('   • Build Tools:    Webpack, Vite, Rollup, Gradle');
      await term.echo('   • Testing:        Jest, Cypress, Testing Library, JUnit');
      await term.echo('   • Version Control:Git, GitHub, GitLab, Bitbucket');
      await term.echo('   • IDEs:           IntelliJ IDEA, VS Code, WebStorm');
      await term.echo('   • Collaboration:  Jira, Confluence, Slack, Teams');
      await term.echo('');

      await term.echo('🎯 DOMAIN EXPERIENCE:');
      await term.echo('   • FinTech:        Trading platforms, Banking systems, Payment processing');
      await term.echo('   • Travel Tech:    E-commerce, Booking systems, Global distribution');
      await term.echo('   • Blockchain:     Digital assets, Secure data management, DApps');
      await term.echo('   • Enterprise:     Corporate systems, Internal tools, B2B solutions');
      await term.echo('');

      await term.echo('🗣️ LANGUAGES:');
      await term.echo('   • Russian:       Native proficiency');
      await term.echo('   • English:       Professional working proficiency - B2 IELTS Confirmed');
      await term.echo('   • German:        Elementary proficiency (A2)');
      await term.echo('   • Spanish:       Elementary proficiency (A2)');
      await term.echo('');

      await term.echo('🏆 CERTIFICATIONS:');
      await term.echo('   • IBM Cloud Essentials');
      await term.echo('   • IBM Agile Explorer');
      await term.echo('   • Enterprise Design Thinking Co-Creator');
      await term.echo('   • Enterprise Design Thinking Practitioner');
    },
    description: [
      'Shows comprehensive technical skills and domain expertise',
      'Usage: skills'
    ]
  },

  certifications: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('┌─────────────────────────────────────────────────────────────┐');
      await term.echo('│                     📜 CERTIFICATIONS                        │');
      await term.echo('└─────────────────────────────────────────────────────────────┘');
      await term.echo('');
      await term.echo('🎓 Language Certification:');
      await term.echo('   • IELTS B2 Confirmed');
      await term.echo('     📊 International English Language Testing System');
      await term.echo('     🌍 Professional Working Proficiency');
      await term.echo('     💼 Valid for international work and communication');
      await term.echo('');
      await term.echo('🏢 IBM Certifications:');
      await term.echo('   • IBM Cloud Essentials');
      await term.echo('     - Cloud infrastructure and services fundamentals');
      await term.echo('     - IBM Cloud platform capabilities');
      await term.echo('');
      await term.echo('   • IBM Agile Explorer');
      await term.echo('     - Agile methodologies and practices');
      await term.echo('     - Scrum framework implementation');
      await term.echo('');
      await term.echo('🎨 Design Thinking:');
      await term.echo('   • Enterprise Design Thinking Co-Creator');
      await term.echo('     - Advanced design thinking facilitation');
      await term.echo('     - Co-creation workshop leadership');
      await term.echo('');
      await term.echo('   • Enterprise Design Thinking Practitioner');
      await term.echo('     - User-centered design principles');
      await term.echo('     - Problem-solving frameworks');
      await term.echo('');
      await term.echo('💡 Continuous Learning:');
      await term.echo('   • Regularly participate in tech conferences and workshops');
      await term.echo('   • Active in online learning platforms and coding communities');
      await term.echo('   • Contributor to open-source projects and technical blogs');
    },
    description: [
      'Shows professional certifications and continuous learning achievements',
      'Usage: certifications'
    ]
  },

  languages: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('┌─────────────────────────────────────────────────────────────┐');
      await term.echo('│                     🌍 LANGUAGE SKILLS                       │');
      await term.echo('└─────────────────────────────────────────────────────────────┘');
      await term.echo('');
      await term.echo('🗣️ PROFICIENCY LEVELS:');
      await term.echo('');
      await term.echo('🇷🇺 Russian - Native Proficiency');
      await term.echo('   • Full professional fluency');
      await term.echo('   • Technical documentation and communication');
      await term.echo('   • Team leadership and client meetings');
      await term.echo('');
      await term.echo('🇬🇧 English - Professional Working Proficiency');
      await term.echo('   • B2 IELTS Confirmed (International English Language Testing System)');
      await term.echo('   • Technical discussions and architecture planning');
      await term.echo('   • International team collaboration and daily standups');
      await term.echo('   • Documentation, presentation delivery, and client communication');
      await term.echo('   • Requirement gathering and project planning in English');
      await term.echo('');
      await term.echo('🇩🇪 German - Elementary Proficiency (A2)');
      await term.echo('   • Basic conversations and travel situations');
      await term.echo('   • Understanding simple texts and instructions');
      await term.echo('   • Currently improving through practice');
      await term.echo('');
      await term.echo('🇪🇸 Spanish - Elementary Proficiency (A2)');
      await term.echo('   • Fundamental communication skills');
      await term.echo('   • Basic reading and writing abilities');
      await term.echo('   • Interest in achieving conversational fluency');
      await term.echo('');
      await term.echo('🌐 INTERNATIONAL EXPERIENCE:');
      await term.echo('   • Worked with teams across: Russia, Mexico, UK, Thailand');
      await term.echo('   • Experience in multicultural environments and distributed teams');
      await term.echo('   • Adapted to different business cultures and communication styles');
      await term.echo('   • Successfully delivered projects in international settings');
    },
    description: [
      'Shows language proficiencies and international experience',
      'Usage: languages'
    ]
  }
};
