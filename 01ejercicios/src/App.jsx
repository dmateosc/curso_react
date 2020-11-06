//importación
import React from "react";
import "./App.css";
import MathOperations from "./components/MathOperations/MathOperations";
import Result from "./components/Result/Result";
import Numbers from "./components/Numbers/Numbers";
import Functions from "./components/Functions/Functions";
//generación de la función del componente
const App = () => {
  //Lo que ejecuta la función

  console.log("Iniciio de la app");
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <Numbers onClickNumber={(operation) => console.log(operation)} />
      <Functions
        onClickClear={(operation) => console.log(operation)}
        onClickRemove={(operation) => console.log(operation)}
      ></Functions>

      <MathOperations
        onClickOperation={(operation) => console.log(operation)}
        onClickEquals={(equals) =>
          console.log("esto es la operacion de equal", equals)
        }
      />
    </main>
  );
};

//exportación
export default App;
