import React from 'react'

const NavbarLink = (props) => {
    return (
        <div className={`p-2 px-5 rounded-full text-gray-800 font-semibold hover:text-white hover:bg-purple-700 ${props.isActive ? 'bg-purple-700 text-white' : null}`}>{props.nama}</div>
    )
}



export default NavbarLink;