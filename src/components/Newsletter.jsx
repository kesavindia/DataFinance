import React, {useState} from 'react'

export const Newsletter = () => {
const[email,setEmail] = useState(' ')
 const inputChange =(e)=>{
    setEmail(e.target.value);
    
 }
 const handleNotifyClick = ()=>{
     setEmail(' ')
     alert("Email sent to server", email)
     console.log(email)
 }

  return (
    <div className='w-full text-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
        <div>
            <input className=' w-full flex p-3 rounded-md text-black'
            type='email'
            placeholder='Enter Email...'
            value={email}
            onChange={inputChange}/>
            <button onClick={handleNotifyClick} className='bg-[#00df9a] text-black rounded font-medium w-[200px] ml-3 my-6 px-4 py-3 '>Notify me</button>
        </div>
        <p>We care about the protection of your data. Read our{" "}
        <span className='text-[#00df9a]'>Privacy Policy.</span></p>
        </div>
    </div>
    </div>
  )
}

