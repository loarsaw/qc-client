"use client";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import Markdown from "react-markdown";
import ThumbsUp from "@/components/svg/thumbsup";
import Thumbsdown from "@/components/svg/thumbsdown";
interface LearningInfoState {
  data: {
    title: string;
    description: string;
    code: string;
    links: [];
  };
}

const LearningPage: React.FC = () => {
  const { data }: LearningInfoState = useAppSelector(
    (state) => state.learningInfo
  );
  return (
    <div className="text-white p-5">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[70%] w-[100%] p-3">
          {/* Render the description and code using react-markdown */}
          <div className="text-xl font-semibold">
            <h1>{data?.title || "No Title Available"}</h1>
          </div>
          <div className="w-full flex flex-row justify-end px-4 space-x-3">
            <div className="text-white">
              <ThumbsUp />
            </div>
            <div>
              <Thumbsdown />
            </div>
          </div>
          <Markdown>{data?.description || "No description available"}</Markdown>
          <Markdown>{data?.code || "No code available"}</Markdown>
        </div>
        <div className="md:w-[30%] w-full p-3 h-32">
          <div>
            <p className="text">Useful Links</p>
          </div>
          <div>
            {data.links.map((link: string, index: number) => (
              <p key={index} className="text-wrap">
                <a
                  target="_blank"
                  key={index}
                  href={link}
                  className="text-blue-500"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
