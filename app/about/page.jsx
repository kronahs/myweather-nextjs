import React from 'react';

export default function AboutPage() {
  return (
    <main>
      <div className="">
        <h1 className="">About MyWeather</h1>
        <p className="text-gray-700 mb-6">
          MyWeather is a modern weather application built using React.js and
          Next.js. It provides real-time weather data sourced from reliable APIs
          to deliver accurate forecasts for locations around the world.
        </p>

        <h2 className="">Our Goal</h2>
        <p className="text-gray-700 mb-6">
          Our goal is to empower users with essential weather information in a
          user-friendly and visually appealing manner. Whether you're planning
          your day or preparing for a trip, MyWeather aims to make weather
          forecasts accessible and easy to understand.
        </p>

        <br />
        <h2 className="">Contact Us</h2>
        <form className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
