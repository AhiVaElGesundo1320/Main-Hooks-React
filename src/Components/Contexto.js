import React from "react";
import { NavLink } from "react-router-dom";
import Captura2 from "../assets/Screenshot 2024-01-10 140114.png";

export const Contexto = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center py-8">
        <h1 className="text-xl">Contexto</h1>
        <p className="text-lg text-center">
          El UseContext se usa cuando se desea pasar a varios componentes
          un/varios estados que cambiara muy seguido, esto para evitar el PROP
          DRILLING
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-lg p-8">
        <ul>
          <li>Primero: Crear un contexto</li>
          <li>
            Segundo: Asignar el contexto a un useContext y usarlo en donde
            quieras {"(controlador de eventos, funciones, etc)"}
          </li>
          <li>
            Tercero: Llamar y darle contexto a los componentes hijos
            envolviendolos en una etiqueta con el nombre del createContext
            seguiodo de un .Provider finalizando con agregarle un valor al
            estado del contexto en la prop value
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-8 sm:flex sm:p-8 ">
        <div>
          <img src={Captura2} alt="imagenImport" width="500px" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p>Aqui Se crea el contexto</p>
          </div>
          <div>Aqui se asgina a un useContext</div>
          <div>
            Aqui se envuelve a los componentes hijos y se le da el nuevo valor
            al estado con value
          </div>
        </div>
      </div>
      <div className="sm:w-full sm:flex sm:flex-row sm:justify-evenly my-3 flex flex-col items-center w-screen">
        <NavLink className='rounded-lg  m-3' style={{backgroundColor:'gray', color:'white'}} to={"/pruebadecontenxto"}>Prueba/Ejemplo de contexto</NavLink>
        <NavLink className='rounded-lg  m-3' style={{backgroundColor:'gray', color:'white'}} to={"/principal"}>Otro ejemplo con contexto</NavLink>
      </div>
    </div>
  );
};
