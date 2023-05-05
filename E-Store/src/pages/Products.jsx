import React from 'react'
import { useState, useEffect } from 'react'
import PrductsSidebar from '../components/ProductsSidebar'
import ProductsView1 from '../components/ProductsView1'
import ProductsView2 from '../components/ProductsView2'
import axios from 'axios'
import { DropDownMenu } from '../components/DropDownMenu'

const Products = () => {

  const [products, setProducts] = useState([])
  const [sortingOrder, setSortingOrder] = useState('Lowest')
  const [toggleView, setToggleView] = useState(false)
  const [clickedCategory, setClickedCategory] = useState('')
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState(0)
  const [clear, setClear] = useState(false)



  useEffect(() => {
    
    axios.get('https://dummyjson.com/products').then((res) => {
      setProducts(res.data.products)
      
    })
    
  }, [])

  
  // useEffect(() => {
  //   // setClear(false)
  //   window.location.reload();
  // }, [clear])

  if(clear === true)
  {
    setClear(false)
    window.location.reload();
  }
  
  // console.log(sortingOrder);
  // console.log(clickedCategory);
  console.log(search);


  return (
    <>
      <div className='flex flex-row mx-[2rem] px-5'>
        <PrductsSidebar setClickedCategory={setClickedCategory} setSearch={setSearch} setPriceRange={setPriceRange} priceRange={priceRange} setClear={setClear}/>
        <div className='flex flex-col mb-3'>
          <div className='flex items-center ml-4'>
            <i className="fa fa-list mx-2 text-2xl hover:cursor-pointer " onClick={()=>setToggleView(false)}></i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6 mx-2 hover:cursor-pointer' onClick={()=>setToggleView(true)}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z" /></svg>
            <div className='w-[30%] bg-black h-[0.6px] ml-[4rem]'></div>
            <p className='ml-[4rem]'>Sort By</p>
            <DropDownMenu setSortingOrder={setSortingOrder} sortingOrder={sortingOrder}/>
          </div>
          {
           ( !toggleView) ?  <ProductsView1 products={products} sortingOrder={sortingOrder} clickedCategory={clickedCategory} search={search} priceRange={priceRange}/>:<ProductsView2 products={products} sortingOrder={sortingOrder} clickedCategory={clickedCategory} search={search} priceRange={priceRange}/>
          }
        </div>
      </div>
    </>
  )
}

export default Products