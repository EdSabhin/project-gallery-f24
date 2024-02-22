import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-32 flex justify-start items-center px-16 gap-24 cormorant-sc-semibold'>
        <a href="" className='text-6xl'>Home</a>
        <a href="" className='text-6xl'>About</a>
        <div className='flex justify-start py-4 px-12 gap-20 bg-gradient-to-r from-rose-900 to-stone-900 rounded-md'>
          <img width={40} src="/assets/icons/github-logo.png" alt='github logo'></img>
          <img width={40} src="/assets/icons/linkedin-logo.png" alt='linkedin logo'></img>
        </div>
      </nav>
    </>
  )
}

export default Navbar