import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';

const Navbar = () => {
    const [pathName, setPathName] = useState('')
    
    useEffect(() => {
        const location = window.location.pathname;
        setPathName(location)
    }, [])
    
    return (
        
        <div className='w-full flex items-center h-16 bg-gray-200 px-32 space-x-3'>
            <Link to="/"><NavbarLink nama ="Home" isActive ={pathName === '/' ? true : false}/></Link>
            <Link to="/tambah"><NavbarLink nama ="Tambah" isActive ={pathName ==='/tambah' ? true : false}/></Link>
            
        </div>
    )
}

export default Navbar;