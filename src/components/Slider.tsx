import React from 'react'
import SliderCard from "../components/SliderCard"
import ArrowButton from './ArrowButton'

const Slider = () => {
  return (
    <div className="w-[70%] flex">
      <div className='w-1/7 flex items-center pl-24 mr-32 gap-5'>
        <ArrowButton direction="&lt;" />
        <ArrowButton direction="&gt;" />
      </div>      
      <SliderCard />
    </div>
  )
}

export default Slider