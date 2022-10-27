import React, { Fragment, useEffect } from 'react';
import CrudHandle from './CrudHandle';


const TableList = () => {

    const { data,getApiData, deleteData} = CrudHandle()
    

    useEffect(() => {
        getApiData();
    }, [])

    // const getApiData = () =>{
    //     axios.get(urlAPI)
    //         .then((res) => setData(res.data))
    // }

    // const deleteData = (id) =>{
    //     axios.delete(`${urlAPI}/${id}`)
    //         .then(res => getApiData())
    // }
    

    return (
        <Fragment>       
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nama
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Jenis Kelamin
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Umur
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Tanggal Lahir
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Bidang
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Level
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Alamat
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map( item => (
                            <tr key={item.id} className="bg-white border-b">
                                <td className="py-4 px-6">
                                    {item.nama}
                                </td>
                                <td className="py-4 px-6">
                                    {item.gender}
                                </td>
                                <td className="py-4 px-6">
                                    {item.umur}
                                </td>
                                <td className="py-4 px-6">
                                    {item.tanggal}
                                </td>
                                <td className="py-4 px-6">
                                    {item.bidang}
                                </td>
                                <td className="py-4 px-6">
                                    {item.level}
                                </td>
                                <td className="py-4 px-6">
                                    {item.alamat}
                                </td>
                                <td className="py-4 px-6">
                                    <span className="font-medium p-2 px-3 bg-blue-500 mr-2 rounded-md text-white dark:text-blue-500 hover:underline">Edit</span>
                                    <span onClick={ () => deleteData(item.id)} className="font-medium p-2 px-3 bg-red-500 rounded-md text-white dark:text-blue-500 hover:underline">Hapus</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
            </div>
        </Fragment>
    )
}

export default TableList;