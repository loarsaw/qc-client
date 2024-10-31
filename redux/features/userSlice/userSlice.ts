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

    setUserLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setUserData, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
