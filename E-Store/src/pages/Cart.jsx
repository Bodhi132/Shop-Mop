import React from 'react'
import { CartContext } from '../CartContext'
import { useContext } from 'react';
import {Link} from 'react-router-dom'

const Cart = () => {

  const cart = useContext(CartContext);

  const subTotalAdder = () =>{
    let c=0
    cart.items.map((items) => {
      c = c + (items.price * items.quantity)
    }) 
    return c

  }

  console.log(cart.items);

//   const checkout = async () => {
//     await fetch('http://localhost:4000/checkout', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({items: cart.items})
//     }).then((response) => {
//         return response.json();
//     }).then((response) => {
//         if(response.url) {
//             window.location.assign(response.url); // Forwarding user to Stripe
//         }
//     });
// }

const checkout = () => {
  fetch("http://localhost:4000/create-checkout-session", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    mode:"cors",
    body:JSON.stringify({
      items:cart.items
    })
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({url})=>{
    window.location = url
  })
  .catch(e => {
    console.log(e.error)
  })
}

  return (
    <>
      <section className='px-40 py-10 mb-[5rem]'>
        <div className='flex justify-evenly ml-5'>
          <div className='w-12'>Items</div>
          <div className='w-12'>Price</div>
          <div className='w-12'>Quantity</div>
          <div className='w-12'>Subtotal</div>
        </div>
        <hr className='h-px my-8 bg-gray-400 border-0 ' />
        <div className='flex-col mr-[6rem]'>
          {cart.items.map((items) => (
            <div className='flex mb-6 justify-around' key={items.productName}>
              <div>
                <img src={items.photo} alt="" className='h-[4rem] w-[4rem] rounded' />
              </div>
              <div className='ml-[150px] w-12'>{items.productName}</div>
              <div className='ml-[200px] w-12'>{items.price}</div>
              <div className='ml-[200px] w-12'>{items.quantity}</div>
              <div className='ml-[180px] w-12'>{items.price * items.quantity}</div>
              <div className='w-12 ml-[20px]'><button className='bg-red-700 rounded-md w-5 text-white' onClick={() => cart.deleteFromCart(items.productName)}><i class="fa-sharp fa-solid fa-trash"></i></button></div>
            </div>
          ))}
        </div>
        <hr className='h-px my-8 bg-gray-300 border-0 ' />
        <div className='w-[100%] flex justify-between'>
          <div>
            <Link>Continue Shopping</Link>
          </div>
          <div>
            <button className='rounded border px-3 py-2 bg-rose-700 hover:bg-rose-500' onClick={() => cart.deleteAllFromCart()}>Clear All</button>
          </div>
        </div>
        <div>
          <div className=' border rounded w-[30%] bg-orange-100 ml-[70%] mt-7'>
            <div className='flex justify-between'>
              <h1 className='p-5 font-bold text-lg text-amber-600'>Subtotal :</h1>
              <h1 className='p-5 font-semibold text-lg text-amber-600'>$ {subTotalAdder()}</h1>
            </div>
            <button className='px-8 ml-5 w-[90%] py-2 text-white hover:bg-amber-400 rounded bg-amber-600 mb-7' onClick={checkout}>Buy Now</button>
          </div>
        </div>
      </section>
    </>

  )
}

export default Cart