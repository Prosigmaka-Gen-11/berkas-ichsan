import React from "react";
import { useContext, createContext , useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) =>{
    const [form, setForm] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('all')
    const [isEdit, setIsEdit] = useState(false)
    return (
        <StateContext.Provider value={
            {form, setForm, currentCategory, setCurrentCategory, isEdit, setIsEdit}
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)