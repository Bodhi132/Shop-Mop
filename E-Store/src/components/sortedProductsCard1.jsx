import React from 'react'

export const sortedProductsCard1 = ({ products, sortingOrder}) => {
  return (
    <div className='flex flex-wrap'>
      {/* {products?.map((items,key)=>(
        <div className='m-3' key={key}>
          <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md' alt="" />
          <div className='flex justify-between'>
            <h3>{items.title}</h3>
            <h3>${items.price}</h3>
          </div>
        </div>
      ))} */}
      {sortingOrder === "Lowest" ?
        ([...products]?.sort((a, b) => a.price - b.price).map(
          (items, key) => (
            <div className='m-3' key={key}>
              <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md' alt="" />
              <div className='flex justify-between'>
                <h3>{items.title}</h3>
                <h3>${items.price}</h3>
              </div>
            </div>
          )
        )):sortingOrder === "Highest" ?
        ([...products]?.sort((a, b) => b.price - a.price).map(
          (items, key) => (
            <div className='m-3' key={key}>
              <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md' alt="" />
              <div className='flex justify-between'>
                <h3>{items.title}</h3>
                <h3>${items.price}</h3>
              </div>
            </div>
          )
        )):sortingOrder === "AtoZ" ?
        ([...products]?.sort((a,b)=>a.title.localeCompare(b.title)).map(
          (items, key) => (
            <div className='m-3' key={key}>
              <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md' alt="" />
              <div className='flex justify-between'>
                <h3>{items.title}</h3>
                <h3>${items.price}</h3>
              </div>
            </div>
          )
        )):([...products]?.sort((a,b)=>a.title.localeCompare(b.title)).reverse().map(
          (items, key) => (
            <div className='m-3' key={key}>
              <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md' alt="" />
              <div className='flex justify-between'>
                <h3>{items.title}</h3>
                <h3>${items.price}</h3>
              </div>
            </div>
          )
        ))}
    </div>
  )
}
