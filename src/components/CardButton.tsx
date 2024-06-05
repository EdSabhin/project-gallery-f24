import React from 'react'

interface ButtonProps {
  href?: string;
  text: string;
  className: string;
}

const CardButton = ({ href, text, className}:ButtonProps) => {
  return (
    <>
     <a href={href} target="_blank"
        rel="noopener noreferrer" className={`gradient-border w-[10.65rem] h-[3rem] lg:h-[2.7rem] flex justify-center items-center pl-2 text-[1.13rem] text-stone-950 hover:text-stone-100 cormorant-infant-regular hover:border-b-[0.15rem] bg-gradient-to-br from-stone-300 from-55% to-indigo-200 hover:bg-gradient-to-br hover:from-stone-900 hover:from-65% rounded-bl-[0px] rounded-br-[0px] transition duration-200 ${className ? className : ''}`}>{text}</a>
    </>
  )
}

export default CardButton