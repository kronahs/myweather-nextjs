import React from 'react';
import Image from 'next/image';


export default function HourlyForecastCard({ hourlyData }) {
  if (!hourlyData || hourlyData.length === 0) {
    return <div>No hourly data available</div>;
  }

  return (
    <div className='flex flex-row flex-wrap gap-4 '>
      {hourlyData.map((hourlyWeather, index) => (
        <div className="card flex items-center flex-col gap-2 w-32  bg-slate-100 flex-grow" key={index}>
          <h3>{new Date(hourlyWeather.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>
          <Image src={`http://openweathermap.org/img/w/${hourlyWeather.weather[0].icon}.png`} alt="weather icon" width={40} quality={100} height={80} />
          <h2>{(hourlyWeather.temp - 273.15).toFixed(2)}°C</h2>
        </div>
      ))}
    </div>
  );
}
