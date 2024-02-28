import React from 'react'

interface CvButtonProps {
  href?: string;
  download?: string;
  text?: string;
  arrow?: string;
}

const CvButton = ({href, download, text, arrow}: CvButtonProps) => {
  return (
    <div>
      <a href={href} download={download} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1.15px]">
       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2aa1a3_0%,_50%,#a32a79,#393BB2_100%)]" />
       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2aa1a3_0%,#a32a79_50%,_100%)]" />
       <span className="kode-mono-light inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-stone-300 from-55% to-indigo-200  hover:bg-gradient-to-br hover:from-stone-400 hover:from-55% hover:to-indigo-200 px-5 py-3 hover:px-[4rem] text-sm hover:text-[1rem] text-stone-700 hover:text-stone-100 backdrop-blur-3xl transition">
          {text}
          {arrow && <span className='pl-2 pb-1 text-2xl'>{arrow}</span>}
       </span>
      </a>
    </div>
  )
}

export default CvButton