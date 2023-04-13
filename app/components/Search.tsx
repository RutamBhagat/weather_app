"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const cities = ["Mumbai", "Delhi", "New York", "San Francisco", "Wakanda"];

  return (
    <div className="space-y-5">
      <input
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && city !== "") {
            router.push(`/weather?city=${city}`);
          }
        }}
        value={city}
        required
        className="w-full p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600"
        placeholder="Enter city name"
      />

      <div className="relative">
        <span className="block w-full h-px bg-gray-300"></span>
        <p className="w-fit text-sm bg-white text-gray-500 px-2 absolute -top-2 inset-x-0 mx-auto">or</p>
      </div>

      <div className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 right-2.5 w-6 h-6 my-auto text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select
          onChange={(event) => {
            router.push(`/weather?city=${event.target.value}`);
          }}
          className="w-full p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600"
        >
          <option selected disabled value="city">
            Bookmaked Cities
          </option>
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
