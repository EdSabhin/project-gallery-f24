import React from 'react'

interface ArrowButtonProps {
  direction: string;
}

const ArrowButton = ({ direction }:ArrowButtonProps) => {
  return (
    <>
      <button className='w-[3.2rem] h-[3.2rem] flex justify-center 
         items-center text-2xl font-black
       hover:text-rose-700 rounded-full
       bg-rose-950 hover:bg-white opacity-70 hover:opacity-90
         transition duration-500 '>
      {direction}
      </button>
    </>
  )
}

export default ArrowButton