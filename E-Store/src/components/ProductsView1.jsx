import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import '../components/componentStyles/styles.css'
import { Link } from 'react-router-dom'


const ProductsView1 = ({ products, sortingOrder, clickedCategory, search, priceRange }) => {

  console.log(clickedCategory);
  console.log(priceRange);
  if (priceRange > 0) {
    if (!clickedCategory) {
      return (
        <div className='flex flex-wrap'>
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item =>
            (
              (item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                item.brand.toLowerCase().includes(search)) &&
              item.price <= priceRange
            )
            ).map(
              (items, key) => (
                <div className='m-3 group relative ' key={key}>
                  <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%] ' alt="" />
                  <Link className='h-9 w-9 rounded-full opacity-0 bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                  </Link>
                  <div className='flex justify-between'>
                    <h3>{items.title}</h3>
                    <h3>${items.price}</h3>
                  </div>
                </div>
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item =>
              (
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)) &&
                item.price <= priceRange
              )
              ).map(
                (items, key) => (
                  <div className='m-3 group relative' key={key}>
                    <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full  opacity-0 bg-amber-600 absolute left-[45%] top-[40%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i className="fa-solid fa-magnifying-glass text-center text-white"></i>
                    </Link>
                    <div className='flex justify-between'>
                      <h3>{items.title}</h3>
                      <h3>${items.price}</h3>
                    </div>
                  </div>
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item =>
                (
                  (item.title.toLowerCase().includes(search) ||
                    item.category.toLowerCase().includes(search) ||
                    item.brand.toLowerCase().includes(search)) &&
                  item.price <= priceRange
                )
                ).map(
                  (items, key) => (
                    <div className='m-3 group relative' key={key}>
                      <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full  opacity-0 bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                      <div className='flex justify-between'>
                        <h3>{items.title}</h3>
                        <h3>${items.price}</h3>
                      </div>
                    </div>
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item =>
                ((
                  (item.title.toLowerCase().includes(search) ||
                    item.category.toLowerCase().includes(search) ||
                    item.brand.toLowerCase().includes(search)) &&
                  item.price <= priceRange
                )
                )
                ).map(
                  (items, key) => (
                    <div className='m-3 group relative' key={key}>
                      <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full  opacity-0 bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
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
    else {
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
            ([...products]?.sort((a, b) => a.price - b.price).filter(item => (item.category == clickedCategory) &&
              ( 
                ( item.title.toLowerCase().includes(search) ||
                 item.category.toLowerCase().includes(search) ||
                 item.brand.toLowerCase().includes(search)) &&
                 item.price <= priceRange
               )
            ).map(
              (items, key) => (
                <div className='m-3  group relative' key={key}>
                  <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                  <Link className='h-9 w-9 rounded-full   absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                    <i className="fa-solid fa-magnifying-glass  text-white"></i>
                  </Link>
                  <div className='flex justify-between'>
                    <h3>{items.title}</h3>
                    <h3>${items.price}</h3>
                  </div>
                </div>
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item => (item.category == clickedCategory) &&
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search) &&
                  item.price <= priceRange
                )
              ).map(
                (items, key) => (
                  <div className='m-3  group relative' key={key}>
                    <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full   absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i className="fa-solid fa-magnifying-glass text-white"></i>
                    </Link>
                    <div className='flex justify-between'>
                      <h3>{items.title}</h3>
                      <h3>${items.price}</h3>
                    </div>
                  </div>
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => (item.category == clickedCategory) &&
                  ( 
                    ( item.title.toLowerCase().includes(search) ||
                     item.category.toLowerCase().includes(search) ||
                     item.brand.toLowerCase().includes(search)) &&
                     item.price <= priceRange
                   )
                ).map(
                  (items, key) => (
                    <div className='m-3  group relative' key={key}>
                      <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full   absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                      <div className='flex justify-between'>
                        <h3>{items.title}</h3>
                        <h3>${items.price}</h3>
                      </div>
                    </div>
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item => (item.category == clickedCategory) &&
                  (item.title.toLowerCase().includes(search) ||
                    item.category.toLowerCase().includes(search) ||
                    item.brand.toLowerCase().includes(search) &&
                    item.price <= priceRange
                  )
                ).map(
                  (items, key) => (
                    <div className='m-3  group relative' key={key}>
                      <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full  opacity-0  absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i className="fa-solid fa-magnifying-glass text-white text-center"></i>
                      </Link>
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

  }
  else {
    if (!clickedCategory) {
      return (
        <div className='flex flex-wrap'>
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item =>
            (item.title.toLowerCase().includes(search) ||
              item.category.toLowerCase().includes(search) ||
              item.brand.toLowerCase().includes(search)
            )
            ).map(
              (items, key) => (
                <div className='m-3 group relative ' key={key}>
                  <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%] ' alt="" />
                  <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                  </Link>
                  <div className='flex justify-between'>
                    <h3>{items.title}</h3>
                    <h3>${items.price}</h3>
                  </div>
                </div>
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item =>
              (item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                item.brand.toLowerCase().includes(search)
              )
              ).map(
                (items, key) => (
                  <div className='m-3 group relative' key={key}>
                    <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i className="fa-solid fa-magnifying-glass text-center text-white"></i>
                    </Link>
                    <div className='flex justify-between'>
                      <h3>{items.title}</h3>
                      <h3>${items.price}</h3>
                    </div>
                  </div>
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item =>
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
                ).map(
                  (items, key) => (
                    <div className='m-3 group relative' key={key}>
                      <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                      <div className='flex justify-between'>
                        <h3>{items.title}</h3>
                        <h3>${items.price}</h3>
                      </div>
                    </div>
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item =>
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
                ).map(
                  (items, key) => (
                    <div className='m-3 group relative' key={key}>
                      <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                      <div className='flex justify-between'>
                        <h3>{items.title}</h3>
                        <h3>${items.price}</h3>
                      </div>
                    </div>
                  )
                )
                )}
        </div>
      )
    }
    return (
      <div className='flex flex-wrap'>
        {sortingOrder === "Lowest" ?
          ([...products]?.sort((a, b) => a.price - b.price).filter(item => item.category == clickedCategory &&
            (item.title.toLowerCase().includes(search) ||
              item.category.toLowerCase().includes(search) ||
              item.brand.toLowerCase().includes(search)
            )
          ).map(
            (items, key) => (
              <div className='m-3  group relative' key={key}>
                <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                  <i className="fa-solid fa-magnifying-glass  text-white"></i>
                </Link>
                <div className='flex justify-between'>
                  <h3>{items.title}</h3>
                  <h3>${items.price}</h3>
                </div>
              </div>
            )
          )) : sortingOrder === "Highest" ?
            ([...products]?.sort((a, b) => b.price - a.price).filter(item => item.category == clickedCategory &&
              (item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                item.brand.toLowerCase().includes(search)
              )
            ).map(
              (items, key) => (
                <div className='m-3  group relative' key={key}>
                  <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                  <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                  </Link>
                  <div className='flex justify-between'>
                    <h3>{items.title}</h3>
                    <h3>${items.price}</h3>
                  </div>
                </div>
              )
            )) : sortingOrder === "AtoZ" ?
              ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => item.category == clickedCategory &&
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
              ).map(
                (items, key) => (
                  <div className='m-3  group relative' key={key}>
                    <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i className="fa-solid fa-magnifying-glass text-white"></i>
                    </Link>
                    <div className='flex justify-between'>
                      <h3>{items.title}</h3>
                      <h3>${items.price}</h3>
                    </div>
                  </div>
                )
              )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item => item.category == clickedCategory &&
                (item.title.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search)
                )
              ).map(
                (items, key) => (
                  <div className='m-3  group relative' key={key}>
                    <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[45%] top-[40%] hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i className="fa-solid fa-magnifying-glass text-white text-center"></i>
                    </Link>
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
}


export default ProductsView1
