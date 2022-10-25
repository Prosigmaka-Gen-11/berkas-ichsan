import React, { Fragment } from 'react'
import FormHandle from './FormHandle';

const FunctionComp = () => {

  const {data, onChangeHandle} = FormHandle({
    nama : '',
    date : '',
    gender :'',
    job : '',
    level : '',
    alamat : ''
  })

  return (
    <Fragment>  
      <div className="flex justify-center ">
        <div className="w-1/3 p-10 drop-shadow-md">    
          <form>
            <div className="mb-6">
              <label for="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama Lengkap {data.date}</label>
              <input type="nama" name="nama" id="nama" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masukan Nama" required onChange={event => onChangeHandle (event)}/>
            </div>
            <div className="mb-6">
              <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal Lahir {data.date}</label>
              <input type="date" id="date" name="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required onChange={event => onChangeHandle (event)}/>
            </div>
            <div className="mb-6">  
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jenis Kelamin {data.gender}</label>
                <div className="flex space-x-10 ">
                  <div className="flex items-center mb-4">
                  <input id="country-option-1" type="radio" name="gender" value="Laki-Laki" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" onChange={event => onChangeHandle (event)} />
                  <label for="country-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Laki-Laki
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input id="country-option-2" type="radio" name="gender" value="Perempuan" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" onChange={event => onChangeHandle (event)} />
                  <label for="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Perempuan
                  </label>
                </div>
                </div>
            </div>
            <div classNameName="mb-6"> 
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pekerjaan {data.job}</label>      
                <div className="flex items-center mb-4">
                    <input type="checkbox" name="job" value="FrontEnd Developer" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "  onChange={event => onChangeHandle (event)}/>
                    <label for="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">FrontEnd Developer</label>
                </div>

                <div className="flex items-center mb-4">
                    <input  type="checkbox" name="job" value="BackEnd Developer" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={event => onChangeHandle (event)}/>
                    <label for="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">BackEnd Developer</label>
                </div>

                <div className="flex items-center mb-4">
                    <input  type="checkbox" name="job" value="Full Stack Developer" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={event => onChangeHandle (event)}/>
                    <label for="checkbox-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Stack Developer</label>
                </div>
            </div>
            <div className="mb-6"> 
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Level {data.level}</label>
              <select name="level"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={event => onChangeHandle (event)}>
                <option value="Beginner">Beginner</option>
                <option value="Midder">Midder</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div className="mb-6">        
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Alamat {data.alamat}</label>
              <textarea id="message" rows="4" name="alamat" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Alamat" onChange={event => onChangeHandle (event)}></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

        </div>
      </div>

    </Fragment>
  )
}

export default FunctionComp;