import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3'], answer: null },
    { id: 2, text: 'Question 2', options: ['Option 1', 'Option 2'], answer: null },
    { id: 3, text: 'Question 3', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], answer: null },
  ],
  results: [],
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers: (state) => {
      state.results = state.questions.map(q => ({ question: q.text, answer: q.answer }));
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
