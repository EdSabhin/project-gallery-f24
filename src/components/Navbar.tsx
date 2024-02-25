import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='w-full flex justify-start items-center py-4 lg:py-7 px-8 lg:px-28 gap-10 text-stone-500 cormorant-sc-semibold bg-gradient-to-l from-stone-300 to-stone-100 z-50'>
        <a href="/" className='text-3xl lg:text-5xl lg:px-6 lg:pt-2 lg:pb-3 hover:text-stone-700 '>Home</a>
        <a href="/about" className='text-3xl lg:text-5xl lg:px-6 lg:pt-2 lg:pb-3 hover:text-stone-700 '>About</a>
      </nav>
    </header>
  )
}

export default Navbar