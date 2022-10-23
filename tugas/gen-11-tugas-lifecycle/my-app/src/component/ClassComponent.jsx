import React, { Component, Fragment } from "react";

class ClassComponent extends Component{
   constructor(props){
      super(props);
      this.state = {
         next : 0,
         previous : 0,
      }
   }

   componentDidMount(){
      console.log("komponen di mounting");
      this.setState({
         next : 1
      })
   }

   componentDidUpdate(){
      console.log("nilai next di tambah");
   }

   componentWillUnmount(){
      console.log("komponen akan di hapus");
   }

   tambah = () =>{
      this.setState({
         next : this.state.next + 1
      })
   }

   render(){
      return (
         <Fragment>
            <div className="flex ml-16 justify-center items-center w-10 h-10 text-center text-white bg-purple-500 drop-shadow-lg rounded-full"> 
               <h1>{this.state.next}</h1>
            </div>
            <button className="p-1 mt-5 px-5 bg-blue-500 rounded-full text-white" onClick={() => this.tambah()}>Tambah</button>
         </Fragment>
      )
   }
}

export default ClassComponent;