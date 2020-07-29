/* eslint-disable react/prop-types */
import React, { useState } from "react";
// Create Context Api
export const StoreContext = React.createContext();

//Create Context Provider
export const StoreContextProvider = props => {
  // create state
  const [store, setStore] = useState({});

  return (
    <StoreContext.Provider value={[store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  );
};
