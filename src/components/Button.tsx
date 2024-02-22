import React from 'react'

interface ButtonProps {
  text: string;
}

const Button = ({text}:ButtonProps) => {
  return (
    <>
      <button className='w-[8rem] h-[3rem] text-lg cormorant-infant-light border-r border-r-rose-600 hover:border border-rose-900 rounded-md active:scale-105 shadow-xl hover:scale-105 transition duration-100'>{text}</button>
    </>
  )
}

export default Button