"use client";

import {
  setLoading,
  setPostArray,
} from "@/redux/features/contentSlice/contentSlice";
import { setData } from "@/redux/features/learning/learningSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import axiosClient from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Banner: React.FC = () => {
  const [searchString, setSearchString] = useState<string>();
  const { post_array } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    getResources();
  }, []);

  async function getResources() {
    const data = await axiosClient.get("/get_resources");
    dispatch(setPostArray(data.data));
    dispatch(setLoading(false));
  }

  async function fetchTopics() {
    const data = await axiosClient.post("/get_string", { msg: searchString });
    if (typeof data.data.msg === "object") {
      dispatch(setData(data.data.msg));
      router.push("/learning");
    } else {
      const re_parsed = JSON.parse(data.data.msg);
      console.log(typeof re_parsed);
    }
  }

  console.log(post_array, "HU");
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
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 mt-8">
          {post_array.map(
            (post: { msg: string; links: []; keywords: [] }, index) => {
              const matches = post.msg.match(/\*\*(.*?)\*\*/g) || [];
              const title = matches
                .map((match: string) => match.slice(2, -2))
                .join(" ");
              return (
                <div
                  key={index}
                  className="bg-white mt-3 mx-2 flex flex-col justify-between rounded-lg shadow-md p-4 h-full w-48"
                >
                  <div>
                    <h2 className="text-md line-clamp-3">{title}</h2>
                  </div>
                  <div className="flex justify-end text-sm mt-3">
                    <button
                      onClick={() => {
                        dispatch(
                          setData({
                            description: post.msg,
                            code: "",
                            title: title,
                            links: post.links,
                            keywords: post.keywords,
                          })
                        );
                        router.push(`/learning`);
                      }}
                      className="bg-blue-500 w-full hover:bg-blue-700 hover text-white font-bold py-2 px-4 rounded"
                    >
                      Learn
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
