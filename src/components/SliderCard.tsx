import React from 'react'

interface sliderCardProps {
  image: string;
  title: string;
  description: string;
}

const SliderCard = ({image, title, description}:sliderCardProps) => {
  return (
    <div className='item w-40 h-64 relative rounded-lg'>
      <img src={image} className='w-60 h-64 object-cover rounded-tl-3xl rounded-br-3xl rounded' />
      <div className="absolute bottom-0 px-4 pb-4">
        <h2 className="title text-base cormorant-infant-medium-italic 
            text-rose-500">{title}</h2>
        <p className="text-stone-100 text-base cormorant-infant-regular">{description}</p>
      </div>
    </div>
  )
}

export default SliderCard