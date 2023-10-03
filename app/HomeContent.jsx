"use client"

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import HourlyForecastCard from './components/HourlyForcastCard';
import Loading from './loading';

export default function HomeContent() {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleWeatherData = async (city) => {
    try {
      const api_key = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
      const weatherData = await weatherResponse.json();

      if (weatherData.cod !== 200) {
        // If API response indicates an error, set error message and clear weather data
        setErrorMessage(weatherData.message);
        setWeatherData(null);
        setHourlyData([]); // Clear hourly data as well
      } else {
        // If API response is successful, clear error message and set weather data
        setErrorMessage('');
        setWeatherData(weatherData);

        // Fetch hourly weather data
        const hourlyResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=current,minutely,daily,alerts&appid=${api_key}`);
        const hourlyData = await hourlyResponse.json();

        if (hourlyData && hourlyData.hourly) {
          const next24HoursData = hourlyData.hourly.slice(1, 7);
          setHourlyData(next24HoursData);
        }
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle other errors here
      setErrorMessage('An error occurred while fetching weather data. Please try again later.');
      setWeatherData(null);
      setHourlyData([]); // Clear hourly data in case of error
    }
  };

  return (
    <div>
      <div className="mb-3">
        <SearchBar onWeatherData={handleWeatherData} />
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <br />
      <h2>Current Weather & Forecast</h2>
      <Suspense fallback={<Loading />}>
        {weatherData && <WeatherCard weatherData={weatherData} />}
        {hourlyData.length > 0 && <HourlyForecastCard hourlyData={hourlyData} />}
      </Suspense>
    </div>
  );
}
