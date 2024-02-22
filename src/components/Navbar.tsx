import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-32 flex justify-start items-center px-16 gap-24 cormorant-sc-semibold'>
        <a href="" className='text-6xl hover:text-teal-300'>Home</a>
        <a href="" className='text-6xl hover:text-teal-300'>About</a>
        <div className='flex justify-start pt-4 px-12 gap-20 rounded-md'>
          <img width={40} src="/assets/icons/github-logo.png" alt='github logo' className='cursor-pointer'></img>
          <img width={40} src="/assets/icons/linkedin-logo.png" alt='linkedin logo' className='cursor-pointer'></img>
        </div>
      </nav>
    </>
  )
}

export default Navbar