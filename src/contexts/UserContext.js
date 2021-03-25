import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ user: { username }, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
