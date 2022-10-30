import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';

const Detail = () => {

    const currentPath = window.location.pathname.split("/")
    const id = currentPath[2]

    const [data, setData] = useState([])

    const getDataById = (id)=>{
        axios.get("http://localhost:3004/posts/" + id)
            .then(res => setData(res.data))
    }

    useEffect(() => {
        getDataById(id)
        return () => {
            getDataById(id)
        }
    }, [id])
    

    return (
        <Fragment>
            <Navbar/>
            <div className= "w-[60em] bg-gray-100 drop-shadow-lg rounded-lg p-16 mx-auto mt-20">
                <h1 className='text-3xl font-semibold'>{data.judul}</h1>
                <div className='flex justify-between mt-2'>
                    <div>
                        <p className='text-md'><span className='font-semibold'>Terbit :</span> {data.terbit}</p>
                        <p className='text-md'><span className='font-semibold'>Penulis :</span> {data.penulis}</p>
                    </div>
                    <p className='text-md'> <span className='font-semibold'>Kategori : </span> {data.category}</p>
                </div>
                <div className='text-lg text-justify mt-2 '>
                    {data.content}
                </div>
            </div>
        </Fragment>
    )
}

export default Detail;