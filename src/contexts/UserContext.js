import React, { createContext, useState } from "react";

export const UserContext = createContext({ user: { username: "Ghost User" } });

export function UserProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, user: { username }, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
