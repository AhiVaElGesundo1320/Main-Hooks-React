import React from "react";
import { useUserContext, useUserToggleProvider} from "./UserProvider";


export const Hijo = () => {
    const user = useUserContext();
    const cambiarLogin = useUserToggleProvider();
  return (
    <div>
      <h1>Componente Hijo</h1>
      {user && <p>Hola {user.name}</p>}
      <button onClick={cambiarLogin}>Cambiar login</button>
    </div>
  );
};
