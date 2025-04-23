import { useState } from "react";
import style from './App.module.css'

function App() {
  //vamos a crear una app pequeña para practicar la desestructuración de los objetos
  const [count, setCount] = useState(0); //acá desestructuramos un objeto

  return (
    <>
      <div className={style.mainContainer}>
        <h1>Contador</h1>
        <div className={style.card}>
          <p> Contador: {count}</p>
          <button onClick={() => setCount(count + 1)} className={style.buttonCard} >SUMAR</button>
          <button onClick={() => setCount(0)} className={style.buttonCard} >RESET</button>

        </div>
      </div>
    </>
  );
}

export default App;
