import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

import { useState } from 'react'

const Navbar = ()=>{
  const [nav, setNav] = useState(false)

  const toggleNav= ()=>{
    setNav(!nav)
  }

  return(
    <>
    <div className= "flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="md:flex hidden">
        <li className="p-4">
          Home
        </li>
        <li className="p-4">
          Company
        </li>
        <li className="p-4">
          Resources
        </li>
        <li className="p-4">
          About
        </li>
        <li className="p-4">
          Contact
        </li>
      </ul>
      <div onClick={toggleNav} className='hover:cursor-pointer block md:hidden'>
        {!nav ? <AiOutlineMenu size={20}/>:<AiOutlineClose size={20}/>}
      </div>
          <div className={nav?'md:hidden fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500':'md:hidden fixed left-[-100%] top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
              <ul className='pt-4 uppercase'>
              <li className="p-4 border-b border-gray-600">
                Home
              </li>
              <li className="p-4 border-b border-gray-600">
                Company
              </li>
              <li className="p-4 border-b border-gray-600">
                Resources
              </li>
              <li className="p-4 border-b border-gray-600">
                About
              </li>
              <li className="p-4 border-b border-gray-600">
                Contact
              </li>
              </ul>
          </div>

    </div>
    </>
  )
}
export default Navbar
