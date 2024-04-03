import Image from 'next/image'
import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import logo from "../../../../public/image/logo.png"

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-blue-500 '>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-[3rem]'>
        {/* 1st part */}
        <div>
          <div className='flex items-center text-white space-x-2'>

            
          <div className='flex items-center  md:space-x-1'>
               <Image src={logo} alt='logo' className='w-[25px]'/>

                    <h1 className='text-[20px] sm:text-[30px] font-semibold'>HLV</h1>
                </div>
          </div>
          <p className='text-white mt-[0.4rem]  hover:text-blue-100 hover:cursor-pointer'>
            Lorem ipsum dolor sit <br /> amet consectetur adipisicing <br /> elit. Architecto, iure  
          </p>
          <p className='mt-[1rem] text-white hover:text-blue-100 hover:cursor-pointer'>Support@example.com</p>
          <p className='text-blue-500 text-[19px] font-bold pt-2'>+(123) 3456 67897</p>
        </div>
        {/* 2nd part  */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Application</h1>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Home</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>FQA</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Join Wishlist</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>About Us</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Contact</p>
        </div>
        {/* 3rd part */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Useful Links</h1>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Home</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>About</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Menu</p>
          <p className='text-white mt-[0.7rem]  transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Products</p>
          <p className='text-white mt-[0.7rem] transition-all duration-200 hover:text-blue-100 hover:cursor-pointer w-fit'>Newsletter</p>
        </div>
        {/* 4th part */}
        <div>
        <h1 className='text-[23px] font-semibold mb-[2rem] text-white uppercase'>Opening Hours</h1>
        <p className='text-white text-[18px]'>
          Monday-Friday : <span className='text-blue-100'>8am-4pm</span>
        </p>
        <p className='text-white mt-[0.5rem] text-[18px]'>
          Saturday : <span className='text-blue-100'>8am-12pm</span>
        </p>
        {/* social icons */}
        <div className='mt-[2rem] flex items-center space-x-6'>
          <FaFacebook className='w-[1.5rem] h-[1.5rem] text-gray-300'/>
          <FaInstagram className='w-[1.5rem] h-[1.5rem] text-gray-300'/>
          <FaTwitter className='w-[1.5rem] h-[1.5rem] text-gray-300'/>
        </div>
        </div>

        
        
      </div>
      <p className='text-center text-white text-opacity-50 mt-[1.5rem] '>
      HLV © 2024 <span className='text-black'> Health Solution</span>. All rights reserved
      </p>
    </div>
  )
}

export default Footer