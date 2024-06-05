import React from 'react'

interface ArrowButtonProps {
  id: string;
  direction?: string;
}

const ArrowButton = ({ id, direction, 'aria-label': ariaLabel }) => {
  return (
    <>
      <button id={id} aria-label={ariaLabel}
        className={`${id === "prev" ? "hidden" : "arrow-color-animation glow-on-click py-[1rem] md:py-[1.5rem] lg:py-[2rem] px-[2rem] lg:px-[2.5rem] flex justify-center items-center text-2xl xl:text-3xl transition duration-500 cormorant-infant-medium rotate-90 rounded-tr-full rounded-bl-full bg-gradient-to-tr from-stone-300 from-55% to-indigo-200"}`}

      >Λ
      </button>
    </>
  )
}

export default ArrowButton