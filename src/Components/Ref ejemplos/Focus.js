import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Captura15 from '../../assets/Screenshot 2024-01-16 134954.png'

export const Focus = () => {
  const inputRef = useRef();

  const onFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.border = "4px solid red";
  };
  return (
    <div className="flex flex-col items-center m-8">
      <NavLink
        style={{ backgroundColor: "gray", color: "white" }}
        className="rounded-lg my-2"
        to={"/ref"}
      >
        Volver
      </NavLink>

        <div>
            <h1>Ejemplo de enfoque a un campo</h1>
            <div className="my-6">
                <p>El useRef  nos permite dar estilos sobre los elementos del DOM accediendo desde su propiedad current, recordar que no es bueno usar esto en exceso</p>
            </div>
            <div  className="my-6">
                <div className="my-3">
                    <img src={Captura15} alt="Captura de ejemepo de Focus"/>
                </div>
                <p>
                    Creamos una funcion onFocus la cual ira en el evento onClick de un button, en esta funcion llamamos a la referencia y con su porpiedad current se le agrega cualquier tipo de evento o propiedad siempre y cuando sea del api interna de React JS
                </p>
            </div>
        </div>

      <div className="flex flex-col">
        <input type="text" ref={inputRef} onFocus={onFocus} />
        <button
          style={{ backgroundColor: "gray", color: "white" }}
          className="rounded-lg my-2"
          onClick={onFocus}
        >
          Focus
        </button>
      </div>
    </div>
  );
};
