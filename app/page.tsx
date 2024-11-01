"use client";


import { setProjectId } from "@/redux/features/learning/learningSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import axiosClient from "@/utils/axiosInstance";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { techData } from '@/data/data'
import { setUserData, setUserLoading } from "@/redux/features/userSlice/userSlice";
const Banner: React.FC = () => {
  const [searchString, setSearchString] = useState<string>("");
  const { post_array, isLoading } = useAppSelector((state) => state.content);
  const [, setFilteredArray] = useState([]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useSearchParams()
  useEffect(() => {
    getResources();
  }, []);

  useEffect(() => {
    const token = params.get("token")
    if (token !== null) {
      localStorage.setItem("qc_key", token)
      router.push("/")
    }

  }, [params])

  useEffect(() => {
    if (searchString !== "") {
      const filteredArray = post_array.filter(
        (post: { keywords: string[] }) => {
          return post.keywords.includes(searchString);
        }
      );
      setFilteredArray(filteredArray);
    } else {
      setFilteredArray(post_array);
    }
  }, [searchString, post_array]);

  async function getResources() {
    dispatch(setUserLoading(true))
    try {
      const { data } = await axiosClient.get("/getUser");
      const userData = {
        userName: data.username
      }
      dispatch(setUserData(userData))
      dispatch(setUserLoading(false));
    } catch {
      setUserLoading(false)
    }


  }

  // async function fetchTopics() {
  //   dispatch(setLoading(true));
  //   try {
  //     const data = await axiosClient.post("/get_string", { msg: searchString });
  //     dispatch(setLoading(false));
  //     router.push(`/learning/${data.data.uid}`);
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(setLoading(false));
  //   }
  // }

  return (
    <div className="relative bg-center h-64">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Quick Course</h1>
        <p className="mt-2 text-lg">Choose your learning path</p>
      </div>
      <div className="mb-4">
        <div className="flex justify-center items-center px-2">
          <div className="bg-white flex flex-row justify-between p-4 w-full md:w-[40rem] rounded-full">
            <div className="md:w-[35rem]">
              <input
                type="text"
                className="bg-transparent w-full focus:outline-none"
                placeholder="Search for topic"
                onChange={(e) => setSearchString(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // fetchTopics();
                  }
                }}
              />
            </div>

            <div className="w-[5rem] flex justify-end">
              {isLoading && (
                <svg
                  aria-hidden="true"
                  className="w-6 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 mt-8">
          {techData.map(
            (
              post,
              index
            ) => {

              return (
                <div
                  key={index}
                  className="bg-white relative rounded-lg shadow-md p-4 mt-10 mx-5 md:w-[15rem]"
                >
                  <div>
                    <h2 className="text-md line-clamp-3">{post.title}</h2>
                  </div>
                  <p className="line-clamp-3">
                    {post.description}
                  </p>
                  <div>{post.category}</div>
                  <div className="flex  justify-end text-sm mt-3">
                    <button
                      onClick={() => {
                        dispatch(
                          setProjectId(String(post.id))
                        );
                        localStorage.setItem("asdfqc", String(post.id))
                        router.push("/task")
                      }}
                      className="bg-blue-500 w-full hover:bg-blue-700 hover text-white font-bold py-2 px-4 rounded"
                    >
                      Start Guided Projects
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
