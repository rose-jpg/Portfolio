import React from 'react'
import { FaTwitter,FaFacebookF,FaLinkedinIn,FaGithub,FaDribbble,FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <div className='bg-black text-white  mt-[1px] pt-[100px] px-[120px] h-[86vh] relative'>
      <h2 className='md:text-sm font-[Aboreto]'>Hi There,</h2>
      <h1 className=' font-[Aboreto] mt-[10px] glitch'><span aria-hidden="true">I am Rosemary</span> I am Rosemary<span aria-hidden="true">I am Rosemary</span></h1>
      <p className='md:mt-[15px] font-[Aboreto]'><span className='md:text-lg'>I am a frontend developer during daytime</span> <br/> & work with batman during nights.</p>
      <button className='px-[40px] py-[10px] mt-[20px] bg-[#8872f6] text-white text-[15px]'>Ask Me How</button>
      <h1 className='text-[150px] italic text-center ml-[150px] tracking-[0.08em] absolute bottom-0 side '>Frontend</h1>
      <div className='flex mt-[20px]'>
      <FaTwitter className='mr-[10px] text-[25px] text-[#8872f6]'/>
      <FaFacebookF className='mr-[10px] text-[25px] text-[#8872f6]'/>
      <FaLinkedinIn className='mr-[10px] text-[25px] text-[#8872f6]'/>
      <FaGithub className='mr-[10px] text-[25px] text-[#8872f6]'/>
      <FaDribbble className='mr-[10px] text-[25px] text-[#8872f6]'/>
      <FaInstagram className='mr-[10px] text-[25px] text-[#8872f6]'/>
      
     
    </div>
    </div> 
  )
}

export default Hero