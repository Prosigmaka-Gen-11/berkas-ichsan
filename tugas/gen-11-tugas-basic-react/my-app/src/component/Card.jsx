import React from "react";
import { useState } from "react";

const Card = () =>{
   const [value, setValue] = useState(0);
   return (
      <div>
         <div className="flex justify-between px-3 bg-green-500 w-80 items-center p-2">
            <h1>Product</h1>
            <div className="px-2 rounded-full bg-white">{value}</div>
         </div>
         <div className="w-80 p-2 flex justify-center">
            <img className="w-72" src="https://photos.prnasia.com/media_files/static/2020/05/202005081128_98d7d8b7.jpg" alt="" />
         </div >
         <div className="w-72 ml-4 ">
            <button onClick={() =>setValue(value+1)  } className="px-5 p-1 bg-green-500 rounded-full text-white" >+</button>
            <input className="text-center" type="text" value={value} />
            <button onClick={() => {
               if (value > 0) {
                  setValue(value-1);
               }
            } }  className="px-5 p-1 bg-green-500 rounded-full text-white">-</button>
         </div>
      </div>
   )
}

export default Card;