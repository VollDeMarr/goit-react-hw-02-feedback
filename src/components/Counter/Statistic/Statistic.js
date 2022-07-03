import React from 'react';
import styles from '../Counter.module.css'
const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
  <div>
    <h2>Statistics</h2>
    <span className={styles.span}>Good: {good}</span>
    <span className={styles.span}>Neutral: {neutral}</span>
    <span className={styles.span}>Bad: {bad}</span>
    <span className={styles.span}>Total: {total}</span>
    <span className={styles.span}>
      Positive feedback: {positivePercentage}%
    </span>
  </div>;
};
export default Statistic