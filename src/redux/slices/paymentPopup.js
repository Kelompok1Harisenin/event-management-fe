import { createSlice } from "@reduxjs/toolkit";
const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isPopupVisible: false,
  },
  reducers: {
    setPopupVisible: (state, action) => {
      state.isPopupVisible = action.payload;
    },
  },
});

export const { setPopupVisible } = popupSlice.actions;
export default popupSlice.reducer;
