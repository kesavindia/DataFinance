import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,
    FaInstagram,FaTwitterSquare} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid gap-8 text-gray-300 grid-cols-3 '>    <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Datafinance.</h1>        
        <div className='flex  justify-between md:w-[75%]  my-6'>
            <FaDribbbleSquare className='hover:cursor-pointer hover:scale-110' size={30}/>
            <FaFacebookSquare className='hover:cursor-pointer hover:scale-110' size={30}/>
            <FaGithubSquare className='hover:cursor-pointer hover:scale-110' size={30}/>
            <FaInstagram className='hover:cursor-pointer hover:scale-110' size={30}/>
            <FaTwitterSquare className='hover:cursor-pointer hover:scale-110' size={30}/>
        </div>        
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='hover:cursor-pointer py-2 text-sm'>Analytics</li>
                <li className='hover:cursor-pointer py-2 text-sm'>Marketing</li>
                <li className='hover:cursor-pointer py-2 text-sm'>Commerce</li>
                <li className='hover:cursor-pointer py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='hover:cursor-pointer py-2 text-sm'>Pricing</li>
                <li className='hover:cursor-pointer py-2 text-sm'>Documentation</li>
                <li className='hover:cursor-pointer py-2 text-sm'>Guides</li>
                <li className='hover:cursor-pointer py-2 text-sm'>API status</li>
            </ul>
        </div>
        <div>
            <h6 className='text-gray-400 font-medium'>Company</h6>
            <ul>
                <li className='hover:cursor-pointer text-sm py-2'>Blog</li>
                <li className='hover:cursor-pointer text-sm py-2'>About</li>
                <li className='hover:cursor-pointer text-sm py-2'>Careers</li>
                <li className='hover:cursor-pointer text-sm py-2'>Press</li>                
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='hover:cursor-pointer text-sm py-2'>Claim</li>
                <li className='hover:cursor-pointer text-sm py-2'>Policy</li>
                <li className='hover:cursor-pointer text-sm py-2'>Terms</li>                
            </ul>
        </div>
    </div>
    </div>
  )
}

