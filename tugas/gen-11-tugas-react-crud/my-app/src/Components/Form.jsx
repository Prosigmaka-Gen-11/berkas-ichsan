import axios from 'axios';
import React, { Fragment } from 'react';
import CrudHandle from './CrudHandle';
import FormHandle from './FormHandle';
// import { useStateContext } from '../Contexts/ContextsProvider';

const Form = () => {
    // const {setForm} = useStateContext();
    const {urlAPI, getApiData} = CrudHandle()
    const {data, onChangeHandle} = FormHandle({
        nama : '',
        tanggal : '',
        gender :'',
        umur : '',
        bidang : '',
        level : '',
        alamat : ''
    })

    const submitData = ()=>{
        axios.post(urlAPI, data)
            .then(res => getApiData())
    }
    return (
        <Fragment>
            <div className='absolute top-0 right-0 left-0 bottom-0 flex justify-center ' style={{backgroundColor : 'rgba(71,85,105,0.5)'}}>
                <div className="w-8/12 p-5 drop-shadow-md bg-white">    
                <form>
                    <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama Lengkap </label>
                    <input type="text" name="nama" id="nama" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masukan Nama" required onChange={event => onChangeHandle (event)}/>
                    </div>
                    <div className="mb-2">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal Lahir </label>
                    <input type="date" id="date" name="tanggal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required onChange={event => onChangeHandle (event)}/>
                    </div>
                    <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Umur </label>
                    <input type="number" name="umur"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masukan Nama" required onChange={event => onChangeHandle (event)}/>
                    </div>
                    <div className="mb-2">  
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jenis Kelamin </label>
                        <div className="flex space-x-10 ">
                            <div className="flex items-center mb-4">
                            <input id="country-option-1" type="radio" name="gender" value="Laki-Laki" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" onChange={event => onChangeHandle (event)} />
                            <label  className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Laki-Laki
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="country-option-2" type="radio" name="gender" value="Perempuan" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" onChange={event => onChangeHandle (event)} />
                            <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Perempuan
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="mb-2"> 
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pekerjaan </label>      
                        <div className='flex flex-row space-x-8'>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" name="bidang" value="FrontEnd Developer" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "  onChange={event => onChangeHandle (event)}/>
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">FrontEnd Developer</label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input  type="checkbox" name="bidang" value="BackEnd Developer" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={event => onChangeHandle (event)}/>
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">BackEnd Developer</label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input  type="checkbox" name="bidang" value="Full Stack Developer" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={event => onChangeHandle (event)}/>
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Stack Developer</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2"> 
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Level </label>
                    <select name="level"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={event => onChangeHandle (event)}>
                        <option value="Beginner">Beginner</option>
                        <option value="Midder">Midder</option>
                        <option value="Expert">Expert</option>
                    </select>
                    </div>
                    <div className="mb-2">        
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Alamat </label>
                    <textarea id="message" rows="2" name="alamat" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Alamat" onChange={event => onChangeHandle (event)}></textarea>
                    </div>
                    <button onClick={() =>submitData()}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
            </div>
            
        </Fragment>
    )
}

export default Form;