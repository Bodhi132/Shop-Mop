import React from 'react'

const AboutPage = () => {
  return (
    <div className='flex flex-col sm:flex-row p-5 mb-6 '>
      <div className='sm:w-full ml-9'>
        <img src="..\src\assets\Shop2.jpg" alt="" className='w-[90%] h-[320px] sm:w-[400px] sm:h-[400px]  mx-5 rounded-md grayscale-[40%]' />
      </div>
      <div className='p-[6rem] mt-5 pl-5'>
        <div className='flex flex-col justify-center mb-4'>
          <h2 className='text-2xl font-semibold text-slate-700 mb-2'>Our Story</h2>
          <div className='bg-amber-300 h-1 w-12 ml-1'></div>
        </div>
        <p className='my-4 text-slate-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur consectetur consequatur assumenda ratione maiores est. In culpa pariatur ipsam nobis iure! Odio facere ea reprehenderit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, autem?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ratione consequatur itaque!
        </p>
      </div>
    </div>
  )
}

export default AboutPage