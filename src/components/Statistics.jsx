import React from "react";
import PropTypes from "prop-types";

function Statistics({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <h2>S T A T I S T I C</h2>
      <p className="read-the-docs">good: {state.good}</p>
      <p className="read-the-docs">neutral: {state.neutral}</p>
      <p className="read-the-docs">bad: {state.bad}</p>
      <p className="read-the-docs">Total feedback: {countTotalFeedback()}</p>
      <p className="read-the-docs">
        Positive feedback percentage: {countPositiveFeedbackPercentage()}
      </p>
    </>
  );
}

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};


export default Statistics;
