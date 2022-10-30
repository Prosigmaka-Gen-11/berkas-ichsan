import React from 'react'
import { useStateContext } from '../Contexts/ContextsProvider';

const Button = (props) => {
    const {setCurrentCategory} = useStateContext()
    return (
        <button onClick={() =>setCurrentCategory(props.nama)} className={`${props.padding} px-5 rounded-full ${props.type === `button` ? `bg-purple-700 text-white` : `bg-gray-200 text-gray-800 text-sm hover:bg-purple-700 hover:text-white font-semibold focus:bg-purple-700 focus:text-white text-gray-800`} capitalize `}>{props.nama}</button>
    )
}


export default Button;