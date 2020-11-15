import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Fila.styles';

const Fila = ({serie}) => (
 <>
 <span>{`Serie nº ${serie}`}</span>
 <form action="">
  <label htmlFor="">Peso </label><input type="text" placeholder="Añade el peso"/>
  <label htmlFor="">Repeticion </label><input type="text" placeholder="Añade las repeticiones"/>

 </form>
 </>
);

Fila.propTypes = {
  // bla: PropTypes.string,
};

Fila.defaultProps = {
  // bla: 'test',
};

export default Fila;
