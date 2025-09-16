import React, { useState } from 'react'
import Login from '../components/common/Login'
import Register from '../components/common/Register'

export default function Auth() {

    const [isLogin , setIsLogin] = useState(true);
  return ( 
    isLogin ? <Login setIsLogin={setIsLogin}/> : <Register setIsLogin={setIsLogin} /> 
  )
}
