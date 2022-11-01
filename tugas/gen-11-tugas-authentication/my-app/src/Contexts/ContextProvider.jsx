import React, { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';


const StateContext = createContext()

export const ContextProvider = ({children}) => {
  const [userData, setUserData] = useState(() =>{
    const saveUserData = localStorage.getItem('userData')
    if (saveUserData) {
      const parseUserData = JSON.parse(saveUserData)
      return parseUserData;
    }else{
      return {}
    }
  })
  const [token, setToken] = useState(() =>{
    const saveToken = localStorage.getItem('token')
    return saveToken ? saveToken : null
  })
  const [isLogin, setIsLogin] = useState(() =>{
    const login = localStorage.getItem('isLogin')
    return login ? true : false
  })

  const afterLogin = (data) =>{
    setUserData(data)
    setToken(data.token)
    localStorage.setItem('userData', JSON.stringify(data))
    localStorage.setItem('token', data.token)
    setIsLogin(true)
    localStorage.setItem('isLogin', true)
    window.location.assign("/home")
  }

  const logout = () =>{
    localStorage.removeItem('userData');
    localStorage.removeItem('token')
    localStorage.removeItem('isLogin')
    setToken(null)
    setIsLogin(false)
    setUserData({})
  }
  return (
    <StateContext.Provider value={
        {isLogin,
        setIsLogin,
        afterLogin,
        userData,
        setUserData,
        token,
        setToken,
        logout
      }
    }>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)