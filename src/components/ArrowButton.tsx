import React from 'react'

interface ArrowButtonProps {
  id: string;
  direction?: string;
}

const ArrowButton = ({ id, direction, 'aria-label': ariaLabel }) => {
  return (
    <div className='diamond'>
      <button id={id} aria-label={ariaLabel}
        className={`${id === "prev" ? "hidden" : "arrow-color-animation glow-on-click w-[3.5rem] h-[3.5rem] flex justify-center items-center text-2xl lg:text-3xl transition duration-500 cormorant-infant-medium rotate-90 rounded-full bg-gradient-to-tr from-stone-300 from-55% to-indigo-200"}`}

      >Λ
      </button>
    </div>
  )
}

export default ArrowButton