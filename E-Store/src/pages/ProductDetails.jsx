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

  // useEffect(() => {

  //   setPhoto(details[0].images[0])
  //   setPrice(details[0].price)
  //   setPname(details[0].title)
  // }, [details])


  console.log(details);


  // if(details){
  //   console.log(details[0]?.images[0])
  // }



  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const handleClick = (e, item) => {
    setClick(true)
    setImg(item)
    // box.current.className =box.current.className + ' border-amber-600 border-solid border-4'
  }

  const navigateTo = (e) => {

    e.preventDefault()
    if (!user)
      navigate("/signup")
    else {
      // axios.post('/cart',{details,count})
      toast("Product added to cart!")
      cart.addOneToCart(details, count)
    }
  }

  return (
    <>
      <button className='bg-amber-600 rounded-md shadow-lg text-white m-4 mb-6 p-1 px-3' onClick={() => navigate('/products')}>Back To Products</button>
      <div className='sm:flex sm:flex-row'>
        <div className='w-auto flex flex-col p-5 sm:w-[80%]'>
          <div className='w-[100%] mb-3'>
            <img src={click ? img : details[0].images[0]} className='rounded-md w-[100%]' alt="" />
          </div>
          {/* <div>
          {details?.map((item) => (
            <div key={uuidv4()}>
              {
                item.images.map((items) => (
                  <img src={items} alt="" key={items} />
                ))
              }
            </div>
          ))}
         </div> */}
          <div className='flex justify-between'>
            {details[0].images ? (

              details[0].images.map((item) => (
                <img src={item} ref={box} alt="" key={uuidv4()} className='w-[15%] h-[2.5rem] rounded-md hover:cursor-pointer' onClick={(e) => handleClick(e, item)} />
              ))

            ) : (<> </>)}
          </div>
        </div>
        <div>
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