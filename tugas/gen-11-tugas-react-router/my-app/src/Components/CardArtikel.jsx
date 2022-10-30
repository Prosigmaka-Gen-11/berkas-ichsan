import axios from 'axios';
import React, { Fragment } from 'react';


const CardArtikel = (props) => {
    const deleteData = (id) =>{
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then(res => window.location.assign("http://localhost:3000/"))
    }

    const editData = (id) =>{
        window.location.assign("http://localhost:3000/edit/"+id);
    }

    const detailData = (id) =>{
        window.location.assign("http://localhost:3000/detail/"+ id)
    }

    return (
        <Fragment>
            <div className= {`w-[22em] bg-gray-100 drop-shadow-lg rounded-lg p-5 ${props.isCurrent}`}>
                <h1 className='text-lg font-semibold'>{props.judul}</h1>
                <div className='flex justify-between mt-2'>
                    <div>
                        <p className='text-xs'><span className='font-semibold'>Terbit :</span> {props.terbit}</p>
                        <p className='text-xs'><span className='font-semibold'>Penulis :</span> {props.penulis}</p>
                    </div>
                    <p className='text-xs'> <span className='font-semibold'>Kategori : </span>{props.category}</p>
                </div>
                <div className='text-sm text-justify mt-2 h-40 overflow-auto '>
                    {props.content}
                </div>
                <div className='flex justify-end mt-3 space-x-2'>
                    <button onClick={() => deleteData(props.id)} className='p-1 px-4 rounded-full bg-red-500 text-white'>Hapus</button>
                    <button onClick={() => editData(props.id)} className='p-1 px-4 rounded-full bg-blue-500 text-white'>Edit</button>
                    <button onClick={() => detailData(props.id)} className='p-1 px-4 rounded-full bg-purple-500 text-white'>Detail</button>
                </div>
            </div>
        </Fragment>
    )
}

export default CardArtikel;