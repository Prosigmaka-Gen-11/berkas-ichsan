import React from 'react';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';

const FuncComponent = () => {

   const [next, setNext] = useState(0)

   useEffect(() => {
      console.log("nilai next di tambah")
   }, [next])

   useEffect(() => {
      console.log("side effect ketika update")
   })

   useEffect(() => {
      console.log("side effect pertama kali render")

      return () => {console.log("side effect ketika komponen akan di hapus ")}
   } , [])
   

   return (
      <Fragment>
            <div className="flex ml-16 justify-center items-center w-10 h-10 text-center text-white bg-purple-500 drop-shadow-lg rounded-full"> 
               <h1>{next}</h1>
            </div>
            <button className="p-1 mt-5 px-5 bg-blue-500 rounded-full text-white" onClick={() => setNext(next + 1)}>Tambah</button>
      </Fragment>
   )
}

export default FuncComponent;