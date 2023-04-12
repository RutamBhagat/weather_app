import axios from "axios";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  type IPObject = {
    city: string;
    country: string;
    ip: string;
    loc: string;
    org: string;
    postal: string;
    region: string;
    timezone: string;
  };

  const getCity = async () => {
    const res = await axios.get<IPObject>(`https://ipinfo.io/json?token=${process.env.IP_INFO_TOKEN}`);
    console.log("res.data.city", res.data.city);
    redirect(`/weather?city=${res.data.city}`);
  };
  return new Response('Hello, Next.js!')
}
