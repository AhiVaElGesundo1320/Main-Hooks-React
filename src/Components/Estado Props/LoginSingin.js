import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { PropsEstado } from "./PropsEstado";
import Captrua5 from '../../assets/Screenshot 2024-01-11 162800.png'

export const LoginSingin = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const { register, handleSubmit } = useForm();

  const handleSubmitSingIn = (datos) => {
    console.log("Hola de nuevo " + datos.email);
    alert("Bienvenido " + datos.user);
  };

  const handleSubmitLogIn = (datos) => {
    console.log("Bienvenido " + datos.email + " " + datos.user);
    alert("enviado " + datos.email + " " + datos.user);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <NavLink style={{color:'gray'}} to={"/estado"}>Volver</NavLink>
      <div className="py-3">
        <h1>Este es un ejemplo de como pasar el estado por Props</h1>
      </div>
      <PropsEstado
        title="Ya tienes una cuenta?"
        buttonName={"Inicia sesion"}
        children={"Este Es un Panel"}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <div className='w-auto rounded-lg px-8' style={{ backgroundColor:'gray' }}>
          <form
            className="flex flex-col items-center py-8"
            onSubmit={handleSubmit(handleSubmitSingIn)}
          >
            <label className="py-3 rounded-lg">
              
              <input
                type="text"
                style={{ border: "1px solid white", backgroundColor:'gray',color:'white' }}
                placeholder="email"
                {...register("email")}
              />
            </label>
            <label className="py-3 rounded-lg">
              
              <input
                //onChange={handlePasswordChange}
                placeholder="password"
                style={{ border: "1px solid white", backgroundColor:'gray', color: 'white' }}
                type="password"
                {...register("password")}
              />
            </label>
            <button className='rounded-lg' style={{ border: "1px solid white",color:'white' }} type="submit">
              inicar Sesion
            </button>
          </form>
        </div>
      </PropsEstado>

      <PropsEstado
        title="Aun no Tienes cuenta?"
        buttonName={"Registrate"}
        children={"Este es otro Panel"}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <div className='w-auto rounded-lg px-8' style={{ backgroundColor:'gray'}} >
          <form className="flex flex-col items-center py-8" onSubmit={handleSubmit(handleSubmitLogIn)}>
            <label className="py-3 rounded-lg">
              <input
                // onChange={handleEmailChange}
                style={{ border: "1px solid white", backgroundColor:'gray', color: 'white' }}
                type="text"
                placeholder="emial"
                {...register("email")}
                required
              />
            </label>
            <label className="py-3 rounded-lg">
              <input
                //  onChange={handlePasswordChange}
                style={{ border: "1px solid white", backgroundColor:'gray', color: 'white' }}
                placeholder="password"
                type="password"
                {...register("password")}
                required
              />
            </label>
            <label className="py-3 rounded-lg">
              <input
                // onChange={handleUserChange}
                style={{ border: "1px solid white", backgroundColor:'gray', color: 'white' }}
                type="text"
                placeholder="Nombre de usuario"
                {...register("user")}
                required
              />
            </label>
            <button style={{color:'white'}} type="submit">Registrarse</button>
          </form>
        </div>
      </PropsEstado>

      <div className="flex flex-col items-center py-8">
        <h2>Ejemplo Explicado</h2>
        
        <div className="py-3">
          <img src={Captrua5} alt="imagen de estado por props"/>
          <p>isActive: su funcion es trabjar en conjunto con nuestro estado local, cuando el estado local sea igual a 0 o 1 mostrara este componente o el otro</p>
          <p>onShow: su funcion es cambiar el estado local para asi poder mostrar el panel que queramos</p>
        </div>
       <div className="text-left">
       <p>-Primero creamos  un componente el cual aportara el estado</p>
        <p>-Seguido pasamos las propiedades y le asginamos su lugar en el codigo donde queremos que trabaje</p>
        <p>-Tercero con un condicional le damos logica a nuestro codigo</p>
        <p>-En nuestro componente otro donde usaremos esas props llamaremos al componente y lo usaremos como etiqueta y le daremos sus valores</p>
       </div>
      </div>
    </div>
  );
};
