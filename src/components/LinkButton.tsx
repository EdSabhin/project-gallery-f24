import React from 'react'

interface ButtonProps {
  href?: string;
  download?: string;
  text: string;
}

const LinkButton = ({ href, download, text}:ButtonProps) => {
  return (
    <>
      <a href={href} download={download} className='button-transparent w-[50%] h-12 lg:w-[10rem] lg:h-[3rem] flex justify-center items-center pl-[3px] text-[1.13rem] text-stone-100 cormorant-infant-light hover:font-semibold hover:text-stone-700 border-r-2 border-r-stone-100 hover:bg-gradient-to-br hover:from-stone-300 from-55% hover:to-indigo-200 rounded-md shadow-xl transition duration-200'>{text}</a>
    </>
  )
}

export default LinkButton