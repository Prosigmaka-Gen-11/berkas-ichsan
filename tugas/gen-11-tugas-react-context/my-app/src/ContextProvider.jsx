import React from "react";
import { useContext, createContext , useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) =>{
    const [data, setData] = useState({
      judul : '',
      terbit : '',
      konten : ''
    });
    return (
        <StateContext.Provider value={
            {data, setData}
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);