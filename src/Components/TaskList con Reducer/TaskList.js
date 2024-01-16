import React, { useReducer, useRef } from "react";
import { NavLink } from "react-router-dom";
import Captura10 from '../../assets/Screenshot 2024-01-12 134547.png'


const Reductor = () => {
  const funcionReductora /*Funcion Reductora */ = (
    estado /* estado actual del reductor*/,
    action /* el asignador de lo que va hacer cada caso*/
  ) => {
    switch (action.type) {
      case "Add_Estado":
        {
          return {
            age: estado.age + 1,
          };
        }
        break;
      case "Delete_Estado":
        {
          return {
            age: estado.age - 1,
          };
        }
        break;
      case `Edit_Estado`:
        {
          return {
            age: action.estado,
          };
        }
        break;
    }
  };

  const [estado, dispatch] = useReducer(
    funcionReductora /* funcion reductora(especifica como se actualiza el estado con su logica)*/,
    { age: 19 } /* estado incial del reductor*/
  );

  const handleAddEstado = (e) => {
    e.preventDefault();
    dispatch({
      //funcion que permite cambiar el estado conforme a la interaccion
      action: "Add_Estado",
      estado: e.target.value,
    });
  };
};

export const TaskList = () => {
  const [tasks, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "Add_Task":
        {
          return [...state, { id: state.length, title: action.title }];
        }
        break;
      case "Delete_Task":
        {
          return state.filter((task, index) => {
            return index !== action.index;
          });
        }
        break;
      case `Edit_Task`:
        {
          return state.filter((task, index) => {
            return index !== action.index;
          });
        }
        break;

      default:
        {
          return state;
        }
        break;
    }
  });
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "Add_Task",
      title: inputRef.current.value,
    });
  };
  const handleChange = (e, tasks) => {
    dispatch({
      type: "Edit_Task",
      task: tasks,
    });
  };

  const [reductor] = useReducer((state = [{}], action) => {
    return state;
  });

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="py-3">Este es un TaskList</h2>
      <NavLink
        className="rounded-lg w-40 text-center py-3"
        style={{ color: "white", backgroundColor: "gray" }}
        to={"/reducer"}
      >
        Volver
      </NavLink>
      <div className="w-96 p-8">
        <form className="flex flex-row justify-evenly" onSubmit={handleSubmit}>
          <label>
            <input
              className="rounded-lg"
              style={{ backgroundColor: "gray", color: "white" }}
              type="text"
              placeholder="Tarea"
              ref={inputRef}
            ></input>
          </label>
          <button
            style={{ backgroundColor: "gray", color: "white" }}
            className="px-3 rounded-lg"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <div>
        {tasks &&
          tasks.map((task, index) => (
            <div key={index}>
              <li>{task.title}</li>
              <button
                style={{ backgroundColor: "gray", color: "white" }}
                className="px-3 rounded-lg"
                onClick={() => dispatch({ type: "Delete_Task", index })}
              >
                Delete
              </button>
            </div>
          ))}
      </div>

      <div>
        <h3>Ejemplo Explicado</h3>
        <div>
          <div>
            <img src={Captura10} alt='imagen de reducer' />
          </div>
          <div>
            <p>
              -En este caso en la funcion que nos devuelve el reducer sera la funcion reductora donde ira la logica y el codigo,  usando una sentencia switch nos ayudamos ya que es mas versatil usar swotch que usar ifElse
            </p>
            <p>
              -Tambien nos ayudamos del hook <NavLink to='/ref'>useRef</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
