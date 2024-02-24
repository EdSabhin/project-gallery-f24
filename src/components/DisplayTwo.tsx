import Button from "./Button"

import { projects } from "../utils/projects";

const DisplayTwo = () => {
  return (    
      Object.values(projects).map((project, index) => (
        <div key={index} className="item">
          <img src={project.image} alt=""/>
          <div className='content'>
            <h1 className='author text-xl lg:text-3xl cormorant-sc-regular text-stone-100'>{project.author}</h1>
            <h2 className='title pb-4 text-3xl lg:text-5xl cormorant-sc-semibold text-stone-100'>{project.title}</h2>
            <h2 className=
              'topic pb-2 text-3xl cormorant-infant-medium-italic text-indigo-200'>
              {project.projectTitle.toUpperCase()}
            </h2>
            <p className='itemDescription text-xl lg:text-2xl cormorant-infant-regular text-stone-100'>{project.description}</p>
            <div className='buttons flex mt-6 lg:mt-20 gap-12 lg:gap-24'>
              <Button text='Say Hello'/>
              <Button text='View CV'/>
            </div>
          </div>
        </div>
      ))
  )
}

export default DisplayTwo;

       