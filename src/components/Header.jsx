import React from "react";
import PropTypes from "prop-types";
import logo from "../picture/logo.png";

function Header({ handleReset }) {
  return (
    <div>
      <a onClick={handleReset}>
        <img src={logo} className="logo" alt="feedback" />
      </a>
    </div>
  );
}

Header.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default Header;
