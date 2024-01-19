import React, { createContext, useState } from "react";
import { Form } from "./Form";
import { NavLink } from "react-router-dom";
import Imagen1 from "../../../assets/Screenshot 2024-01-18 160628.png";
import Imagen2 from "../../../assets/Screenshot 2024-01-18 161617.png";
import Imagen3 from "../../../assets/Screenshot 2024-01-18 162205.png";
import Imagen4 from "../../../assets/Screenshot 2024-01-18 162611.png";
import Imagen5 from "../../../assets/Screenshot 2024-01-18 163025.png";
import Imagen6 from "../../../assets/Screenshot 2024-01-18 163529.png";

export const ThemeContext = createContext(null);

export const Principal = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex flex-col items-center m-8">
      <NavLink className='rounded lg' style={{backgroundColor:'gray', color:'white'}}to={"/contexto"}>Volver</NavLink>
      <div className="flex flex-col items-center my-5">
        <h1>Ejemplo</h1>
        <div>
          <p>
            En este ejemplo crearemos varios componentes los cuales dependeran o
            necesitaran de un mismo estado, es por eso que usamos el useContext
            para asi envolver al Componente que renderiza el resto de
            componentes y hacer darle el contexto requerido a esos otros
            componentes{" "}
          </p>
          <div className="flex flex-row justify-evenly my-8">
            <div >
              <img src={Imagen1} alt="imagen de context" />
            </div>
            <div>
              <p>
                -Empezamos por crear un componente Button el cual funcionara
                como una etiqueta button
              </p>
              <p className="my-2">
                -Luego creamo un componente Form el cual almacenara el
                formulario
              </p>
              <p className="my-2">
                -Luego un componente Panel sera el cual funcionara como una
                etiqueta section o un div
              </p>
              <p className="my-2">
                -Para finalizar un Componente Main el que sera donde se
                rederizaran los componentes anteriores,{" "}
                {"(Puede ser su archivo app.js)"}
              </p>
            </div>
          </div>
          <div>
            <h3>
              <b>Componente Button</b>
            </h3>
            <div>
              <img src={Imagen2} alt="button component" />
              <div>
                <div className="flex flex-col items-center my-5">
                  <p>
                    Aqui le asignamos al contexto creado {"(createContext)"}{" "}
                    llamado themeContext una variable theme esto dentro de un
                    useContext, seguido agregamos algo de logica
                  </p>
                </div>
                <div className="flex flex-col items-center my-5">
                  <p>
                    <small>
                      EL contexto se crea en el componente donde se traeran los
                      demas componentes para envolverlo con su contexto, este
                      contexto creado se debe exportar
                    </small>
                  </p>
                  <img src={Imagen3} alt="imagen de createcontext" />
                </div>
                <h3>
                  <b>Componente Form</b>
                </h3>
                <div>
                  <img src={Imagen4} alt="form component" />
                  <div className="flex flex-col items-center my-5">
                    <p>
                      Aqui traemos dentro de una etiqueta form el componente ya
                      creado {"<Button>"} y el componente por crear {"<Panel>"}
                    </p>
                  </div>
                </div>
                <div className="my-5">
                  <h3>
                    <b>Componente Panel</b>
                  </h3>
                  <img src={Imagen5} alt="panel component" />
                  <div className="flex flex-col items-center">
                    <p>
                      Aqui a una variable theme le damos el valor del contexto
                      creado dentro de un useContext, y se le da un poco de
                      logica
                    </p>
                  </div>
                </div>
                <div className="my-8">
                  <h3>
                    <b>Componente Main/Principal o app.js</b>
                  </h3>
                  <div>
                    <img src={Imagen6} alt="main component" />
                  </div>
                  <div>
                    <p>
                      -En este Componente se renderizaran todos los componentes
                      es por eso que es el lugar perfecto para envolver todos
                      nuestros componentes que requieran de un contexto
                    </p>
                    <p>
                      -Esto se hace envolviendo los componentes en una etiqueta
                      con el nombre del contexto seguido de un .Provider, y
                      dandole su valor incial de estado a su propiedad value
                    </p>
                    <p>
                      -Hecho esto se le estara dando el estado a todos los
                      componentes hijos sin nececidad de tener que pasarlo por
                      props
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <ThemeContext.Provider value={theme}>
          <Form />
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />
            Use Dark Mode
          </label>
        </ThemeContext.Provider>
      </div>
    </div>
  );
};
