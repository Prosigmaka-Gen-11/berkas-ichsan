import React , { Fragment,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { useStateContext } from './Contexts/ContextProvider';

const Home = () => {
  const authSlice = useSelector(state => state.auth)
  const dispatch = useDispatch()
  // const {userData, token, logout} = useStateContext()
  const handleLogout = () =>{
    dispatch(logout())
    window.location.assign("/")
  }

  const getData = () =>{
    fetch('https://dummyjson.com/auth/carts', {
      method: 'GET', /* or POST/PUT/PATCH/DELETE */
      headers: {
        'Authorization': 'Bearer' + `${authSlice.token}`, 
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
      <p>Hallo , {authSlice.userData.firstName}</p>
      <p>token : {authSlice.token}</p>
      <Link to="/about">About</Link>
      <br></br>
      <button onClick={() => dispatch(handleLogout)}>Logout</button>
    </Fragment>
  )
}

export default Home;