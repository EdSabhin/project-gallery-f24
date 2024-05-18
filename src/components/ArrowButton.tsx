import React from 'react'

interface ArrowButtonProps {
  id: string;
  direction: string;
}

const ArrowButton = ({ id, direction, 'aria-label': ariaLabel }) => {
  return (
    <>
      <button id={id} aria-label={ariaLabel}
        className='glow-on-click w-[2.7rem] h-[2.7rem] lg:w-[3.2rem] lg:h-[3.2rem] flex justify-center items-center pb-[0.2rem] text-xl lg:text-2xl font-base hover:border-indigo-200 bg-stone-100 hover:bg-gradient-to-b hover:from-stone-100 hover:from-95% hover:to-indigo-200 opacity-40 hover:opacity-90 transition duration-300 rounded-full'
      >{direction}
      </button>
    </>
  )
}

export default ArrowButton