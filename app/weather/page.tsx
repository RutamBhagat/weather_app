import React from "react";

export default function index({ searchParams }: { searchParams: { city: string } }) {
  return <div>Hello you are in {searchParams.city}</div>;
}
