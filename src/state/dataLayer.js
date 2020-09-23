import React, { createContext, useReducer, useContext } from 'react';

const DataLayerContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

const useData = () => useContext(DataLayerContext);

export default useData;
