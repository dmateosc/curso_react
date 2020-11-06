import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
//import { Test } from './MathOperations.styles';

const MathOperations = ({ onClickOperation, onClickEquals }) => (
  <section className="math-operations">
    <Button  text="+" clickHandler={onClickOperation }></Button>
    <Button  text="-" clickHandler={onClickOperation}></Button>
    <Button  text="*" clickHandler={onClickOperation}></Button>
    <Button  text="/" clickHandler={onClickOperation}></Button>
    <Button  text="=" clickHandler={onClickEquals}></Button>
  </section>

);

MathOperations.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEquals: PropTypes.func.isRequired
};

MathOperations.defaultProps = {
  // bla: 'test',
};

export default MathOperations;
