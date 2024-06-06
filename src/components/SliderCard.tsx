import React from 'react'
import CardButton from './CardButton';

interface sliderCardProps {
  video: string;
  title: string;
  description: string;
  shortDescription: string;
  href: string;
}

const SliderCard = ({video, title, description, shortDescription, href}:sliderCardProps) => {
  return (
    <div className='item relative'>
      <div className='h-[4rem]'>
        <CardButton href={href} text='View Project' className="absolute rounded-tl-3xl rounded z-10"/>  
      <video autoPlay loop muted playsInline className='w-full h-full object-cover absolute top-0 rounded-tl-3xl rounded-br-3xl rounded ' >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full absolute bottom-0 py-2 px-4 bg-stone-800 bg-opacity-85 rounded-br-3xl rounded-bl-sm moving-card-gradient">
        <h2 className="title text-base cormorant-infant-semibold-italic 
            text-rose-500">{title.toUpperCase()}</h2>
         <p className="text-stone-100 text-base cormorant-infant-regular">{shortDescription}</p>
      </div>
      </div>
      
    </div>
  )
}

export default SliderCard