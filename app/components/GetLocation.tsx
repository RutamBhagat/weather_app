"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

export default function GetLocation() {
  const router = useRouter();
  const getCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        router.push(`/weather?lat=${lat}&lon=${lon}`);
      });
    }
  };

  return (
    <button
      onClick={getCity}
      className="w-full px-4 py-2 text-white font-medium bg-[#43aefc] hover:bg-[#1672b4] rounded-md duration-150"
    >
      Get Device Location
    </button>
  );
}
