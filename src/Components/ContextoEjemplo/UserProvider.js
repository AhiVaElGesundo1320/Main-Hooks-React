import React, { useState, useContext } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}
export function useUserToggleProvider() {
  return useContext(userToggleContext);
}



export function UserProvider({children}) {
  const [user, setUser] = useState(null);
  const cambiarLogin = () => {
    if (user) {
      return null;
    } else {
      setUser({
        name: "Juan",
        email: "juan@gmail.com",
      });
    }
  };

  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={cambiarLogin}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}
