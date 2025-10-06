// commands/internet.ts
import { useTerminal } from '../terminal/terminal.context';

export const internet = {
  joke: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('😄 FETCHING JOKE...');
      try {
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await res.json();
        await term.echo(`   ${joke.setup}`);
        await term.echo(`   🎭 ${joke.punchline}`);
      } catch {
        const fallbackJokes = [
          { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs!" },
          { setup: "How many programmers does it take to change a light bulb?", punchline: "None, that's a hardware problem!" },
          { setup: "Why do Java developers wear glasses?", punchline: "Because they can't C#" }
        ];
        const joke = fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
        await term.echo(`   ${joke.setup}`);
        await term.echo(`   🎭 ${joke.punchline}`);
      }
    },
    description: ['Shows random programming joke', 'Usage: joke']
  },

  quote: {
    run: async () => {
      const term = useTerminal.getState();
      await term.echo('💬 FETCHING QUOTE...');
      try {
        const res = await fetch('https://api.quotable.io/random');
        const quote = await res.json();
        await term.echo(`   "${quote.content}"`);
        await term.echo(`   — ${quote.author}`);
        await term.echo(`   📚 Tags: ${quote.tags.join(', ')}`);
      } catch {
        const fallbackQuotes = [
          { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
          { content: "First, solve the problem. Then, write the code.", author: "John Johnson" },
          { content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" }
        ];
        const quote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        await term.echo(`   "${quote.content}"`);
        await term.echo(`   — ${quote.author}`);
      }
    },
    description: ['Shows random inspirational quote', 'Usage: quote']
  },
};
