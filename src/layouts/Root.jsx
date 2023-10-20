import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Shared/Header'
import Footer from '../pages/Footer'

export default function Root() {
  return (
    <div className='w-[1110px] mx-auto'>
        <Header />
        <div className='mt-24 mb-40'>
        <Outlet></Outlet>
        </div>
        <Footer />
    </div>


  )
}
