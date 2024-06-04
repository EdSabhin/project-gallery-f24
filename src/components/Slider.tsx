import React, { useState } from 'react'
import SliderCard from "../components/SliderCard"

import { projects } from "../utils/projects"

const Slider = () => {
  return (
    <div>
      <div className="thumbnail flex gap-8">
        {Object.values(projects).map((project) => (
        <SliderCard
          key={project.id}
          video={project.video}
          title={project.projectTitle}
          description={project.description}
          href={project.href}
        />
      ))}
      </div>
    </div>
  )
}

export default Slider