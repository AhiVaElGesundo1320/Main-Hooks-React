import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Captura16 from "../../assets/Screenshot 2024-01-16 140117.png";
import Captura17 from '../../assets/Screenshot 2024-01-16 142140.png'

export const Mensaje = () => {
  const prevMessageRef = useRef("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    prevMessageRef.current = message;
  }, [message]);

  const changeMessage = (e) => {
    console.log("Mensaje");
    setMessage(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <NavLink
        style={{ backgroundColor: "gray", color: "white" }}
        className="rounded-lg my-2"
        to="/ref"
      >
        Volver
      </NavLink>
      <div className="flex flex-col items-center m-8">
        <h1>Mensaje</h1>
        <div>
          <p>
            Usando el useState y el useEffect junto con el useRef se pueden
            hacer cosas interesantes, la ventaja del useRef es que al persistir
            entre renderizados puede memorizar ciertos valores
          </p>
        </div>
        <div className="flex">
          <img src={Captura16} alt="Captura de mensajes" />
          <div className="flex flex-col justify-between ">
            <p>
              Primero declaramos el estado y la referencia, ambos con un string
              vacio como estado incial
            </p>
            <p>
              Seguido en el useEffect llamamos a la referencia con su debida
              propiedad current, esta referencia sera igual al estado, este
              ultimo lo estableceremos como dependencia ya que queremos que se
              ejecute el efecto cada que el estado cambie{" "}
              {
                "(recordar que el efecto se ejecuta despues de cada renderizado)"
              }
            </p>
            <p>
              Por ultimo en la funcion controladora se llama a la funcion
              actualizadora del estado y se pone e.target.value ahi, esto para
              tomar el texto actual en el campo de entrada
            </p>
          </div>
        </div>
        <div className="flex flex-row m-9">
            <img src={Captura17} alt="captura de message"/>
            <div className="flex flex-col justify-center">
                <p>
                    Finalmente se llama la funcion dentro de un onChange
                </p>
            </div>
        </div>
      </div>
      <div className="my-9">
        <input
          style={{ border: "black 2px solid" }}
          type="text"
          onChange={changeMessage}
          placeholder="escrbi algo"
        />
        <p>Mensaje: {message}</p>
        <p>Mensaje Previo: {prevMessageRef.current}</p>
      </div>
    </div>
  );
};
