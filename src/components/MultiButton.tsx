import React from 'react'

interface MultiButtonProps {
  href?: string;
  download?: string;
  text?: string;
  arrow?: string;
}

const MultiButton = ({href, download, text, arrow}: MultiButtonProps) => {
  return (
    <>
      <a href={href} download={download} className="relative inline-fle h-12 overflow-hidden rounded-full p-[1.15px] lg:p-[1.32px]">
       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8803fc_0%,_50%,#fc9003,#a32a79_100%)]" />
       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2aa1a3_0%,#a32a79_50%,_100%)]" />
       <span className="kode-mono-light inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-stone-300 from-55% to-indigo-200  hover:bg-gradient-to-br hover:from-stone-400 hover:from-55% hover:to-indigo-200 px-8 lg:hover:px-[4rem] text-stone-700 hover:text-stone-100 backdrop-blur-3xl transition">
          {text}
          {arrow && <span className='pl-2 pb-1 text-xl'>{arrow}</span>}
       </span>
      </a>
    </>
  )
}

export default MultiButton