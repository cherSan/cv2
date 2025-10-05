import { useTerminal } from '../terminal/terminal.context';

export const weather = {
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
      let latitude: number;
      let longitude: number;
      let locationName = 'Local';

      if (city) {
        await term.commander(`echo ⏳ Getting coordinates for ${city}...`);

        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          await term.commander(`echo ❌ City "${city}" not found`);
          return;
        }

        const place = geoData.results[0];
        latitude = place.latitude;
        longitude = place.longitude;
        locationName = `${place.name}, ${place.country}`;
      } else {
        // Локальные координаты через Geolocation API
        await term.commander(`echo ⏳ Detecting your location...`);

        const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported'));
            return;
          }
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;
        locationName = 'Your Location';
      }

      await term.commander(`echo 🌤 Weather for: ${locationName}`);

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      if (!weatherData.current_weather) {
        await term.commander('echo ❌ Failed to get weather data');
        return;
      }

      const current = weatherData.current_weather;

      await term.commander(`echo 🌡 Temperature: ${current.temperature}°C`);
      await term.commander(`echo 💨 Wind speed: ${current.windspeed} km/h`);
      await term.commander(`echo 🌦 Weather code: ${current.weathercode}`);
    } catch (err) {
      await term.commander(`echo ❌ Error fetching weather: ${(err as Error).message}`);
    }
  },
  description: [
    'Shows current weather with location name.',
    'Usage: weather [-city=<city>]',
    'If city is omitted, uses your current location.',
    'Example: weather -city=Bangkok',
  ],
};
