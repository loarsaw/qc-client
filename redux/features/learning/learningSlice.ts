import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LearningState {
  data: {
    description: string;
    code: string;
  };
  isLoading: boolean;
}

const initialState: LearningState = {
  data: {
    code: "",
    description: "",
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
