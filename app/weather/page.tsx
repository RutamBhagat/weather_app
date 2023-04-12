import Link from "next/link";
import React from "react";
import axios from "axios";
import { RootObject } from "./weatherTypes";

const getWeatherResults = async (city: string, lat: string, lon: string) => {
  try {
    const result = await axios.get<RootObject>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_APIKEY}`
    );
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export default async function index({ searchParams }: { searchParams: { city?: string; lat?: string; lon?: string } }) {
  let results: RootObject = await getWeatherResults(
    searchParams.city || "",
    searchParams.lat || "",
    searchParams.lon || ""
  );

  return (
    <div className="bg-[#43aefc] w-full min-h-screen flex justify-center items-center">
      <article className="max-w-sm w-full shadow-lg duration-300 hover:shadow-sm flex-none">
        <div className="bg-white shadow rounded-lg min-h-[450px]">
          <div className="flex items-center px-5 gap-3 border-0 border-b-2 text-[#43aefc]">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6L12 20Z" />
              </svg>
            </Link>
            <h3 className="text-lg font-semibold py-3 w-full">Weather App</h3>
          </div>
          {results.cod === 200 ? (
            <>
              <div className="p-5 pb-3">
                <div className="flex justify-center items-center h-[200px]">
                  <img
                    src={`http://openweathermap.org/img/wn/${results.weather[0].icon}@4x.png`}
                    alt={`${results?.weather[0].main} weather`}
                  />
                </div>
                <div className="px-5">
                  <h5 className="my-2 text-center text-5xl font-bold tracking-tight text-gray-900">
                    {results.main.temp} °C
                  </h5>
                  <p className="my-3 text-center font-normal text-gray-700">{results?.weather[0].main}</p>
                  <div className="flex items-center justify-center text-gray-700 h-6 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                      <path
                        fill="currentColor"
                        d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-11.8Z"
                      />
                    </svg>
                    <p className="my-3 text-center font-normal">
                      {results?.name}, {results?.sys?.country}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-1/2 border border-t-2 border-b-0 border-r-2 border-l-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-thermometer-sun text-[#43aefc]"
                    width="38"
                    height="38"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z" />
                    <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <div className="flex flex-col py-3 px-0">
                    <h5 className="text-start text-xl font-medium tracking-tight text-gray-900 ">
                      {results?.main?.feels_like} °C
                    </h5>
                    <p className="text-start font-normal text-sm">Feels like</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-1/2 border border-t-2 border-b-0 border-r-0">
                  <svg
                    className="text-[#43aefc]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.043A9.986 9.986 0 0 0 7 19a9 9 0 0 0 18 0a10.063 10.063 0 0 0-1.524-5.007ZM16 26a7.009 7.009 0 0 1-7-7a7.978 7.978 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.977 6.977 0 0 1 16 26.001Z"
                    />
                  </svg>
                  <div className="flex flex-col py-3 px-0">
                    <h5 className="text-start text-xl font-medium text-gray-900">{results?.main?.humidity} %</h5>
                    <p className="text-start font-normal text-sm">Humidity</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <main className="grid min-h-full rounded-lg place-items-center bg-white px-8 py-24">
              <div className="text-center">
                <p className="text-base font-semibold text-[#43aefc]">{results.cod}</p>
                <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-5xl uppercase">{results.message}</h1>
                <p className="mt-6 text-base text-gray-600">Sorry, we couldn’t find the city you’re looking for.</p>
                <div className="mt-5">
                  <Link
                    href="/"
                    className="rounded-md bg-[#43aefc] hover:bg-[#1672b4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-lg"
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            </main>
          )}
        </div>
      </article>
    </div>
  );
}
