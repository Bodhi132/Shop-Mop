import React from 'react'

const NewsLetter = () => {
    return (
        <div className='h-[70vh] sm:mt-[6rem] sm:p-[5rem] p-14 text-3xl font-semibold text-slate-700 sm:flex sm:justify-center '>
            <div className='sm:w-[50%]'>
                <h2>Join our newsletter and get 20% off</h2>
                <p className='text-sm leading-5 mt-5 text-slate-700 opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi perspiciatis consequuntur, laborum, delectus quidem odio incidunt, laudantium reiciendis similique exercitationem.</p>
            </div>
            <div>
                <form className=' flex mt-5 sm:mt-[3.5rem]'>
                    <input type="email" placeholder='Enter Email' className='border text-sm border-black p-1 pr-[3.5rem] rounded-l-md sm:p-2 sm:w-[70%] sm:px-14' />
                    <button className='text-sm border-black p-1 pr-[2rem] bg-amber-600 border rounded-r-md pl-6'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter