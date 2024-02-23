import React, { useState } from 'react'
import SliderCard from "../components/SliderCard"
import ArrowButton from './ArrowButton'

import { projects } from "../utils/projects"

const Slider = () => {
  return (
    <div className="w-[85%] flex">
      <div className='w-1/7 flex items-center pl-24 mr-32 gap-7'>
        <ArrowButton direction="&lt;" onClick={()=>""}/>
        <ArrowButton direction="&gt;" onClick={()=>""}/>
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