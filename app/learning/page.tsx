"use client";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import Markdown from "react-markdown";
const LearningPage: React.FC = () => {
  const { data }: any = useAppSelector((state) => state.learningInfo);
  
  return (
    <div className="text-white p-5">
      <div className="flex flex-row">
        <div className="w-[70%]">
          <Markdown>{data.description}</Markdown>
          <Markdown>{data.code}</Markdown>
        </div>
        <div className="w-[30%] h-32">
          <div>
            <p className="text">
              Useful Links
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
