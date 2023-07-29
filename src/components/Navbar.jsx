import React,{useState}from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
export const Navbar = () => {
   const [nav,setNav] = useState(false);
   const handleNav = ()=>{
      setNav(!nav);
   }
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
     <h1 className='w-full text-3xl font-bold text-[green]'>Datafinance.</h1>
     <ul className='hidden md:flex'>
        <li className='p-4 hover:cursor-pointer'>Home</li>
        <li className='p-4 hover:cursor-pointer'>Resource</li>
        <li className='p-4 hover:cursor-pointer'>Company</li>
        <li className='p-4 hover:cursor-pointer'>About</li>
        <li className='p-4 hover:cursor-pointer'>Contact</li>
     </ul>
     <div onClick={handleNav} className='block md:hidden'>
        {nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
     </div>
     <div className={nav?'fixed left-0 top-0 w-[48%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'ease-in-out duration-500 fixed left-[-100%]'}>
     <h1 className='w-full text-3xl font-bold text-[#162923] m-4 '>Datafinance.</h1>
     <ul className='pt-24 uppercase'>
        <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>Home</li>
        <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>Company</li>
        <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>Resource</li>
        <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>About</li>
        <li className='p-4 hover:cursor-pointer'>Contact</li>
     </ul>
     </div>
    </div>
  )
}

