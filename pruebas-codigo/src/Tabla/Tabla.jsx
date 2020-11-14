import React, { useState } from "react";
import PropTypes from "prop-types";
import Fila from "./../Fila";
//import { Test } from './Tabla.styles';

const Tabla = (props) => {
  const addRow = () => {
    setRows(rows.push({ numRows: numRows + 1 }));
    setNumRows(numRows + 1);
  };

  const [rows, setRows] = useState([]);
  const [numRows, setNumRows] = useState(1);

  const returnRows = () => {
    rows.map(
      <div>
        <Fila></Fila>
        <button onClick={() => addRow}>Click</button>
      </div>
    );
  };

  setNumRows(numRows + 1);
  setRows((rows) => [...rows, [{ numRows: numRows }]]);
  /* setRows(rows.push(
    {numRows: numRows}
  ))*/
  return { returnRows };
};

export default Tabla;
