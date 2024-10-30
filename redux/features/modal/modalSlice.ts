import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { setModal } = contentSlice.actions;

export default contentSlice.reducer;
