import { configureStore } from "@reduxjs/toolkit";
import LearningReducer from "@/redux/features/learning/learningSlice";
import ContentReducer from "@/redux/features/contentSlice/contentSlice";
import UserReducer from "@/redux/features/userSlice/userSlice";
import ModalReducer from "@/redux/features/modal/modalSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      learningInfo: LearningReducer,
      content: ContentReducer,
      modal: ModalReducer,
      user: UserReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
