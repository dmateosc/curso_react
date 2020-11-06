import React from "react";
import PropTypes, { number } from "prop-types";
import Button from "../Button";
//import { Test } from './Numbers.styles';

const Numbers = ({ onClickNumber }) => {
  const renderButtons = (onClickNumber) => {
    //var number = 0
    //iterar del 1 al 0
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    return numbers.map((number) => (
      <Button key={number} text={number} clickHandler={onClickNumber}></Button>
    ));
  };

  return <section className="numbers">{renderButtons(onClickNumber)}</section>;
};

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

Numbers.defaultProps = {
  // bla: 'test',
};

export default Numbers;
