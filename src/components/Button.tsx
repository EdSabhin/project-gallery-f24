import React from 'react'

interface ButtonProps {
  text: string;
}

const Button = ({text}:ButtonProps) => {
  return (
    <>
      <button className='buttonTransparent w-24 h-12 lg:w-[8.1rem] lg:h-[3.1rem] pl-2 text-[1.13rem] text-stone-100 cormorant-infant-light hover:font-semibold hover:text-stone-700 border-r-2 border-r-stone-100 hover:bg-gradient-to-br hover:from-stone-300 from-55% hover:to-indigo-200 rounded-md shadow-xl transition duration-200'>{text}</button>
    </>
  )
}

export default Button