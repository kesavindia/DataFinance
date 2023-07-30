import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

export const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                <p className='text-center text-4xl font-bold '>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8  mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '> Send Upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto rounded px-6 py-3 my-6 font-medium'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col bg-gray-200 p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem]  bg-transparent bg-white' src={Double} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Two users</h2>
                <p className='text-center text-4xl font-bold'>$269</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8 '>2 Granted Users</p>
                    <p className='py-2 border-b mx-8 '> Send Upto 4GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded  mx-auto py-3 my-6 font-medium'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Triple} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Three users</h2>
                <p className='text-center text-4xl font-bold'>$379</p>
                <div className='text-center font-medium'>
                    <p  className='py-2 border-b  mt-8'>1.5 TB Storage</p>
                    <p  className='py-2 border-b  '> 3 Granted Users</p>
                    <p  className='py-2 border-b  '> Send Upto 6GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto rounded py-3 mt-6 font-medium'> Start Trial</button>
            </div>
        </div>
    </div>
  )
}

