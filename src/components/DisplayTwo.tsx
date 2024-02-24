import Button from "./Button"

import { projects } from "../utils/projects";

const DisplayTwo = () => {
  return (    
      Object.values(projects).map((project, index) => (
        <div key={index} className="item">
          <img src={project.image} alt=""/>
          <div className='content'>
            <h1 className='author'>{project.author}</h1>
            <h2 className='title'>{project.title}</h2>
            <h2 className=
              'topic pb-2 text-3xl cormorant-infant-medium-italic text-rose-500'>
              {project.projectTitle}
            </h2>
            <p className='itemDescription'>{project.description}</p>
            <div className=''>
              <Button text='Say Hello'/>
              <Button text='View CV'/>
            </div>
          </div>
        </div>
      ))
  )
}

export default DisplayTwo;

       