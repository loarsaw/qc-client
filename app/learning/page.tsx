"use client";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import Markdown from "react-markdown";

// Define the structure of the data in the Redux state
interface LearningInfoState {
  data: {
    description: string;
    code: string;
  };
}

const LearningPage: React.FC = () => {
  // Select the learningInfo data from the Redux state
  const { data }: LearningInfoState = useAppSelector(
    (state) => state.learningInfo
  );

  return (
    <div className="text-white p-5">
      <div className="flex flex-row">
        <div className="w-[70%]">
          {/* Render the description and code using react-markdown */}
          <Markdown>{data?.description || "No description available"}</Markdown>
          <Markdown>{data?.code || "No code available"}</Markdown>
        </div>
        <div className="w-[30%] h-32">
          <div>
            <p className="text">Useful Links</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
