"use client";
import axiosClient from "@/utils/axiosInstance";
import React, { use, useState } from "react";

const Banner: React.FC = () => {
  const [searchString, setSearchString] = useState<string>();
  async function fetchTopics() {
    const data = await axiosClient.post("/get_string", { msg: searchString });
   
  }
  return (
    <div
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Quick Course</h1>
        <p className="mt-2 text-lg">Choose your learning path</p>
      </div>
      <div className="mb-4">
        <div className="flex justify-center items-center">
          <div className="bg-white flex flex-row justify-between p-4 w-[40rem] rounded-full">
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none"
              placeholder="Search for topic"
              onChange={(e) => setSearchString(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchTopics();
                  // console.log("PRessed");
                }
              }}
            />
            {/* <div className="bg-blue-400 w-14 flex  rounded-full"> */}
            {/* <button>GO</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <CardGrid />
      </div> */}
    </div>
  );
};

export default Banner;

const CardGrid: React.FC = () => {
  const cards = [
    {
      title: "Data Structure and Algorithm",
      description: "Description for card 1",
    },
    { title: "Python", description: "Description for card 2" },
    { title: "", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white flex  flex-col justify-between rounded-lg shadow-md p-4 h-[15rem] w-48"
        >
          <div>
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="mt-2">{card.description}</p>
          </div>
          <div className="bottom-0">
            <div className="bg-gray-400 p-2 rounded-lg text-white text-center">
              Start
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// const Page: React.FC = () => {
//   return (
//     <div>
//       <Banner />
//       <CardGrid />
//     </div>
//   );
// };

// export default Page;
