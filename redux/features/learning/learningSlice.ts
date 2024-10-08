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
};

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<LearningState["data"]>) {
      state.data = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setLoading } = learningSlice.actions;

export default learningSlice.reducer;
