import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const currentPath = window.location.pathname.split("/")
    const isEdit = currentPath[1] === 'edit' ? true : false;
    const id = currentPath[2]
    const [data, setData] = useState({
        judul : '',
        terbit : '',
        category : '',
        content : '',
        penulis : ''   
    })
    const category = ['olahraga', 'kecantikan', 'bencana', 'kesehatan', 'politik', 'teknologi', 'pengetahuan', 'ekonomi'];

    const onChange = (evt) =>{
        const dataCopy = {...data};
        dataCopy[evt.target.name] = evt.target.value;
        setData(dataCopy)
    }

    const submitData = () => {
        axios.post("http://localhost:3004/posts", data)
            .then((res) => redirectHome() )
    }

    const getDataById = (id)=>{
        axios.get("http://localhost:3004/posts/" + id)
            .then(res => setData(res.data))
    }

    const editData = (id) => {
        axios.put("http://localhost:3004/posts/" + id, data)
            .then(res => redirectHome())
    }

    const redirectHome = () =>{
        window.location.assign("http://localhost:3000/")
    }

    useEffect(() => {
        getDataById(id)
        return () => {
            getDataById(id)
        }
    }, [id])
    
    
    

    return (
    <Fragment>
            {console.log(isEdit)}
            {console.log(data)}
            <div className='w-[36em] bg-gray-100 drop-shadow-lg rounded-lg p-10 space-y-4 '>
                <h1 className='text-center text-2xl font-semibold'>{isEdit ? 'Edit' : 'Submit'} Artikel</h1>
                <div className='space-y-2'>
                    <p>Judul Artikel </p>
                    <input value={data.judul} onChange={evt => onChange(evt)} type="text" name='judul' placeholder='Masukan Judul' className='w-full h-8 outline-none rounded-md px-4 focus:outline-purple-700 hover:outline-purple-700 outline-gray-300 bg-gray-100' required/>
                </div>
                <div className='space-y-2'>
                    <p>Tanggal Terbit </p>
                    <input value={data.terbit} onChange={evt => onChange(evt)} type="date" name='terbit' className='w-full h-8 outline-none rounded-md px-4 focus:outline-purple-700 hover:outline-purple-700 outline-gray-300 bg-gray-100 text-gray-800' required/>
                </div>
                <div className='space-y-2'>
                    <p>Kategori</p>
                    <select value={data.category} onChange={evt => onChange(evt)} name='category' className='w-full h-8 outline-none rounded-md px-3 focus:outline-purple-700 hover:outline-purple-700 outline-gray-300 bg-gray-100 ' required>
                        <option className='bg-white h-6 text-gray-700 '  value="">Pilih Kategori</option>
                        {category.map(item => (
                            <option key={item} className='bg-white h-6 text-gray-700 capitalize'  value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='space-y-2'>
                    <p>Konten</p>
                    <textarea value={data.content} onChange={evt => onChange(evt)} name='content' className='w-full outline-none rounded-md px-4 focus:outline-purple-700 hover:outline-purple-700 outline-gray-300 bg-gray-100 ' placeholder='Masukan konten' rows="5" required></textarea>
                </div>
                <div className='space-y-2'>
                    <p>Penulis</p>
                    <input value={data.penulis} onChange={evt => onChange(evt)} name='penulis' type="text" placeholder='Masukan Penulis' className='w-full h-8 outline-none rounded-md px-4 focus:outline-purple-700 hover:outline-purple-700 outline-gray-300 bg-gray-100' required/>
                </div>
                <div className='flex justify-end pt-5'>
                    <button onClick={() => {
                        isEdit ? editData(id) : submitData()
                    }} className='p-2 px-5 rounded-full bg-purple-700 text-white'>{isEdit ? 'Edit' : 'Submit'} </button>
                </div>    
            </div>
    </Fragment>
  )
}

export default Form;