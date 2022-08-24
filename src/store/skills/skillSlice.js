import { createSlice } from "@reduxjs/toolkit";
import skillsRaw from "../../assets/skills";

const initialState = {
  skills: skillsRaw,
};

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    createSkill(state, action) {
      state.skills = state.skills.concat(action.payload);
    },
  },
});

export const { createSkill } = skillSlice.actions;
export default skillSlice.reducer;
