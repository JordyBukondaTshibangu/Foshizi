import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import surveyReducer from "./surveySlice"
import answerReducer from "./answerSlice"

const store = configureStore({
  reducer: {
    user: authReducer,
    survey:surveyReducer,
    answer:answerReducer
  },
});

export default store;
