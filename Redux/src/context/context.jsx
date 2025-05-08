import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {   //(props)
  const [value, setValue] = useState(0);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}     
      {/* props.children */}
    </MyContext.Provider>
  );
};
