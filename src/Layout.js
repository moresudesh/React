import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom' 

const Layout = () => {
  return (
    <div>
        <Header />
           <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout
