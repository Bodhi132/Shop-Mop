import React from 'react'

const Footer = () => {
  const current = new Date();
  return (
    <div className='w-[100%] bg-black text-white h-[10vh] flex justify-center items-center'>
      <p>@ {current.getFullYear()} <span className='text-amber-700'>ShopMop </span> 
        All rights reserved</p>
    </div>
  )
}

export default Footer