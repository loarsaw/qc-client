import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInterface {
  data: {
    userName: string;
  };
  isLoading: boolean;
}

const initialState: UserInterface = {
  data: {
    userName: "",
    // msg: "",
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserInterface["data"]>) {
      state.data = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setUserData, setLoading } = userSlice.actions;

export default userSlice.reducer;
