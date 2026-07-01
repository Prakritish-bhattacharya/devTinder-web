import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import { User } from "lucide-react";

const appStore = configureStore({
  reducer: {
    User: useReducer,
  },
});

export default appStore;
