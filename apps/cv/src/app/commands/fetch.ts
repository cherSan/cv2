import { useTerminal } from '../terminal/terminal.context';

export const fetch = {
  run: async (args?: string[]) => {
    const term = useTerminal.getState();

    if (!args) {
      await term.commander('echo ❌ Error: url is required', 'system');
      return;
    }

    const params: Record<string, string> = {};
    args.forEach((arg) => {
      const match = arg.match(/-(\w+)=(.*)/);
      if (match) params[match[1]] = match[2];
    });

    const url = params.url;
    if (!url) {
      await term.commander('echo ❌ Error: url is required', 'system');
      return;
    }

    const method = (params.method || 'GET').toUpperCase();
    let body: any;
    if (params.body) {
      try {
        body = JSON.parse(params.body);
      } catch {
        await term.commander('echo ❌ Error: invalid JSON body', 'system');
        return;
      }
    }

    await term.commander(`echo Fetching ${url} [${method}]...`, 'system');

    try {
      const res = await globalThis.fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      });

      const text = await res.text();
      const truncated = text.length > 200 ? text.slice(0, 200) + '...' : text;

      if (!res.ok) {
        await term.commander(`echo ❌ HTTP ${res.status}: ${res.statusText}`, 'system');
      } else {
        await term.commander(`echo ✅ Result: ${truncated}`, 'system');
      }
    } catch (e: any) {
      await term.commander(`echo ❌ Fetch error: ${e.message}`, 'system');
    }
  },
  description: [
    'Fetches data from a URL.',
    'Usage: fetch -url=<url> [-method=<method>] [-body=<body>]',
    'Example: fetch -url=https://api.example.com/data -method=POST -body={"key":"value"}',
  ]
};
