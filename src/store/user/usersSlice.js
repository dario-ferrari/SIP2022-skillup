import { createSlice } from "@reduxjs/toolkit";
import userDataRaw from "../../assets/users";

const initialState = {
  username: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserData(state, action) {
      console.log(action.payload);
      const user = userDataRaw.find((u) => u.email === action.payload.email);
      state.email = user.email;
      state.username = user.username;
      state.progress = action.payload.progress ?? user.progress;
      state.objectives = action.payload.objectives ?? user.objectives;
      state.tasks = action.payload.tasks ?? user.tasks;
    },
  },
});

export const { loadUserData } = userSlice.actions;
export default userSlice.reducer;
