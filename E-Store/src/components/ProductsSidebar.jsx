import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PrductsSidebar = ({setClickedCategory,setSearch,setPriceRange,priceRange,setClear}) => {

  const [categories, setCategories] = useState([])
  // const [clickedCategory, setClickedCategory] = useState('')
  // const [priceRange, setPriceRange] = useState(0)

  const handleChange = (event)=>{
    setClickedCategory(event.target.value)
  }

  useEffect(() => {

    axios.get('https://dummyjson.com/products/categories').then((res) => {

      setCategories(res.data)

    })
  }, [])


  return (
    <div className='mx-5'>
      <form>
        <input type='text' placeholder='Search' className='bg-slate-200 p-1 mb-3 rounded' onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
        <div>
          <h5 className='text-xl font-bold mt-4'>Category</h5>
          <div className='flex flex-col text-slate-400'>
            {
              categories.slice(0, 7).map(category =>
                <div key={category} className='mt-2'>
                  
                  <input type='button' className='bg-white hover:cursor-pointer hover:text-slate-600 active:text-slate-700 focus:text-slate-700' onClick={handleChange} value={category} />
                </div>
              )
            }
          </div>
          <div className='mt-5'>
            <h2 className='text-xl font-bold'>Price</h2>
            <p className='text-slate-400'>$0 - ${priceRange}</p>
            <input type="range" name="" id="" min="0" max="2000"
              onChange={(event)=>{setPriceRange(event.target.value)}}/>
          </div>
          <button onClick={()=>setClear(true)} className='mt-7 bg-amber-900 rounded text-white drop-shadow-lg border py-1 px-5'>Clear Filters</button>
        </div>
      </form>
    </div>
  )
}

export default PrductsSidebar