import React from 'react'
import CardButton from './CardButton';

interface sliderCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const SliderCard = ({image, title, description, href}:sliderCardProps) => {
  const trimDescription = (description, numberOfWords) => {
      const wordsArray = description.split(" ");

      const trimmedDescription = wordsArray.slice(0, numberOfWords);
      return trimmedDescription.join(" ") + " ...";
  }
  
  return (
    <div className='item'>
      <CardButton href={href} text='View Project' className="absolute left-[0%] rounded-tl-3xl  rounded"/>  
      <img src={image} className=' object-cover rounded-tl-3xl rounded-br-3xl rounded' />
      <div className="absolute bottom-0 px-4 pb-4">
        <h2 className="title text-base cormorant-infant-medium-italic 
            text-rose-500">{title}</h2>
        <p className="text-stone-100 text-base cormorant-infant-regular">{trimDescription(description, 5)}</p>
      </div>
    </div>
  )
}

export default SliderCard