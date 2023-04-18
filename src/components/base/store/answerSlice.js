import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answers",
  initialState: [], // will be an array of answer objects
  reducers: {
    setAnswers: (state, action) => action.payload,
  },
});

export const { setAnswers } = answerSlice.actions;

// Selector for getting all answers
export const selectAnswers = (state) => {
  // console.log("[STATE]",state)
  return state.answer;
};

// Selector for getting a survey by its title
export const selectAnswersBySurveyId = (survey_id) => {
  return (state) =>
    state.answer.find((ans) => ans._id == survey_id);
}


export default answerSlice.reducer;
