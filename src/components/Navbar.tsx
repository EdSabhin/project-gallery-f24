import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='w-full flex justify-start items-center gap-12 py-4 lg:py-7 px-6 lg:px-14 text-stone-500 cormorant-sc-semibold bg-gradient-to-l from-stone-300 to-stone-100'>
        <a href="/" className='text-3xl lg:text-6xl lg:px-6 lg:pt-2 lg:pb-3 hover:text-stone-700 '>Home</a>
        <a href="/about" className='text-3xl lg:text-6xl lg:px-6 lg:pt-2 lg:pb-3 hover:text-stone-700 '>About</a>
      </nav>
    </header>
  )
}

export default Navbar