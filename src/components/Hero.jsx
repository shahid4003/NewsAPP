import React, { useState } from "react";
import Header from "./Header";
const Hero = ({ data }) => {
  const [input, setinput] = useState("");
  const handleSearch = () => {
    data(input);
  };
  return (
    <div className="hero-bg h-[80vh]">
      <div className="flex justify-center items-center  w-full h-3/4 flex-col">
        <h1 className="text-white font-bold text-4xl text-center mb-12">
          NewsPulse: Stay Connected, Stay Informed
        </h1>
        <div className="glass-effect">
          <div className="bg-white py-4 px-8 rounded-md ">
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              placeholder="Search Category..."
              className="border outline-none px-4 py-2  rounded-md mr-4"
            />
            <button
              onClick={handleSearch}
              className="bg-[#181818] text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
