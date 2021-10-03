import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Mita", position: "Full Stack Dev", salary: 28000 },
    { id: 2, name: "Jannath", position: "Full Stack Dev", salary: 26000 },
    { id: 3, name: "Tasmin", position: "Frontend Dev", salary: 20000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
