import { createSlice } from "@reduxjs/toolkit";

const persistedUser = JSON.parse(localStorage.getItem("user")) || null;

const initialState = persistedUser || null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => null,
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
