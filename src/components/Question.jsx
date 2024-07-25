import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';
import styles from './Question.module.css';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const answer = useSelector(state => state.questionnaire.questions.find(q => q.id === question.id).answer);

  const handleAnswer = (option) => {
    dispatch(answerQuestion({ questionId: question.id, answer: option }));
  };

  return (
    <div className={styles.question}>
      <h3>{question.text}</h3>
      <ul>
        {question.options.map(option => (
          <li key={option}>
            <button
              className={`${styles.optionButton} ${answer === option ? styles.selected : ''}`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
