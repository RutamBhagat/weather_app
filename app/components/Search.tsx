"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [city, setCity] = useState("");

  return (
    <div>
      <input
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && city !== "") {
            router.push(`/weather?city=${city}`);
          }
        }}
        value={city}
        required
        className="block w-full rounded-md border-0 py-2 pl-7 pr-20 placeholder:pl-20 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
        placeholder="Enter city name"
      />
    </div>
  );
}
