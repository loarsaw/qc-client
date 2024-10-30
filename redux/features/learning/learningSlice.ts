import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LearningState {
  data: {
    title: string;
    description: string;
    code: string;
    links: [];
    keywords: [];
  };
  isLoading: boolean;
  project_id: string;
}

const initialState: LearningState = {
  data: {
    title: "",
    code: "",
    description: "",
    links: [],
    keywords: [],
  },
  isLoading: false,
  project_id: "react",
};

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<LearningState["data"]>) {
      state.data = action.payload;
    },
    setProjectId(state, action: PayloadAction<string>) {
      state.project_id = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setLoading , setProjectId} = learningSlice.actions;

export default learningSlice.reducer;
