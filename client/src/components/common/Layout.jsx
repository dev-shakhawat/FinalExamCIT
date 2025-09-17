import React, { useEffect } from 'react' 
import { Outlet } from 'react-router'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userSet } from '../../redux/slices/userSlice';
import Header from './Header';
import Nav from './Nav';
import { Footer } from './Footer';

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => { 

    (async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/me`, { withCredentials: true });
 
      if(res.data.user){
        dispatch(userSet(res.data.user));
      } 
    })();

  }, []);

  return (
    <div>
        <Header/> 
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
