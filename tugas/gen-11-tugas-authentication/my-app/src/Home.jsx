import React , { Fragment,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from './Contexts/ContextProvider';

const Home = () => {
  const {userData, token, logout} = useStateContext()
  const handleLogout = () =>{
    logout()
    window.location.assign("/")
  }

  const getData = () =>{
    fetch('https://dummyjson.com/auth/carts', {
      method: 'GET', /* or POST/PUT/PATCH/DELETE */
      headers: {
        'Authorization': 'Bearer' + `${token}`, 
        'Content-Type': 'application/json'
      }, 
    })
    .then(res => res.json())
    .then(console.log);
            
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <Fragment>
      <h1>Ini adalah Home</h1>
      <p>Hallo , {userData.firstName}</p>
      <p>token : {token}</p>
      <Link to="/about">About</Link>
      <br></br>
      <button onClick={() => handleLogout()}>Logout</button>
    </Fragment>
  )
}

export default Home;