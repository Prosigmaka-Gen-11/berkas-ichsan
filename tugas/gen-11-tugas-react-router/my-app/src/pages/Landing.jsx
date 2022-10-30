import React, { Fragment } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../Components/Button';
import CardArtikel from '../Components/CardArtikel';
import Navbar from '../Components/Navbar/Navbar';
import { useStateContext } from '../Contexts/ContextsProvider';
import { Link } from 'react-router-dom';



const Landing = () => {
    const [dataAPI, setDataAPI] = useState([])
    const {currentCategory} = useStateContext()

    const category = ['all', 'olahraga', 'kecantikan', 'bencana', 'kesehatan', 'politik', 'teknologi', 'pengetahuan', 'ekonomi'];
    useEffect(() => {
        getDataAPI();
    }, [])

    const getDataAPI = () =>{
        axios.get("http://localhost:3004/posts")
            .then(res => setDataAPI(res.data))
    }

    return (
    <Fragment>
            <Navbar/>
            {console.log(currentCategory)}
            <div className='px-32'>
                <div className=' flex mt-10 justify-end'>
                    <Link to="/tambah"><Button nama="Tambahkan Data" type="button" padding="p-2"/></Link>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold'>Category</h1>
                    <hr className='border w-32 border-purple-700'/>
                    <div className='flex space-x-3 mt-4'>
                        {category.map(item => (
                            <Button key={item} nama={`${item}`} type="category" padding="p-2" />
                        ))}
                    </div>
                </div>
                <div className='flex flex-wrap mt-10 gap-4'>
                    {dataAPI.map(item => (
                        <CardArtikel key={item.id} id={item.id} judul ={item.judul} terbit={item.terbit} content={item.content} category={item.category} penulis={item.penulis} isCurrent = {item.category === currentCategory || currentCategory === 'all' ? null : 'hidden'}/>
                        )
                    )}
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Landing;