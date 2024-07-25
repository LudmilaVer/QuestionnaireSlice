import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './components/Question';
import Result from './components/Result';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import styles from './App.module.css';

const App = () => {
  const questions = useSelector(state => state.questionnaire.questions);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Questionnaire</h1>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
      <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
      <Result />
    </div>
  );
};

export default App;
