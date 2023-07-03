import Image from "next/image";
import Logo from "../static/logoLight.webp";

const Banner = () => {
  return (
    <div className="h-max-[10rem] flex items-center justify-center border-y border-black bg-[#1a1919]">
      <div className="max-w-7xl flex-1 flex items-center justify-between">
        <div className="space-y-5 px-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif text-white ">
            Stay Connected.
          </h1>
          <h3 className="text-2xl text-white">
            Discover stories, thinking, and expertise in words.
          </h3>
          {/* <button className="bg-[#3B91F8] text-white py-2 px-4 rounded-full"></button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
