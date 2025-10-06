// commands/education.ts
import { useTerminal } from '../terminal/terminal.context';

export const education = {
  run: async () => {
    const term = useTerminal.getState();

    await term.echo('┌─────────────────────────────────────────────────────────────┐');
    await term.echo('│                    🎓 EDUCATION & TRAINING                   │');
    await term.echo('└─────────────────────────────────────────────────────────────┘');
    await term.echo('');

    await term.echo('🏫 ITMO University');
    await term.echo('   📍 Saint Petersburg, Russia');
    await term.echo('');
    await term.echo('   🎓 Master of Computer Applications (MCA)');
    await term.echo('      📅 December 2009 - December 2011');
    await term.echo('      📚 Computer and Information Sciences and Support Services');
    await term.echo('');
    await term.echo('   🎓 Bachelor\'s Degree, Natural Sciences');
    await term.echo('      📅 2004 - 2009');
    await term.echo('      🔬 Foundation in scientific principles and research methods');
    await term.echo('');

    await term.echo('┌─────────────────────────────────────────────────────────────┐');
    await term.echo('│                    📜 CERTIFICATIONS                         │');
    await term.echo('└─────────────────────────────────────────────────────────────┘');
    await term.echo('');

    await term.echo('🎓 Language Certification:');
    await term.echo('   • IELTS B2 Confirmed');
    await term.echo('     📊 International English Language Testing System');
    await term.echo('     🌍 Professional Working Proficiency');
    await term.echo('     💼 Valid for international work and communication');
    await term.echo('');

    await term.echo('🏢 IBM Professional Certifications:');
    await term.echo('');
    await term.echo('   • IBM Cloud Essentials');
    await term.echo('     🌐 Cloud infrastructure and services fundamentals');
    await term.echo('     ☁️ IBM Cloud platform capabilities and best practices');
    await term.echo('');
    await term.echo('   • IBM Agile Explorer');
    await term.echo('     🔄 Agile methodologies and practices mastery');
    await term.echo('     📋 Scrum framework implementation and team leadership');
    await term.echo('');

    await term.echo('🎨 IBM Design Thinking Certifications:');
    await term.echo('');
    await term.echo('   • Enterprise Design Thinking Co-Creator');
    await term.echo('     💡 Advanced design thinking facilitation techniques');
    await term.echo('     👥 Co-creation workshop leadership and collaboration');
    await term.echo('     🎯 Complex problem-solving framework mastery');
    await term.echo('');
    await term.echo('   • Enterprise Design Thinking Practitioner');
    await term.echo('     🧠 User-centered design principles and methodologies');
    await term.echo('     🔍 Problem-solving frameworks and innovation processes');
    await term.echo('     📊 User research and validation techniques');
    await term.echo('');

    await term.echo('┌─────────────────────────────────────────────────────────────┐');
    await term.echo('│                  📈 CONTINUOUS LEARNING                      │');
    await term.echo('└─────────────────────────────────────────────────────────────┘');
    await term.echo('');

    await term.echo('🎯 Professional Development:');
    await term.echo('   • Regular participation in international tech conferences');
    await term.echo('   • Advanced workshops on architecture and system design');
    await term.echo('   • Ongoing training in emerging technologies and frameworks');
    await term.echo('');

    await term.echo('💻 Technical Skills Enhancement:');
    await term.echo('   • Active engagement with online learning platforms');
    await term.echo('   • Contribution to open-source projects and communities');
    await term.echo('   • Technical blogging and knowledge sharing');
    await term.echo('');

    await term.echo('🌐 Industry Engagement:');
    await term.echo('   • Member of professional developer communities');
    await term.echo('   • Participation in coding challenges and hackathons');
    await term.echo('   • Continuous research on software engineering trends');
  },
  description: [
    'Shows comprehensive education background, certifications and continuous learning',
    'Usage: education'
  ]
};
