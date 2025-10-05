import { useTerminal } from '../terminal/terminal.context';

export const time = {
  run: async (args?: string[]) => {
    const term = useTerminal.getState();

    let city: string | undefined;
    if (args) {
      args.forEach(arg => {
        const match = arg.match(/-(\w+)=(.*)/);
        if (match && match[1] === 'city') city = match[2];
      });
    }

    try {
      let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let locationName = 'Local';

      if (city) {
        await term.commander(`echo ⏳ Getting timezone for ${city}...`);

        // Геокодируем город
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          await term.commander(`echo ❌ City "${city}" not found`);
          return;
        }

        const { name, country, timezone: tz } = geoData.results[0];
        timezone = tz || timezone;
        locationName = `${name}, ${country}`;
      }

      // Получаем текущее время
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: timezone,
        hour12: false,
      };
      const timeString = now.toLocaleTimeString('en-GB', options);

      await term.commander(`echo ⏰ Current time in ${locationName}: ${timeString}`);
    } catch (err) {
      await term.commander(`echo ❌ Error getting time: ${(err as Error).message}`);
    }
  },
  description: [
    'Shows the current time.',
    'Usage: time [-city=<city>]',
    'Example: time -city=Bangkok',
  ],
};
