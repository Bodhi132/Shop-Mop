import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='flex p-5 pl-8 '>
            <div className='flex flex-col ml-3 sm:w-[70%] sm:ml-28'>
                <h2 className='max-sm:inline-flex flex-col text-4xl font-bold text-slate-700'>Shop Till <p>You Drop</p></h2>
                <p className='mt-4 leading-loose text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla facere vero fugit itaque quae nostrum eius cupiditate,
                    sapiente, enim harum rem tempora maxime, et minima?
                </p>
                <Link className='border rounded bg-amber-600 w-[7.5rem] h-[2.5rem] text-center shadow-md mt-6' to={'/products'}>
                    <p className='mt-[0.4rem]'>SHOP NOW</p>
                </Link>
            </div>
            <div className='max-md:hidden px-[13rem] pt-0'>
                <img src='..\src\assets\heroPicture.png' alt="" className='max-md:hidden rounded-lg' />
            </div>
        </div>
    )
}

export default Hero