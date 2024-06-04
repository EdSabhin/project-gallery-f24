import React from 'react'
import CardButton from './CardButton';

interface sliderCardProps {
  video: string;
  title: string;
  description: string;
  href: string;
}

const SliderCard = ({video, title, description, href}:sliderCardProps) => {
  return (
    <div className='item relative'>
      <CardButton href={href} text='View Project' className="absolute rounded-tl-3xl rounded z-10"/>  
      <video autoPlay loop muted 
        playsInline className='w-full h-full object-cover absolute top-0 rounded-tl-3xl rounded-br-3xl rounded ' >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 px-4 pb-4">
        <h2 className="title text-base cormorant-infant-medium-italic 
            text-rose-500">{title.toUpperCase()}</h2>
        <p className="trimmed-description text-stone-100 text-base cormorant-infant-regular">{description}</p>
      </div>
    </div>
  )
}

export default SliderCard