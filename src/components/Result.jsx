import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Result.module.css';

const Result = () => {
  const results = useSelector(state => state.questionnaire.results);

  return (
    <div className={styles.results}>
      <h3>Results</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.question}: {result.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
