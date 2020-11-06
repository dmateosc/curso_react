import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button'
//import { Test } from './Functions.styles';

const Functions = ({onClickClear,onClickRemove}) => 
{
  return (
    <section className="functions">
      <Button type="button-long-text" text="clear" clickHandler={onClickClear}></Button>
      <Button type="button-long-text" text="&larr;" clickHandler={onClickRemove}></Button>

    </section>
  )
}
;

Functions.propTypes = {
  onClickClear: PropTypes.func.isRequired
  ,onClickRemove: PropTypes.func.isRequired

};

Functions.defaultProps = {
  // bla: 'test',
};

export default Functions;
