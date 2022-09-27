import React, { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { SidebarData } from "./SidebarData"
import { HiArrowNarrowDown } from "react-icons/hi"
import { BsCircleHalf } from "react-icons/bs"
import { BiMenuAltLeft } from "react-icons/bi"

import { Link } from "react-router-dom"

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='absolute top-[32px] text-[#8872f6] z-[10] w-[80px] h-[95vh] bg-black bor flex flex-col items-center justify-between p-6 text-[20px]'>
        <BiMenuAltLeft />
        <BsCircleHalf />
        <HiArrowNarrowDown />
      </div>
      <nav className='relative'>
        <ul className='flex justify-between items-center  text-white p-4 pl-[120px] bg-black md:rounded-t-sm sm:rounded-none md:mt-8'>
          <li className='md:text-lg text-[15px] font-[Aboreto] text-[#8872f6]'>RHOUZMERI</li>
          <div className='flex items-center pr-[40px]'>
            <li className='mr-[50px] md:text-[12px] font-[Aboreto]'>HOME</li>
            <li className='mr-[50px] md:text-[12px] font-[Aboreto]'>ABOUT ME</li>
            <li className='mr-[50px] md:text-[12px] font-[Aboreto]'>PROJECTS</li>
            <li className='mr-[50px] md:text-[12px] font-[Aboreto]'>RESUME</li>

            <button className='hidden md:flex sh font-[Aboreto]'>LET'S TALK</button>
          </div>
          <div className='text-2xl text-white md:hidden sm:block'>
            <Link to='#' className='menu-bars'>
              <HiMenuAlt1 onClick={showSidebar} />
            </Link>
          </div>
          <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div className='sm:z-10 sm:mt-[250px] sm:bg-[#131b22cf] sm:w-[160px] sm:h-[302px] sm:pt-[40.29px] md:hidden '>
              <ul onClick={showSidebar}>
                <li></li>
                {SidebarData.map((item, index) => {
                  return (
                    <div className='pl-[40.25px]'>
                      <li key={index}>
                        <Link to={item.path}>
                          <h5 className='font-[Karla] sm:text-[11.36px] sm:font-[400] sm:leading-[32.65px] sm:text-white sm:pl-[13.25px]'>
                            {item.title}
                          </h5>
                        </Link>
                      </li>
                      <hr />
                    </div>
                  )
                })}
              </ul>

              <div className='w-[39.75px] bg-[#000000] h-[552px] absolute top-0 pl-[19.19px] pt-[19.19px]'>
                <Link to='#' className='menu-bars' onClick={showSidebar}>
                  <AiOutlineClose className='w-[8.28px] text-white  ' />
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
