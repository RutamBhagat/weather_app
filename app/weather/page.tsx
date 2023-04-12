import Link from "next/link";
import React from "react";
import axios from "axios";

const getWeatherResults = async (city: string) => {
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_APIKEY}`
    );
    return result.data;
  } catch (error) {
    return null;
  }
};

export default async function index({ searchParams }: { searchParams: { city: string } }) {
  console.log("searchParams.city", searchParams.city);
  const results: any = await getWeatherResults(searchParams.city);
  console.log("results", results);

  if (!results) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="bg-[#43aefc] w-full min-h-screen flex justify-center items-center">
      <article className="max-w-sm w-full shadow-lg duration-300 hover:shadow-sm flex-none" key={"key"}>
        <div className="bg-white shadow rounded-lg">
          <div className="flex items-center px-6 gap-3 border-0 border-b-2 text-[#43aefc]">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6L12 20Z" />
              </svg>
            </Link>
            <h3 className="text-lg font-semibold py-3 w-full">Weather App</h3>
          </div>
          <div className="space-y-5 p-6">
            <h3>{results?.weather?.main}</h3>
            <p>Feels like {results?.main?.feels_like}°C</p>
            <i>
              <p>
                {results?.name}, {results?.sys?.country}
              </p>
            </i>
          </div>
        </div>
      </article>
    </div>
  );
}
