import React, { useState } from 'react'
import SliderCard from "../components/SliderCard"
import ArrowButton from './ArrowButton'

import { projects } from "../utils/projects"

const Slider = () => {
  const handleNext = () => {
    console.log("Next button clicked");
  };

  const handlePrev = () => {
    console.log("Previous button clicked"); 
  };
  

  return (
    <div className="w-[85%] flex">
      <div className='w-1/7 flex items-center pl-24 mr-32 gap-7'>
        <ArrowButton direction="&lt;" onClick={()=>handleNext}/>
        <ArrowButton direction="&gt;" onClick={()=>handlePrev}/>
      </div>
      <div className="flex gap-8">
        {Object.values(projects).map((project, index) => (
        <SliderCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
      </div>
    </div>
  )
}

export default Slider