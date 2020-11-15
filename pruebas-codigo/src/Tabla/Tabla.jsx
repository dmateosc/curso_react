import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import Fila from "./../Fila";
//import { Test } from './Tabla.styles';

const Tabla = (props) => {
  const [rows, setRows] = useState([1]);
  
  const addRow = () => {
    setRows([...rows,rows.length+1]);
  };
  const returnRows = (rows) => {
      return[
      <div >
        <Fila key={rows} serie={rows}></Fila>
        <button onClick={addRow}>Click</button>
      </div>]
    };
  /* setRows(rows.push(
    {numRows: numRows}
  ))*/
  return (<>{ rows.map((rows) => returnRows(rows)) }</>);
};

export default Tabla;
