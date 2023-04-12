import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "surveys",
  initialState: [], // will be an array of survey objects
  reducers: {
    setSurveys: (state, action) => action.payload,
  },
});

export const { setSurveys } = surveySlice.actions;

// Selector for getting all surveys
export const selectSurveys = (state) => {
//   console.log("[STATE]",state)
  return state.survey;
};

// Selector for getting a survey by its title
export const selectSurveyById = (id) => (state) =>
  state.surveys.find((survey) => survey._id === id);

export default surveySlice.reducer;
