import React from "react";
import { Hijo } from "./Hijo";
import { UserProvider } from "./UserProvider";

export const PruebaDeContexto = () => {
  return (
    <div>
      <UserProvider >
        <h1>Prueba de contexto</h1>
        <Hijo />
      </UserProvider>
    </div>
  );
};
