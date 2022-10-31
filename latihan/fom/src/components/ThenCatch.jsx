import React, {useState} from 'react';
import axios from 'axios';

const ThenCatch = () => {

   const [data, setData] = useState({
      nama : '',
      namaLatin : '',
      panjang : '',
      habitat : '',
      image : '',
      asal : ''
   })

   const getApi = () =>{
      axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
         .then((res) => {
            setData({
               nama : res.data.name,
               namaLatin : res.data.latin_name,
               panjang : res.data.length_max,
               habitat : res.data.habitat,
               image : res.data.image_link,
               asal : res.data.geo_range
            })
         })
         .catch((err) => console.log(err))
   }


   return (
      <div className="w-96 bg-gray-200 p-10">
         <img className="" src={`${data.image}`} alt="" />
         <table className='w-full mt-4 text-sm'>
            <tbody>
               <tr>
               <td>Nama Hewan</td>
               <td>:</td>
               <td>{data.nama}</td>
            </tr>
            <tr>
               <td>Nama Latin</td>
               <td>:</td>
               <td>{data.namaLatin}</td>
            </tr>
            <tr>
               <td>Panjang</td>
               <td>:</td>
               <td>{data.panjang} feet</td>
            </tr>
            <tr>
               <td>Habitat</td>
               <td>:</td>
               <td>{data.habitat}</td>
            </tr>
            <tr>
               <td>Asal</td>
               <td>:</td>
               <td>{data.asal}</td>
            </tr>
            
            </tbody>
         </table>
         <div className='w-full flex justify-center mt-4'>
            <button  onClick={ () =>getApi()} className='w-28 p-1 px-5 text-white bg-purple-700 rounded-full'>Next</button>
         </div>
      </div>
   )
}

export default ThenCatch;