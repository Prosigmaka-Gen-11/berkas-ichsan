import React from "react";
import { useContext, createContext , useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) =>{
    const [form, setForm] = useState(false);
    return (
        <StateContext.Provider value={
            {form, setForm}
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)