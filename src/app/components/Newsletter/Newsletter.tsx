import React from 'react'

const Newsletter = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] '>
      <div className='text-center'>
        <h1 className='   heading'>
          Join for hot offers
        </h1>
        <p className='text-black text-opacity-70 w-[85%] sm:w-[60%] mx-auto pt-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim porro sequi praesentium fuga? Corporis aliquam blanditiis quam quibusdam minima, quae, voluptates omnis unde veritatis, ut assumenda repellat beatae molestiae quis!</p>

        <div className='text-center flex space-x-2 mt-[3rem] justify-center'>
          {/* Input */}
          <input type="email" placeholder='Email Address' className='px-5 py-4 bg-white/80 w-[40%] outline-none rounded-lg placeholder:text-black' />
          {/* Subscribe button */}
          <button className='px-8 py-4 bg-blue-500  transition-all duration-200 text-white rounded-md font-bold'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter