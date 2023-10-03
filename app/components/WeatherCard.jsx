import React from 'react';
import Image from 'next/image';

export default function WeatherCard({ weatherData }) {
  const temperatureInCelsius = (weatherData.main.temp - 273.15).toFixed(2);
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <div className="card">
      <div className="card-weather flex items-center flex-col gap-2">
        <Image src={iconUrl} alt="weather icon" width={40} quality={100} height={80} />
        <h1>{temperatureInCelsius}°C</h1>
      </div>

      <div>
        <h2>{weatherData.weather[0].description}</h2>
        <br />
        <p>{weatherData.name}</p>
        <p>Humidity: <strong>{weatherData.main.humidity}%</strong></p>
        <p>Wind Speed: <strong>{weatherData.wind.speed} m/s</strong></p>
      </div>
    </div>
  );
}
