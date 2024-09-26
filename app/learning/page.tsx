"use client";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import { sanitize } from "isomorphic-dompurify";
import Markdown from "react-markdown";
const LearningPage: React.FC = () => {
  const { data }: any = useAppSelector((state) => state.learningInfo);
  const elements = [
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
  ];
  // console.log(JSON.parse(data.msg));
  console.log(typeof data);

  return (
    <div className="text-white p-5">
      <div className="flex items-center">
        <div>
          {/* <p
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: sanitize(data.description) }}
          ></p> */}
          <Markdown>{data.description}</Markdown>
        </div>
      </div>
      <div className="flex flex-row mt-5">
        <Markdown>{data.code}</Markdown>
      </div>
    </div>
  );
};

export default LearningPage;
