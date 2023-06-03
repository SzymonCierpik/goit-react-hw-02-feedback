import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackButtons from "./components/FeedbackButtons";
import Statistics from "./components/Statistics";
import "./App.css";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const handleReset = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    if (total === 0) {
      return "No feedback";
    }
    return Math.round((good / total) * 100) + "%";
  };

  return (
    <>
      <Header handleReset={handleReset} />
      <h1>Please leave feedback</h1>
      <FeedbackButtons handleFeedback={handleFeedback} />
      <Statistics
        state={state}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
}

export default App;
