import React, { useState } from "react";
import logo from "./picture/logo.png";
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

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <div>
        <a>
          <img src={logo} className="logo" alt="feedback" />
        </a>
      </div>
      <h1>Please leave feedback</h1>
      <div className="card">
        <button onClick={() => handleFeedback("good")}>GOOD</button>
        <button onClick={() => handleFeedback("neutral")}>NEUTRAL</button>
        <button onClick={() => handleFeedback("bad")}>BAD</button>
      </div>
      <h2>S T A T I S T I C</h2>
      <p className="read-the-docs">good: {state.good}</p>
      <p className="read-the-docs">neutral: {state.neutral}</p>
      <p className="read-the-docs">bad: {state.bad}</p>
      <p className="read-the-docs">Total feedback: {countTotalFeedback()}</p>
      <p className="read-the-docs">
        Positive feedback percentage: {countPositiveFeedbackPercentage()}%
      </p>
    </>
  );
}

export default App;
