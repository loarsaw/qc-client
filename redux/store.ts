import { configureStore } from "@reduxjs/toolkit";
import LearningReducer from "@/redux/features/learning/learningSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      learningInfo: LearningReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
