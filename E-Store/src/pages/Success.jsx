import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div className='flex flex-col items-center h-screen'>
            <div className='flex-col'>
                <h1 className='text-3xl ml-[3rem] mb-32'>Order SuccessFull</h1>
                <Link className='text-3xl ml-5' to={'/'}>Go Back To Shopping</Link>
            </div>
        </div>
    )
}

export default Success