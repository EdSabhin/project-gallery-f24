import React from 'react'
import '../styles/global.css'

import MultiButton from "./MultiButton";
import ScrollToTop from './ScrollToTop';

const CeeVee = () => {
  return (
    <div className="w-full px-8 lg:px-24 pb-16 pt-10 lg:py-16 bg-gradient-to-br from-stone-200 from-35% to-indigo-100">
      {/* Title */}
      <div>
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center text-center">
          <img src="/assets/images/cv-icon.svg" alt="" className="w-2/3 lg:w-1/3 mb-8 lg:mr-24 animate-[spin_25s_linear_infinite]"/>
          <div className="flex flex-col justify-center items-center lg:items-start pt-4 pb-16">
              <h1 className="kode-mono-light text-3xl pb-6">Eduardo Sabogal</h1>
              <h2 className="gradient-text-cv kode-mono-bold text-4xl mb-12">Front-end Developer</h2>
            <div className='w-[75%] lg:w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14'>
              <MultiButton href="assets/images/cv-ed-sabhin.pdf" download="assets/images/cv-ed-sabhin.pdf" text="Download CV" />
              <MultiButton href="/" text="Go back" arrow="&larr;"/>
            </div>
          </div>
        </div>   
        
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center lg:items-start mb-4">
        <div className='w-max gradient-border-cv border-b-4 pb-1 mt-3 mb-8 kode-mono-regular flex justify-start gap-8'>
          <h3>SAY HELLO</h3>
          <h3>01</h3>
        </div>

        <ul className="kode-mono-light flex flex-col gap-6 mb-10">
          <div className="w-full grid grid-cols-2 items-center">

            <div className="flex justify-center lg:justify-start">
              <a href="https://github.com/Edsabhin" className="hover:text-purple-700 cursor-pointer">GitHub</a>
            </div>
            <div className="flex justify-center">
              <a href="https://github.com/Edsabhin" className="w-[22%] lg:w-[21%] text-center text-xl hover:text-pink-400 shadow-sm shadow-purple-400 cursor-pointer rounded-full arrow-color-animation">&rarr;</a>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 items-center">
            <div className="flex justify-center lg:justify-start">
              <a href="https://linkedin.com/in/eduardo-s-2b0b20179"className="hover:text-purple-700 cursor-pointer">LinkedIn</a>
            </div>
            <div className="flex justify-center">
              <a href="https://linkedin.com/in/eduardo-s-2b0b20179" className="w-[22%] lg:w-[21%] text-center text-xl hover:text-pink-400 shadow-sm shadow-purple-400 cursor-pointer rounded-full arrow-color-animation">&rarr;</a>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 items-center">
            <div className="flex justify-center lg:justify-start">
              <a href="mailto:edsabhin@yahoo.com" className="hover:text-purple-700 cursor-pointer">E-mail</a>
            </div>
            <div className="flex justify-center">
              <a href="mailto:edsabhin@yahoo.com" className="w-[22%] lg:w-[21%] text-center text-xl hover:text-pink-400 shadow-sm shadow-purple-400 cursor-pointer rounded-full arrow-color-animation">&rarr;</a>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 items-center">
            <div className="flex justify-center lg:justify-start">
              <a href="/" className="text-center hover:text-purple-700 cursor-pointer">Project Gallery</a>
            </div>
            <div className="flex justify-center">
              <a href="mailto:edsabhin@yahoo.com" className="w-[22%] lg:w-[21%] text-center text-xl hover:text-pink-400 shadow-sm shadow-purple-400 cursor-pointer rounded-full arrow-color-animation">&rarr;</a>
            </div>
          </div>        
        </ul>
      </div>

      {/* Experience */}
      <div className="flex flex-col items-center lg:items-start">
        <div className='w-max gradient-border-cv border-b-4 pb-1 mb-8 kode-mono-regular flex justify-center gap-8'>
          <h3>EXPERIENCE</h3>
          <h3>02</h3>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <h4 className="year-color-animation w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 mb-8 shadow shadow-indigo-950">2022-2024</h4>
          <h4 className="gradient-text-cv kode-mono-semibold mb-2">IT LOOKS SIMPLE</h4>
          <h4 className="gradient-text-cv kode-mono-semibold mb-4 text-center">- Front-end Development Internship</h4>
          <p className="kode-mono-light pb-6 mb-4 text-center lg:text-start">Collaborated closely with a dynamic development team, following Agile Scrum methodologies. Worked with essential project management tools such as Jira, and fostered efficient team communication through Slack.</p>
          <h4 className="gradient-text-cv kode-mono-semibold text-center lg:text-start mb-4">- Technical Writer</h4>
          <p className="kode-mono-light pb-6 mb-4 text-center lg:text-start">Provided end-user documentation for a successfully launched product.</p>
          <h4 className="gradient-text-cv kode-mono-semibold text-center lg:text-start mb-4"> - UX Tester</h4>
          <p className="kode-mono-light pb-6 mb-4 text-center lg:text-start">Delivered timely feedback to team leaders on new product features during the staging phase of the company's flagship product.</p>
          <h4 className="gradient-text-cv kode-mono-semibold text-center lg:text-start mb-4">- English Trainer</h4>
          <p className="kode-mono-light pb-10 mb-4 text-center lg:text-start">Conducted English daily training sessions for the Web Development and Graphic Design teams.</p>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="year-color-animation w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 mb-8 shadow shadow-indigo-950">2018-2020</h4>
          <h4 className="gradient-text-cv kode-mono-semibold mb-2">TELEPERFORMANCE</h4>
          <h4 className="gradient-text-cv kode-mono-semibold mb-4">- Interpreter</h4>
          <p className="kode-mono-light pb-10 mb-4 text-center lg:text-start">Developed proficiency in various technical languages, including those used in medical, financial, and legal contexts, focusing on accurate and humane communication between parties, all against the backdrop of real-time consecutive interpretation.</p>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="year-color-animation w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 mb-8 shadow shadow-indigo-950">2014-2024</h4>
          <h4 className="gradient-text-cv kode-mono-semibold mb-2">ENGLISH TUTORING</h4>
          <h4 className="gradient-text-cv kode-mono-semibold mb-4">- Private Tutor</h4>
          <p className="kode-mono-light pb-10 mb-4 text-center lg:text-start"> Personalized instruction to individuals and groups seeking to learn English. Tailored a teaching approach to the unique needs and learning styles of each student, helping them develop proficiency in reading, writing, speaking, and listening in the target language.</p>
        </div>

        {/* Skills */}
        <div className='w-max gradient-border-cv border-b-4 pb-1 mb-8 kode-mono-regular flex justify-start gap-12'>
          <h3>SKILLS</h3>
          <h3>03</h3>
        </div>
        <h4 className="gradient-text-cv kode-mono-semibold mb-6 underline underline-offset-2 decoration-1 decoration-purple-200 decoration-dashed">{"< TECH & DEVELOPMENT >"}</h4>
        <div className="flex flex-col items-center lg:items-start gap-8">   
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>React.js + Next.js</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>Vue 3 + Nuxt.js</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>Astro</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>TypeScript</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>Tailwind CSS</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>GitHub Version Control</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>State Management</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>User Experience</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>Responsiveness</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white'>Software Performance</h4>
          <h4 className='w-full lg:w-[93%] text-center kode-mono-light border-x-2 border-purple-100 rounded-sm py-2 px-3 shadow-sm shadow-white mb-12'>Documentation</h4>
        </div>
         <h4 className="gradient-text-cv kode-mono-semibold mb-6 underline underline-offset-2 decoration-1 decoration-purple-200 decoration-dashed">{"< CORE PRINCIPLES >"}</h4>
        <div>
          <div className="flex flex-col items-center lg:items-start  gap-8">
            <div className='w-full flex items-center kode-mono-light text-start py-2 px-3 gap-5 shadow-md shadow-orange-100 rounded-sm'>
              <h4 className="text-xl text-orange-400">&rarr;</h4>
              <h4 className="text-center lg:text-start">
                Effective Communication</h4>
            </div>
            <div className='w-full flex items-center kode-mono-light text-start py-2 px-3 gap-5 shadow-md shadow-orange-100 rounded-sm'>
              <h4 className="text-xl text-orange-400">&rarr;</h4>
              <h4 className="text-center lg:text-start">
                Problem Solving</h4>
            </div>
            <div className='w-full flex items-center kode-mono-light text-start py-2 px-3 gap-5 shadow-md shadow-orange-100 rounded-sm'>
              <h4 className="text-xl text-orange-400">&rarr;</h4>
              <h4 className="text-center lg:text-start">
                Detail-oriented</h4>
            </div>
            <div className='w-full flex items-center kode-mono-light text-start py-2 px-3 gap-5 shadow-md shadow-orange-100 rounded-sm'>
              <h4 className="text-xl text-orange-400">&rarr;</h4>
              <h4 className="text-center lg:text-start">
                Continuous Improvement</h4>
            </div>
            <div className='w-full flex items-center kode-mono-light text-start py-2 px-3 gap-5 shadow-md shadow-orange-100 rounded-sm'>
              <h4 className="text-xl text-orange-400">&rarr;</h4>
              <h4 className="text-center lg:text-start">
                Adaptability</h4>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className='w-max gradient-border-cv border-b-4 pb-1 mt-14 mb-8 kode-mono-regular flex gap-8'>
          <h3>LANGUAGES</h3>
          <h3>04</h3>
        </div>
        <div className='flex justify-center pb-10 mb-4 gap-14'>
          <div className='flex flex-col items-start gap-3 kode-mono-light'>
            <h4><span className='arrow-color-animation text-pink-400 mr-10'>&gt;&gt;</span>ENGLISH</h4>
            <h4><span className='arrow-color-animation text-pink-400  mr-10'>&gt;&gt;</span>SPANISH</h4>
            <h4><span className='arrow-color-animation text-pink-400 mr-10'>&gt;&gt;</span>FRENCH</h4>
          </div>
          <div className='flex flex-col items-end gap-3 kode-mono-light'>
             <h4 className="text-purple-700">C2</h4>
             <h4 className="text-purple-700">C2</h4>
             <h4 className="text-purple-700">C1</h4>
          </div>
        </div>

          {/* Education */}
          <div className='w-max gradient-border-cv border-b-4 pb-1 mb-8 kode-mono-regular flex lg:justify-start gap-8'>
            <h3>EDUCATION</h3>
            <h3>05</h3>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="year-color-animation w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 mb-4 shadow shadow-indigo-950">2013</h4>
            <h4 className="gradient-text-cv kode-mono-semibold text-center mb-2">Los Angeles College of Music</h4>
            <h4 className="gradient-text-cv text-3xl cormorant-infant-medium-italic mb-12">Associate of Arts</h4>
            <h4 className="year-color-animation w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 mb-4 shadow shadow-indigo-950">2007</h4>
            <h4 className="gradient-text-cv kode-mono-semibold text-center mb-2">Lycée Français Louis Pasteur</h4>
            <h4 className="gradient-text-cv gradient-border-cv text-3xl cormorant-infant-medium-italic pb-8 border-b-2 mb-10 ">Baccalauréat Français</h4>
        </div>
        <ScrollToTop/>
      </div>
    </div>
  )
}

export default CeeVee