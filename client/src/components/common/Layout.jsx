import React, { useEffect } from 'react'
import { FooterLinksSection } from '../../screens/ElementLight/sections/FooterLinksSection/FooterLinksSection'
import Header from '../../screens/ElementLight/sections/Header/Header'
import { Outlet } from 'react-router'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userSet } from '../../redux/slices/userSlice';

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
        <Outlet/>
        <FooterLinksSection/>
    </div>
  )
}
