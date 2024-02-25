  import React from 'react'
  
  const LeftOver = () => {
    return (
      <div>
         <div className='flex justify-start pt-4 px-12 gap-20 rounded-md'>
          <img width={40} src="/assets/icons/github-logo.png" alt='github logo' className='cursor-pointer'></img>
          <img width={40} src="/assets/icons/linkedin-logo.png" alt='linkedin logo' className='cursor-pointer'></img>
        </div>
        <button className='w-[8rem] h-[3rem] text-lg cormorant-infant-light border-r hover:text-teal-300 border-r-rose-600 border-rose-900 hover:bg-gradient-to-br hover:from-rose-950 from-75% hover:to-rose-900 rounded-md shadow-xl transition duration-200'>{""}</button>
        <h2 className="title text-base cormorant-infant-medium-italic 
            text-rose-500">{""}</h2>
      </div>
    )
  }
  
  export default LeftOver