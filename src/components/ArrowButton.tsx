import React from 'react'

interface ArrowButtonProps {
  direction: string;
}

const ArrowButton = ({ direction }:ArrowButtonProps) => {
  return (
    <>
      <button className='w-[3.2rem] h-[3.2rem] flex justify-center items-center 
      text-2xl font-black hover:text-teal-300 rounded-full bg-gradient-to-br
    hover:from-rose-950 hover:to-slate-300 from-20% bg-white opacity-70
      hover:opacity-90 transition duration-500 '>
      {direction}
      </button>
    </>
  )
}

export default ArrowButton