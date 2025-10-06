// commands/devtools.ts
import { useTerminal } from '../terminal/terminal.context';

export const devtools = {
  timestamp: {
    run: async () => {
      const term = useTerminal.getState();
      const now = new Date();
      await term.echo('🕒 CURRENT TIMESTAMPS:');
      await term.echo(`   • Unix: ${Date.now()}`);
      await term.echo(`   • ISO: ${now.toISOString()}`);
      await term.echo(`   • Local: ${now.toLocaleString()}`);
      await term.echo(`   • UTC: ${now.toUTCString()}`);
    },
    description: ['Shows current timestamp in different formats', 'Usage: timestamp']
  },

  base64: {
    run: async (args?: string[]) => {
      const term = useTerminal.getState();
      if (!args?.[0]) {
        await term.echo('Usage: base64 <encode|decode> <text>');
        await term.echo('Example: base64 encode hello');
        await term.echo('Example: base64 decode aGVsbG8=');
        return;
      }

      const operation = args[0];
      const text = args.slice(1).join(' ');

      if (operation === 'encode') {
        const encoded = btoa(text);
        await term.echo(`🔐 Base64 encoded:`);
        await term.echo(`   ${encoded}`);
      } else if (operation === 'decode') {
        try {
          const decoded = atob(text);
          await term.echo(`🔓 Base64 decoded:`);
          await term.echo(`   ${decoded}`);
        } catch {
          await term.echo('❌ Invalid Base64 string');
        }
      } else {
        await term.echo('❌ Usage: base64 <encode|decode> <text>');
      }
    },
    description: [
      'Encode/decode text to/from Base64',
      'Usage: base64 <encode|decode> <text>',
      'Example: base64 encode hello world'
    ]
  },

  uuid: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('🆔 GENERATED UUID:');
      await term.echo(`   ${crypto.randomUUID()}`);
    },
    description: ['Generates random UUID', 'Usage: uuid']
  },

  lorem: {
    run: async (args?: string[]) => {
      const term = useTerminal.getState();
      const count = parseInt(args?.[0] || '1');
      const paragraphs = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      ];

      const selected = paragraphs.slice(0, Math.min(count, 5));
      await term.echo('📝 LOREM IPSUM:');
      selected.forEach((para, index) => {
        term.echo(`   ${index + 1}. ${para}`);
      });
    },
    description: [
      'Generates Lorem Ipsum text',
      'Usage: lorem [paragraphs]',
      'Example: lorem 3'
    ]
  }
};
