import React, { useEffect } from "react";
import { Timer } from "./EfectoTimer/Timer";
import Captura2 from "../assets/Screenshot 2024-01-11 133235.png";
import { NavLink } from "react-router-dom";
//
//const Timer = () => {
//    const [count, setCount] = useState(0);
//    useEffect(() => {
//        const interval = setInterval(() => {
//            setCount(count + 1);
//        }, 1000);
//        return () => clearInterval(interval);
//    },[count]);
//
//    return <h1>El contador {count}</h1>;
//}

export const Efecto = () => {
  useEffect(() => {
    console.log("Efecto"); //se va ejecutar siempre el se renderice el componente
  });

  useEffect(() => {
    console.log("Efecto"); //se va ejecutar siempre solo una vez cuando se renderice el componente
  }, []);

  let value = null;
  useEffect(() => {
    console.log("Efecto"); //se va ejecutar siempre que cambie la dependecia
  }, [value]);

  return (
    <div className="flex flex-col items-center px-2.5">
      <h1 className="py-5">UseEffect</h1>
      <div className="text-left">
        <div>
          <p style={{ backgroundColor: "black", color: "white" }}>
            Los efectos son utiles para cuando se desea realizar o ejecutar un
            bloque de codigo impuro, es decir un bloque de codigo el cual react
            no puede montar o ejecutar por si mismo durante el renderizado, como
            un pedido a un API, etc
          </p>
        </div>
        <div className="py-2.5">
          <p style={{ backgroundColor: "black", color: "white" }}>
            Los useEffects devuelven una funcion de limpieza la cual llamara una
            funcion de limpieza para limpiar el efecto
          </p>
        </div>
        <div className="py-2">
          <p style={{ backgroundColor: "black", color: "white" }}>
            Los useEffects cuentan con un array de dependencias el cual es
            opcional incluirlo en el effecto dependiendo de tres posibles
            situaciones
          </p>
        </div>
      </div>
      <div>
        <div className="flex py-2">
          <div>
            <h3>Sin dependecias:</h3>
          </div>
          <div>
            <p>
              El useEffect se ejecutara siempre que el componente se renderice
            </p>
          </div>
        </div>
        <div className="flex py-2">
          <div>
            <h3>Con dependecias vacias:</h3>
          </div>
          <div>
            <p>
              El useEffect se ejecutara siempre solo una vez cuando se renderice
              el componente
            </p>
          </div>
        </div>
        <div className="flex py-2">
          <div>
            <h3>Con un valor en las dependecias:</h3>
          </div>
          <div>
            <p>Se ejecutara siempre que ese valor cambie</p>
          </div>
        </div>
      </div>
      <div>
        <img src={Captura2} alt="img effect" width="800px" />
      </div>
    <div className="flex flex-col items-center">
      <p>Este Timer es creado a partir de  un efecto</p>
    <Timer />
    <NavLink to={'/timer'}>
      Timer
    </NavLink>
    </div>
    </div>
  );
};
