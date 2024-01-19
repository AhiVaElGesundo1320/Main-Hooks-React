import React from "react";
import { Hijo } from "./Hijo";
import { UserProvider } from "./UserProvider";
import Imagen7 from "../../assets/Screenshot 2024-01-19 113519.png";
import Imagen8 from "../../assets/Screenshot 2024-01-19 113921.png";
import Imagen9 from "../../assets/Screenshot 2024-01-19 114328.png";
import Imagen10 from "../../assets/Screenshot 2024-01-19 114607.png";
import Imagen11 from "../../assets/Screenshot 2024-01-19 115414.png";
import Imagen12 from "../../assets/Screenshot 2024-01-19 115842.png";
import { NavLink } from "react-router-dom";

export const PruebaDeContexto = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div>
        <NavLink
          className="rounded-lg"
          style={{ backgroundColor: "gray", color: "white" }}
          to={"/contexto"}
        >
          Volver
        </NavLink>
      </div>
      <h1>Prueba de useContext con un provider y customHook</h1>
      <div className="my-8">
        <p>
          En esta Prueba basica se mostrara como hacer de un useContext un
          codigo mas limpio y elegante
        </p>
        <p>
          Podemos en un componente por aparte crear nuestro provider, es decir
          el componente que va propinar nuestro contexto a los componentes{" "}
        </p>
      </div>
      <div className="mx-8">
        <div className="my-5">
          <div>
            <img src={Imagen7} alt="Context example" />
          </div>
          <div>
            <p>Primero comenzamos creando los contextos</p>
          </div>
        </div>
        <div className="my-5">
          <div>
            <img src={Imagen8} alt="example context" />
          </div>
          <div>
            <p>
              Seguido creamos dos funciones o customHooks para esos contextos
              creados y adentros los asignaremos a un useContext para poder ser
              utilizados
            </p>
          </div>
        </div>
        <div className="my-5">
          <div>
            <img src={Imagen9} alt="Context example" />
          </div>
          <div>
            <p>
              Debido a que este ejemplo requerira de un contexto lo creamos y en
              una funcion para un controlador de eventos agregaremos codigo{" "}
            </p>
          </div>
        </div>
        <div className="my-5">
          <div>
            <img src={Imagen10} alt="Example context" />
          </div>
          <div>
            <p>
              Por ultimo Returnamos las funciones o customHooks envolivendo a un
              children el cual se traera de las props, estos custom hooks se les
              agreagara el estado/valor en su propiedad value, al primer context
              padre se le dara el estado del usestate como value, y al otro
              context userToggleContextMenu se le dara la funcion controladora
              de eventos como value
            </p>
          </div>
        </div>
        <div className="my-8">
          <p>
            <b>app.js</b>
          </p>
          <img src={Imagen11} alt="Example context" className="mb-8" />
          <p>
            <b>Hijo.js</b>
          </p>
          <img src={Imagen12} alt="Example context" />
        </div>
        <div>
          <p>
            Para finalizar se importa el provider al componente donde deseamos
            renderizarlo
          </p>
        </div>
      </div>
      <div className="my-8">
        <UserProvider>
          <Hijo />
        </UserProvider>
      </div>
    </div>
  );
};
