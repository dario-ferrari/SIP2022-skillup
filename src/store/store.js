import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/usersSlice";
import { userMiddleware } from "./user/userMiddleware";

import authReducer from "./auth/authSlice";
import { authMiddleware } from "./auth/authMiddleware";

import skillReducer from "./skills/skillSlice";
import { skillMiddleware } from "./skills/skillMiddleware";

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    skill: skillReducer,
  },
  middleware: [userMiddleware, authMiddleware, skillMiddleware],
});
