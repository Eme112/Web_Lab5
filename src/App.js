import './App.css';
import React, { useEffect, useState } from "react";

function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  const [temperatureColor, setTemperatureColor] = useState('cold')
  const [temperatureValue, setTemperatureValue] = useState(10)
  
// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura. 
  
// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'
  function updateColor() {
    if(temperatureValue >= 20) {
      setTemperatureColor('hot')
    } else {
      setTemperatureColor('cold')
    }
  }

// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={()=>setTemperatureValue((prev)=>{
          updateColor()
          if(prev < 30)
            return prev+1
          else
            return prev
        })}>+</button>
        <button onClick={()=>setTemperatureValue((prev)=>{
          updateColor()
          if(prev > 0)
          return prev-1
        else
          return prev
        })}>-</button>
      </div>
    </div>
  );
}

export default App;
