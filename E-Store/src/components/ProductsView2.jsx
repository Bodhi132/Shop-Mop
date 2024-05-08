import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';


const ProductsView2 = ({ products, sortingOrder, clickedCategory, priceRange }) => {

  // console.log(priceRange);

  if (priceRange > 0) {
    if (!clickedCategory)
      return (
        <div className='flex flex-col ml-5 mt-[3rem]'>
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item => item.price <= priceRange).map(
              (items, key) => (
                <div className='flex mb-[4rem]' key={key}>
                  <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                    <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i class="fa-solid fa-magnifying-glass text-white"></i>
                    </Link>
                  </div>
                  <div className='flex flex-col ml-3 items-start justify-center px-6'>
                    <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                    <h3 className='my-2'>${items.price}</h3>
                    <p className='pr-8'>{items.description}</p>
                    <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`} >Details</Link>
                  </div>
                </div>
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item => item.price <= priceRange).map(
                (items, key) => (
                  <div className='flex mb-[4rem]' key={key}>
                    <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                      <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i class="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                    </div>
                    <div className='flex flex-col ml-3 items-start justify-center px-6'>
                      <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                      <h3 className='my-2'>${items.price}</h3>
                      <p className='pr-8'>{items.description}</p>
                      <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                    </div>
                  </div>
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => item.price <= priceRange).map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%]h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </Link>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => item.price <= priceRange).reverse().map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </Link>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                ))}
        </div>
      )
    if (clickedCategory)
      return (
        <div className='fflex flex-col ml-5 mt-[3rem]'>
          {/* //   {products?.map((items,key)=>(
    //     <div className='flex' key={key}>
    //       <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md' alt="" />
    //       <div className='flex flex-col '>
    //         <h3>{items.title}</h3>
    //         <h3>${items.price}</h3>
    //         <p>{items.description}</p>
    //         <button>Details</button>
    //       </div>

    //     </div>
    //   ))} */}
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item => item.category == clickedCategory && item.price <= priceRange).map(
              (items, key) => (
                <div className='flex mb-[4rem]' key={key}>
                  <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                    <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i class="fa-solid fa-magnifying-glass text-white"></i>
                    </Link>
                  </div>
                  <div className='flex flex-col ml-3 items-start justify-center px-6'>
                    <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                    <h3 className='my-2'>${items.price}</h3>
                    <p className='pr-8'>{items.description}</p>
                    <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                  </div>
                </div>
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item => item.category == clickedCategory && item.price <= priceRange).map(
                (items, key) => (
                  <div className='flex mb-[4rem]' key={key}>
                    <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                      <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i class="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                    </div>
                    <div className='flex flex-col ml-3 items-start justify-center px-6'>
                      <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                      <h3 className='my-2'>${items.price}</h3>
                      <p className='pr-8'>{items.description}</p>
                      <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                    </div>
                  </div>
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => item.category == clickedCategory && item.price <= priceRange).map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <button className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block '>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </button>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item => item.category == clickedCategory && item.price <= priceRange).map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </Link>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                ))}
        </div>
      )

  }

  else {
    if (!clickedCategory)
      return (
        <div className='flex flex-col ml-5 mt-[3rem] '>
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).map(
              (items, key) => (
                <div className='flex mb-[4rem]' key={key}>
                  <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                    <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i class="fa-solid fa-magnifying-glass text-white"></i>
                    </Link>
                  </div>
                  <div className='flex flex-col ml-3 items-start justify-center px-6'>
                    <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                    <h3 className='my-2'>${items.price}</h3>
                    <p className='pr-8'>{items.description}</p>
                    <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>                  </div>
                </div>
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).map(
                (items, key) => (
                  <div className='flex mb-[4rem]' key={key}>
                    <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                      <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i class="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                    </div>
                    <div className='flex flex-col ml-3 items-start justify-center px-6'>
                      <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                      <h3 className='my-2'>${items.price}</h3>
                      <p className='pr-8'>{items.description}</p>
                      <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                    </div>
                  </div>
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%]h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </Link>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </Link>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                ))}
        </div>
      )
    if (clickedCategory)
      return (
        <div className='flex flex-col ml-5 mt-[3rem]'>
          {/* //   {products?.map((items,key)=>(
    //     <div className='flex' key={key}>
    //       <img src={items.thumbnail} className='sm:h-[14rem] sm:w-[17rem] rounded-md' alt="" />
    //       <div className='flex flex-col '>
    //         <h3>{items.title}</h3>
    //         <h3>${items.price}</h3>
    //         <p>{items.description}</p>
    //         <button>Details</button>
    //       </div>

    //     </div>
    //   ))} */}
          {sortingOrder === "Lowest" ?
            ([...products]?.sort((a, b) => a.price - b.price).filter(item => item.category == clickedCategory).map(
              (items, key) => (
                <div className='flex mb-[4rem]' key={key}>
                  <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                    <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                    <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                      <i class="fa-solid fa-magnifying-glass text-white"></i>
                    </Link>
                  </div>
                  <div className='flex flex-col ml-3 items-start justify-center px-6'>
                    <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                    <h3 className='my-2'>${items.price}</h3>
                    <p className='pr-8'>{items.description}</p>
                    <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                  </div>
                </div>
              )
            )) : sortingOrder === "Highest" ?
              ([...products]?.sort((a, b) => b.price - a.price).filter(item => item.category == clickedCategory).map(
                (items, key) => (
                  <div className='flex mb-[4rem]' key={key}>
                    <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                      <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                      <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                        <i class="fa-solid fa-magnifying-glass text-white"></i>
                      </Link>
                    </div>
                    <div className='flex flex-col ml-3 items-start justify-center px-6'>
                      <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                      <h3 className='my-2'>${items.price}</h3>
                      <p className='pr-8'>{items.description}</p>
                      <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                    </div>
                  </div>
                )
              )) : sortingOrder === "AtoZ" ?
                ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).filter(item => item.category == clickedCategory).map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </Link>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                )) : ([...products]?.sort((a, b) => a.title.localeCompare(b.title)).reverse().filter(item => item.category == clickedCategory).map(
                  (items, key) => (
                    <div className='flex mb-[4rem]' key={key}>
                      <div className='sm:h-[14rem] sm:w-[17rem] group relative'>
                        <img src={items.thumbnail} className='w-[100%] h-[100%] rounded-md hover:filter hover:grayscale-[50%] hover:brightness-[70%]' alt="" />
                        <Link className='h-9 w-9 rounded-full bg-amber-600 absolute left-[50%] top-[50%]  hidden group-hover:block ' to={`/products/${items.title.replace(/\s+/g, '-')}`}>
                          <i class="fa-solid fa-magnifying-glass text-white"></i>
                        </Link>
                      </div>
                      <div className='flex flex-col ml-3 items-start justify-center px-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{items.title}</h3>
                        <h3 className='my-2'>${items.price}</h3>
                        <p className='pr-8'>{items.description}</p>
                        <Link className='mt-5 bg-amber-600 px-4 rounded text-slate-100 text-center py-1 text-xs drop-shadow-xl hover:bg-amber-800 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300' to={`/products/${items.title.replace(/\s+/g, '-')}`}>Details</Link>
                      </div>
                    </div>
                  )
                ))}
        </div>
      )

  }

}



export default ProductsView2