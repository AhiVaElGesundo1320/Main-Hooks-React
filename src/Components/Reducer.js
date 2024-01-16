import React from "react";
import { NavLink } from "react-router-dom";
import Captura8 from "../assets/Screenshot 2024-01-12 101156.png";
import Captura9 from "../assets/Screenshot 2024-01-12 114137.png";

export const Reducer = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-xl">useReducer</h1>
      <div className="p-8 text-lg">
        <p>
          El use Reducer, se utiliza para manejar estados complejos, este mismo
          nos devuelve un array con un dos valores, una funcion dispatch, un
          state, y el Reducer nps devuelve una funcion con dos parametrosn un
          state y un action o bien el reducer nos devuelve una funcion
          reductora, un valor por el cual se calcula el estado inical, y una
          función de inicializador que debe devolver el estado inicial
        </p>
      </div>
      <div className="flex flex-col py-0">
        <div className="flex flex-col items-center py-3">
          <img src={Captura8} alt="img de reducer" />
          <p>Esta es la manera tradicional</p>
        </div>
        <div className="text-lg py-3">
          <p>-El State, supondra que es nuestro estado actual </p>
          <p>
            -La funcion Dispatchn es nuestra funcion que cambiara el estado en
            un evento
          </p>
          <p>
            -En el useReducer, no devuelve la funcion reductora, entre llaves el
            estado inicial, y opciobnalmente una funcion de incializacion
          </p>
          <p>
            -La funcion handleEventControllerFunction es donde aplicaremos la
            logica dentro de dispatch, el cual contara con un un objeto con una
            propieda action, en donde ira el nombre de la funcion que se llevara
            a cabo, y seguido ira la logica para poder realizar esa logica
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <p>
          <b>Una manera diferente es la siguiente</b>
        </p>
        <div>
          <img src={Captura9} alt="segunda imagen reducer" className="py-3"/>
        </div>
        <div className="py-8">
          <p>-El Array es igual nada cambia</p>
          <p>
            -El cambio viene en el Reducer, ya que este mismo nos devuelve una
            funcion para usarla como funcion reductora, solo agragemos el estado
            inicial y un action como parametros
          </p>
        </div>
      </div>
      <div>
        <img />
        <p>Ejemplo:</p>
      </div>
      <NavLink className='rounded-lg w-48 text-center' style={{ border: "gray 2px solid",  backgroundColor:'gray', color:'white'}} to={"/taskList"}>
        TaskList
      </NavLink>
    </div>
  );
};
