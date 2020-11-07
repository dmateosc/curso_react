/*eslint no-eval:0*/
//importación
import React, { useState } from "react";
import words from "lodash.words";
import "./App.css";
import MathOperations from "./components/MathOperations/MathOperations";
import Result from "./components/Result/Result";
import Numbers from "./components/Numbers/Numbers";
import Functions from "./components/Functions/Functions";
//generación de la función del componente
const App = () => {
  //Lo que ejecuta la función
  //1a posición: valor (que inicialmente es el valor por defecto)
  //2a posición: función que me va a permitir cambiar el valor
  //[xxx], [setxxx]
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  return (
    <main className="react-calculator">
      <Result value={items.length > 0 ? items[items.length - 1] : "0"} />
      <Numbers
        onClickNumber={(number) => {
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onClickClear={(operation) => {
          setStack("");
        }}
        onClickRemove={(operation) => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      ></Functions>

      <MathOperations
        onClickOperation={(operation) => {
          setStack(`${stack}${operation}`);
        }}
        onClickEquals={(equals) => {
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

//exportación
export default App;
