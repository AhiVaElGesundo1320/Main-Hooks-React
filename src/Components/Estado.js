import React from "react";
//import { useForm } from "react-hook-form";
//import { PropsEstado } from "./Estado Props/PropsEstado";
import { NavLink } from "react-router-dom";
import Captura4 from '../assets/Screenshot 2024-01-11 151335.png'



export const Estado = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-xl">useState</h1>
      <div>
        <p className="text-lg text-left py-5">
          El estado es la manera en que se almacena informacion o datos de un
          componente
        </p>
      </div>
      <div className="text-lg text-center py-3">
        <p>
          El useState nos devuelve{"(retorna)"} un array destructurado con dos
          valores state y setState{" "}
          {
            "(se les puede nombrar como queramos siempre y cuando se llamen igual)"
          }{" "}
          el state es igual al valor actual del estado y el setState es donde se
          actualizara el estado
        </p>
        <div className="flex flex-col items-center py-3">
          <p>
            <img src={Captura4} alt ='img state'/>
          </p>
        </div>
      </div>
      <div>
        <p>Ejemplos</p>
      </div>
      <div  className="flex flex-row justify-evenly w-screen">
      <NavLink style={{color:'gray'}} to={"/loginSingin"}>Login and Sing</NavLink>
      <NavLink style={{color:'gray'}} to={'/counter'}>Counter</NavLink>
      </div>
    </div>
  );
};
