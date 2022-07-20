import React, { createContext, useState } from "react";

export let authContext = createContext({});

export default function AuthProvider({ children }) {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <authContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </authContext.Provider>
  );
}
