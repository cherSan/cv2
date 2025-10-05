import { useTerminal } from '../terminal/terminal.context';
// Пример использования: fetch -url=https://api.example.com/data -method=POST -body={"key":"value"}
export const fetch = {
  run: async (_user?: string, args?: string[]) => {
    if (!args) {
      await useTerminal
        .getState()
        .commander('echo ❌ Error: url is required', 'system');
      return;
    }
    const params: Record<string, string> = {};
    args.forEach((arg) => {
      const match = arg.match(/-(\w+)=(.*)/);
      if (match) {
        params[match[1]] = match[2];
      }
    });

    const url = params.url;
    if (!url) {
      await useTerminal
        .getState()
        .commander('echo ❌ Error: url is required', 'system');
      return;
    }

    const method = (params.method || 'GET').toUpperCase();
    const body = params.body ? JSON.parse(params.body) : undefined;

    await useTerminal
      .getState()
      .commander(`echo Fetching ${url} [${method}]...`, 'system');

    try {
      const res = await globalThis.fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      });

      const resultText = await res.text(); // JSON или текст
      const truncated =
        resultText.length > 200 ? resultText.slice(0, 200) + '...' : resultText;

      if (!res.ok) {
        await useTerminal
          .getState()
          .commander(`echo ❌ HTTP ${res.status}: ${res.statusText}`, 'system');
      }

      await useTerminal
        .getState()
        .commander(`echo ✅ Result: ${truncated}`, 'system');
    } catch (e: any) {
      await useTerminal
        .getState()
        .commander(`echo ❌ Fetch error: ${e.message}`, 'system');
    }
  },
  description: [
    'Fetches data from a URL.',
    'Usage: fetch -url=<url> [-method=<method>] [-body=<body>]',
    'Example: fetch -url=https://api.example.com/data -method=POST -body={"key":"value"}',
  ]
};
