import React from 'react'
import Slider from "./Slider"
import Button from './Button'
import Header from './Header'

const Hero = () => {
  return (
    <div className='w-full h-max flex flex-col pt-8 pb-12 px-16 gap-8'>
      <Header />
      <div className='flex flex-col'>
        <div className='flex mt-6 mb-12 gap-12'>
        <div className='flex gap-8 mr-72'>
          <Button text='Say Hello'/>
          <Button text='View CV'/>
        </div>
        </div>
        <div className='flex justify-end'>
           <Slider/>
        </div>
     
      </div>
      
    </div>
  )
}

export default Hero