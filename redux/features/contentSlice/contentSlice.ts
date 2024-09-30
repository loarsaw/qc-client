import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LearningState {
  data: {
    msg: string;
  };
  post_array: [];
  isLoading: boolean;
}

const initialState: LearningState = {
  data: {
    msg: "",
  },
  post_array: [],
  isLoading: false,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<LearningState["data"]>) {
      state.data = action.payload;
    },
    setPostArray(state, action: PayloadAction<LearningState["post_array"]>) {
      state.post_array = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setLoading, setPostArray } = contentSlice.actions;

export default contentSlice.reducer;
