import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {

  const [featuredProducts, setfeaturedProducts] = useState([])


  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/smartphones')
      .then(res => setfeaturedProducts(res.data.products));
  }, [])


  return (
    <div className=' bg-slate-200 h-[screen] w-[screen] pb-8'>
      <h2 className='ml-[4rem] sm:ml-[40%] sm:font-bold sm:text-3xl text-2xl pt-5'>Featured Products</h2>
      <hr className="w-[10rem] h-1 ml-[5rem] sm:ml-[45%] sm:w-[8rem] mt-2  mb-5 bg-amber-700 border-0 rounded md:my-10 dark:bg-amber-700"/>
      <div className='sm:flex flex-col sm:flex-row px-40 sm:justify-around'>
        {featuredProducts.slice(0,3).map((item) => (
          <div key={item.id} className='p-4 relative'>
            <img src={item.thumbnail} alt=""  className='rounded-md border w-[300px] h-[200px] sm:w-[400px] sm:h-[300px]'/>
            <h3 className='mt-1 ml-1'>{item.title}</h3>
            <Link className='absolute top-[43%] left-[40%] bottom-[70%] ' to={`/products/${item.title.replace(/\s+/g, '-')}`}>
              <div className='h-9 w-9 rounded-full bg-amber-700 align-middle text-center p-1 pr-2 opacity-60 hover:opacity-100' >
              <i className="fa-solid fa-magnifying-glass" style={{textAlign:'center',verticalAlign:'middle',padding:'3px',marginLeft:'2px',marginTop:'2px'}}></i>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link className='p-3 ml-[25%] mr-[25%] bg-amber-700 text-center text-white rounded sm:ml-[45%] sm:mr-[45%] mb-2 block' to={'/products'}>ALL PRODUCTS</Link>
    </div>
  )
}

export default FeaturedProducts