This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


clone the repository locally

cd into the repository

```bash
pnpm i
```

create a .env file in the root of the project 

create an api key on open weather map

paste your OPEN_WEATHER_MAP_APIKEY in the .env file for Ex.

OPEN_WEATHER_MAP_APIKEY="[your api key here]"

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Weather App is an app which helps you find the weather in your city you can either enter your location using GPS or you can search the weather of any city by entering the name of that city in the input field and then pressing the "Enter" key. This app is created using Next.js with Typescript for type safety and uses Tailwindcss for styling the application.

Scope for Improvement:-
Currently the app uses query params for searching data but this can reveal your lat and lon. Hence using the Next.js App routers (backend) that info can be hidden.