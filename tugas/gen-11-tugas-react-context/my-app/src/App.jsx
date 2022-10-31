import React, { Fragment, useEffect, useState}  from "react";
import { useStateContext } from "./ContextProvider";
import axios from 'axios';
import List from "./List";

function App() {
  const {data, setData} = useStateContext()
  const [dataFromAPI, setDataFromAPI] = useState([])
  
  const onChange = (evt) => {
    const dataCopy = {...data};
    dataCopy[evt.target.name] = evt.target.value;
    setData(dataCopy);
  }

  const submit = () =>{
    axios.post("http://localhost:3004/posts/", data)
      .then(res => console.log("berhasil"))
  }

  const getDataAPI = () =>{
    axios.get("http://localhost:3004/posts")
      .then(res => setDataFromAPI(res.data))
  }

  useEffect(() => {
    getDataAPI()
    return () => {
      getDataAPI()
    }
  }, [])
  
  
  return(
    <Fragment>
      {console.log()}
      <div className='px-32 flex space-x-3'>
        {dataFromAPI.map(item => (
          <List judul={item.judul} terbit={item.terbit} konten={item.konten} />
        ))}
      </div>
      <hr className="mt-10 bg-black"></hr>
      <div className="w-[26em] mx-auto justify-center">
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Judul</label>
            <input onChange={evt => onChange(evt)} type="text" name="judul" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan judul" required=""/>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your </label>
            <input onChange={evt => onChange(evt)} type="date" name="terbit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
          </div>
          <div className="mb-6">    
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Konten</label>
            <textarea onChange={evt => onChange(evt)} name="konten" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan konten"></textarea>

          </div>
          <button onClick={() => submit()} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>

    </Fragment>
  )
  
}

export default App
