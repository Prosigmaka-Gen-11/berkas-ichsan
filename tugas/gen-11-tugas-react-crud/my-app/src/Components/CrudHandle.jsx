import axios from 'axios';
import { useState } from 'react';
const CrudHandle = () => {
    const urlAPI = "http://localhost:3004/posts";
    const [data, setData] = useState([])
    const getApiData = () =>{
        axios.get(urlAPI)
            .then((res) => setData(res.data))
    }

    const deleteData = (id) =>{
        axios.delete(`${urlAPI}/${id}`)
            .then(res => getApiData())
    }

    return {
        data,
        urlAPI,
        getApiData,
        deleteData
    }
}

export default CrudHandle;