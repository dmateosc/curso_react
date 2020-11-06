import React from "react";
import PropTypes from "prop-types";
import './Button.css';
//import { Test } from './Button.styles';

const Button = ({ type, text, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
