import React from 'react'
import {Navbar} from '../src/components/Navbar'
import {Hero} from '../src/components/Hero'
import {Analytics} from '../src/components/Analytics'
import {Newsletter} from '../src/components/Newsletter'
import {Cards} from '../src/components/Cards'
import {Footer} from '../src/components/Footer'

export function App() {
  
  return (
    <>      
      <Navbar/>    
      <Hero/>  
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </>
  )
}


