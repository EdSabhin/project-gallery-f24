import React, { useState } from 'react'
import SliderCard from "../components/SliderCard"
import ArrowButton from './ArrowButton'

import { projects } from "../utils/projects"

const Slider = () => {
  return (
    <div className="thumbnail w-[85%] flex">
      <div className="flex gap-8">
        {Object.values(projects).map((project, index) => (
        <SliderCard
          key={index}
          image={project.image}
          title={(project.projectTitle).toUpperCase()}
          description={project.description}
        />
      ))}
      </div>
    </div>
  )
}

export default Slider