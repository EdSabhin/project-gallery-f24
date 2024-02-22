import React from 'react'

interface ButtonProps {
  text: string;
}

const Button = ({text}:ButtonProps) => {
  return (
    <>
      <button className='w-[8rem] h-[3rem] text-lg cormorant-infant-light border-r hover:text-teal-300 border-r-rose-600 border-rose-900 hover:bg-gradient-to-br hover:from-rose-950 from-75% hover:to-rose-900 rounded-md shadow-xl transition duration-200'>{text}</button>
    </>
  )
}

export default Button