"use client";
import { useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import * as projects from '@/data/data'
import axiosClient from "@/utils/axiosInstance";

const LearningPage: React.FC = () => {
  const [projectList, setProjectList] = useState<any[]>([])
  const [projectDetails, setProjectDetails] = useState<{
    id: string,
    projectName: string,
    description: string,
    category: string,
    learnt: string[],
    // requirements: string[]
  }>()
  const { project_id }: { project_id: string } = useAppSelector(
    (state) => state.learningInfo
  );
  function _filterProject() {
    switch (project_id) {
      case "1": setProjectList(projects.reactProjects); break;
      case "2": setProjectList(projects.vueProjects); break;
      case "3": setProjectList(projects.vueProjects); break;
      case "4": setProjectList(projects.nodejsProject); break;
      case "7": setProjectList(projects.nextjsProjects); break;
      case "6": setProjectList(projects.djangoProjects); break;
      case "11": setProjectList(projects.electonProjects); break;
      case "13": setProjectList(projects.pythonProjects); break;
    }
  }
  useEffect(() => {
    _filterProject()
  }, [project_id])

  useEffect(() => {
    setProjectDetails(projectList[0])
  }, [projectList])
  // console.log(projectDetails, projectList, project_id)

  async function startProjects() {
    const data = await axiosClient.post("/create_repository", {})
    console.log(data)
  }

  return (
    <div className="text-white p-5">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[70%] w-[100%] p-3">
          {/* Render the description and code using react-markdown */}
          <div className="space-y-3">
            <h1 className="text-3xl">Project Bucket</h1>
          </div>
          <div className="text-2xl italic mt-3 ">
            <p>{projectDetails?.projectName}</p>
          </div>
          <div className="mt-5 text-xl space-y-3">
            <div className="font-sans font-bold">Description</div>
            <div>
              {projectDetails?.description}
            </div>
            <div>
              <div className="font-bold text-xl">
                Requirements
              </div>
              <div>

                {projectDetails?.learnt.map((link: string, index: number) => (
                  <p key={index} className="text-wrap text-white">
                    <p className="text-white">
                      {link}
                    </p>
                  </p>

                ))
                }
              </div>
            </div>
            <div
              onClick={startProjects}
              className="w-[10rem] p-4 rounded-md items-center justify-center bg-blue-400">Start Project</div>
          </div>
        </div>

        <div className="md:w-[30%] w-full p-3 h-32">
          <div>
            <p className="text-xl font-bold">Submissions</p>
          </div>
          <div>
            No Submissions Yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
