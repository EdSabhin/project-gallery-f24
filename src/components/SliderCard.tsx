import React from 'react'

const SliderCard = () => {
  return (
    <div className='w-60 h-64 relative rounded-lg cursor-pointer'>
      <img src="/assets/images/img1.jpg" className='w-60 h-64 object-cover rounded-tl-3xl rounded-br-3xl rounded' />
      <div className="absolute bottom-0 px-4 pb-4">
        <h2 className="text-base cormorant-infant-medium-italic 
            text-rose-500">OBERON'S LAIR</h2>
        <p className="text-base cormorant-infant-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default SliderCard