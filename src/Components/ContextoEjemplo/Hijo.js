import React from "react";
import { useUserContext, useUserToggleProvider } from "./UserProvider";

export const Hijo = () => {
  const user = useUserContext();
  const cambiarLogin = useUserToggleProvider();
  return (
    <div>
      {user && <p>Hola {user.name}</p>}
      <button
        className="rounded-lg"
        style={{ backgroundColor: "gray", color: "white" }}
        onClick={cambiarLogin}
      >
        Cambiar login
      </button>
    </div>
  );
};
