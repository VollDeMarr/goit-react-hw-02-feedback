import { Component } from 'react';
import styles from './Counter.module.css';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = event => {
    // console.log(event)
    // console.log(event.target.innerText.toLowerCase());
    // const currentKey = event.target.innerText.toLowerCase()
    // console.log(Object.keys(this.state))

    this.setState(current => {
      return {
        good: current.good + 1,
      };
    });
  };

  incrementNeutral = () => {
    this.setState(current => {
      return {
        neutral: current.neutral + 1,
      };
    });
  };

  incrementBad = () => {
    this.setState(current => {
      this.countTotalFeedback();
      return {
        bad: current.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    // return this.state.good + this.state.neutral + this.state.bad;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state
    return Math.floor((good / (good + neutral + bad)) * 100)
  };

  render() {
    return (
      <div className={styles.counter}>
        <h1>Please leave feedback</h1>
        <div>
          <button
            className={styles.btn}
            type="button"
            data="good"
            onClick={this.incrementGood}
          >
            Good
          </button>
          <button
            className={styles.btn}
            type="button"
            data="neutral"
            onClick={this.incrementNeutral}
          >
            Neutral
          </button>
          <button
            className={styles.btn}
            type="button"
            onClick={this.incrementBad}
          >
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <span className={styles.span}>Good: {this.state.good}</span>
          <span className={styles.span}>Neutral: {this.state.neutral}</span>
          <span className={styles.span}>Bad: {this.state.bad}</span>
          <span className={styles.span}>Total: {this.countTotalFeedback()}</span>
          <span className={styles.span}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span>
        </div>
      </div>
    );
  }
}

export default Counter;

// export default class App extends Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

//     render() {
//       return ;
//     }
//   }

//tttttttttttjg
