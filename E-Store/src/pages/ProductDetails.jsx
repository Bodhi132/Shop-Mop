import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef, useReducer, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../UserContext'
// import uuid from 'uuidv5'
import { v4 as uuidv4 } from 'uuid'
import { CartContext } from '../CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from '../components/Loader'


const ProductDetails = () => {

  const { user } = useContext(UserContext)
  const cart = useContext(CartContext);


  var n = useParams()
  var name = n.name
  name = name.replaceAll('-', ' ')

  const navigate = useNavigate()

  const [details, setDetails] = useState([])
  const [img, setImg] = useState('')
  const [click, setClick] = useState(false)
  const [isLoading, setLoading] = useState(true);

  const [count, dispatch] = useReducer(reducer, 1)

  function reducer(count, action) {
    switch (action.type) {
      case 'increment':
        return count + 1
      case 'decrement':
        if (count > 1)
          return count - 1
      default:
        return count
    }
  }

  const box = useRef()

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${name}`).then(
      (res) => {
        setDetails(res.data.products)
        setLoading(false);
      }
    )
  }, [])

  console.log(details);

  if (isLoading) {
    return <Loader />
  }

  const handleClick = (e, item) => {
    setClick(true)
    setImg(item)
  }

  const navigateTo = (e) => {

    e.preventDefault()
    if (!user)
      navigate("/signup")
    else {
      toast("Product added to cart!")
      cart.addOneToCart(details, count)
    }
  }

  return (
    <>
      <button className='bg-amber-600 rounded-md shadow-lg text-white m-4 mb-6 p-1 px-3 ml-10' onClick={() => navigate('/products')}>Back To Products</button>
      <div className='sm:flex sm:flex-row px-10 space-x-10 '>
        <div className=' flex flex-col shadow-lg rounded space-y-4 m-2 pb-2 w-[35rem]'>
            <Carousel>
              {details[0].images &&
                details[0].images.map((item) => (
                  <div key={uuidv4()}>
                    <img src={item} className='h-[25%] rounded-lg' alt="" />
                  </div>
                ))}
            </Carousel>
        </div>
        <div className=" rounded overflow-hidden shadow-lg m-2 pb-2 flex flex-col space-y-4">
          <h2 className='p-3 pl-5 text-3xl font-bold text-slate-700'>{details[0].title}</h2>
          <h3 className='p-2 pt-0 pl-5 text-lg font-semibold text-amber-700'>${details[0].price}</h3>
          <p className='p-2 pt-0 pl-5 text-lg '>
            {details[0].description}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit aspernatur adipisci incidunt beatae ullam totam nobis quis ipsa consequatur reprehenderit!
          </p>
          <div className='grid grid-cols-2 ml-5'>
            <div className='my-2 text-slate-600 font-semibold'>Available:</div>
            <div className='text-slate-600 font-semibold'>{details[0].stock}</div>
            <div className='my-2 text-slate-600 font-semibold'>Category:</div>
            <div className='text-slate-600 font-semibold'>{details[0].category}</div>
            <div className='my-2 text-slate-600 font-semibold'>Brand:</div>
            <div className='text-slate-600 font-semibold'>{details[0].brand}</div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row px-5 w-[40%] justify-around items-center my-5'>
              <div>
                <button className='text-slate-600 text-2xl' onClick={() => dispatch({ type: 'decrement' })}>
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>
              <p className='text-slate-600 text-4xl font-bold' >{count}</p>
              <div>
                <button className='text-slate-600 text-2xl' onClick={() => dispatch({ type: 'increment' })}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <button className='w-[30%] bg-amber-700 ml-7 py-2 rounded-md mb-9 text-white shadow-lg ' onClick={(e) => navigateTo(e)}>Add to Cart</button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails