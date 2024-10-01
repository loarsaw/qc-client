import { LearningPost } from "@/types/types";
import axiosClient from "./axiosInstance";

export const getLearningPost = async (id: string): Promise<LearningPost> => {
  const data: LearningPost = await axiosClient.get(`/get_resources/${id}`);
  return data;
};
