import React, { useContext } from 'react'
import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Intro from '../components/Intro'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


const HomePage = () => {

  const location = useLocation()
  return (
    <div>
      <Header />
      {location.pathname !== '/' ?
        (<div className='w-[100%] h-32 bg-[#eaded7]  relative bottom-[3.5rem] flex items-center'>
          {<h2 className='text-[2.3rem] ml-40 font-semibold text-amber-800'>Home <span className='text-[#D27D2D]'>{location.pathname}</span></h2>}
        </div>):
       (<>
          <Hero/>
          <FeaturedProducts/>
          <Intro/>
          <NewsLetter/>
       </>
       )
      }
      <Outlet />
    </div>
  )
}

export default HomePage