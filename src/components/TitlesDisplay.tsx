import Button from "./Button"
import LinkButton from "./LinkButton"

import { projects } from "../utils/projects";

const TitlesDisplay = () => {
  return (    
      Object.values(projects).map((project, index) => (
        <div key={index} className="item">
          <img src={project.image} alt=""/>
          <div className='content'>
            <h1 className='author text-2xl lg:text-3xl cormorant-sc-regular text-stone-100'>{project.author}</h1>
            <h2 className='title pb-4 text-3xl lg:text-5xl cormorant-sc-semibold text-stone-100'>{project.title}</h2>
            <h2 className=
              'topic pb-2 text-4xl gradient-text cormorant-infant-medium-italic'>
              {project.projectTitle.toUpperCase()}
            </h2>
            <p className='itemDescription text-xl lg:text-2xl cormorant-infant-regular text-stone-100'>{project.description}</p>
            <div className='buttons flex mt-6 lg:mt-20 gap-12 lg:gap-12'>
              <LinkButton href={project.href} text={`${project.projectTitle}`} />
              <LinkButton href="/cv" text="View CV"/>
              
            </div>
          </div>
        </div>
      ))
  )
}

export default TitlesDisplay;

       