import React from "react";
import PropTypes from "prop-types";

function FeedbackButtons({ handleFeedback }) {
  return (
    <div className="card">
      <button onClick={() => handleFeedback("good")}>GOOD</button>
      <button onClick={() => handleFeedback("neutral")}>NEUTRAL</button>
      <button onClick={() => handleFeedback("bad")}>BAD</button>
    </div>
  );
}

FeedbackButtons.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
