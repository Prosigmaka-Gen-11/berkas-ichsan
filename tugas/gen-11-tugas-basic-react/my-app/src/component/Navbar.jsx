import React from "react";
import { Fragment } from "react";

const Navbar = () =>{
   return (
      <Fragment>
         <div className="bg-gray-200 w-full h-12 flex items-center">
            <div className="w-80 mx-auto flex justify-between ">
               <div className="text-gray-800">Home</div>
               <div className="text-gray-400">Content</div>
               <div className="text-gray-400">About Us</div>
               <div className="text-gray-400">Contact Us</div>
            </div>
         </div>
      </Fragment>
   )
}

export default Navbar;