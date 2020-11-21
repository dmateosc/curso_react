import React, { useState } from "react";
import Fila from "./../Fila";
//import { Test } from './Tabla.styles';

const Tabla = (props) => {
  const [rows, setRows] = useState([1]);
  

  const addRow = () => {
    setRows([...rows, rows.length + 1]);
  };
  const deleteRow = (rowValue) => {
      
      const rowArr = rows.filter(i => i !== rowValue);
      setRows(rowArr);
  };
  const returnRows = (rowsValue) => {
    /*var clickAniadir = (
      <div>
        <Fila key={rowsValue} serie={rowsValue}></Fila>
        <button onClick={addRow}>Click</button>
      </div>
    );*/
    var aniadir = (
      <div>
        <Fila key={rowsValue} serie={rowsValue}></Fila>
      </div>
    );
    //IMportante se añade el onclick con () para que la función solo pueda ser llamada una vez has clickado
    var clickBorrar = (
      <div>
        <Fila key={rowsValue} serie={rowsValue}></Fila>
        <button onClick={addRow}>Click</button>
        <button onClick={() => deleteRow(rowsValue)}>Borrar</button>
      </div>
    );
    if (rowsValue === rows.length) {
      return [clickBorrar];
    } else {
      return [aniadir];
    }
  };
  /* setRows(rows.push(
    {numRows: numRows}
  ))*/
  if (rows.length < 1 || rows.length === undefined) {
    return <></>;
  } else {
    return (<>{rows.map((rows) => returnRows(rows))}</>);
  }
};

export default Tabla;
