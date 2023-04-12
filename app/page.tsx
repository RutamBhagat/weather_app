import { Inter } from "next/font/google";
import Search from "./components/Search";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#43aefc] w-full min-h-screen flex justify-center items-center">
      <article className="max-w-sm w-full shadow-lg duration-300 hover:shadow-sm flex-none" key={"key"}>
        <div className="bg-white shadow rounded-lg">
          <div className="flex items-center border-0 border-b-2">
            <h3 className="text-lg text-[#43aefc] font-semibold px-6 py-3 w-full">Weather App</h3>
          </div>
          <div className="space-y-5 p-6">
            <Search />
            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="w-fit text-sm bg-white text-gray-500 px-2 absolute -top-2 inset-x-0 mx-auto">or</p>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#43aefc] hover:bg-[#1672b4] rounded-md duration-150">
              Get Device Location
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
