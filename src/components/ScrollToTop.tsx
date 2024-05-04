import React from 'react'

const ScrollToTop = () => {
  function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
    console.log("clicked")
  }

  return (
    <button onClick={() => scrollToTop()} className="w-[24%] h-[24%] pt-2 pb-5 text-color-animation text-3xl font-light underline underline-offset-[0.25rem] decoration-1 decoration-double border-x-2 border-purple-100 rounded-2xl shadow-sm shadow-white">Δ</button>
  )
}

export default ScrollToTop