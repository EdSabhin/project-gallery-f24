import React from 'react'
import '../styles/global.css'

import CvButton from "../components/CvButton";

const CeeVee = () => {
  return (
    <div className="w-full px-8 lg:px-24 pb-16 pt-10 lg:py-16 bg-gradient-to-br from-stone-200 from-35% to-indigo-100">
  
      {/* Title */}
      <div>
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center">
          <img src="/assets/images/cv-icon.svg" alt="" className="w-2/3 lg:w-1/3 mb-8 lg:mr-24" />
          <div className="flex flex-col justify-start pt-4 pb-16">
            <h1 className="kode-mono-light text-3xl">Eduardo Sabogal</h1>
            <h2 className="gradient-text-cv kode-mono-bold text-4xl mb-12">Front-end Developer</h2>
            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-14'>
              <CvButton href="assets/images/cv-ed-sabhin.pdf" download="assets/images/cv-ed-sabhin.pdf" text="Download CV" />
              <CvButton href="/" text="Go back" arrow="&larr;"/>
            </div>
          </div>
        </div>   
        
      </div>

      {/* Contact */}
      <div className="flex flex-col">
        <div className='w-max gradient-border-cv border-b-4 pb-1 mt-3 mb-3 kode-mono-regular flex justify-start gap-8'>
          <h3>CONTACT</h3>
          <h3>01</h3>
        </div>  
        <ul className="kode-mono-light flex flex-col gap-3 mb-10">
          <a href="/" className="w-max hover:text-indigo-500">edsabhin.dev
            <span className="pl-2 text-xl">&rarr;</span></a>
          <a href="https://github.com/Edsabhin" className="w-max hover:text-indigo-500">github.com/Edsabhin
            <span className="pl-2 text-xl">&rarr;</span>
          </a>
          <a href="mailto:edsabhin@yahoo.com" className="w-max hover:text-indigo-500">send e-mail
            <span className="pl-2 text-xl">&rarr;</span>
          </a>
          <p>+57 (313)228-30-13</p>
        </ul>
      </div>

      {/* Experience */}
      <div className="flex flex-col">
        <div className='w-max gradient-border-cv border-b-4 pb-1 mb-4 kode-mono-regular flex justify-start gap-8'>
          <h3>EXPERIENCE</h3>
          <h3>02</h3>
        </div>
        <div>
          <h4 className="w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 shadow shadow-indigo-950 mb-4">2022-2024</h4>
          <h4 className="gradient-text-cv kode-mono-semibold">IT LOOKS SIMPLE</h4>
          <h4 className="gradient-text-cv kode-mono-semibold ml-4">- Front-end Development Internship</h4>
          <p className="kode-mono-light pb-6 ml-4">Collaborated closely with a dynamic development team, following Agile Scrum methodologies. Worked with essential project management tools such as Jira, and fostered efficient team communication through Slack.</p>
          <h4 className="gradient-text-cv kode-mono-semibold ml-4">- Technical Writer</h4>
          <p className="kode-mono-light pb-6 ml-4">Provided end-user documentation for a successfully launched product.</p>
          <h4 className="gradient-text-cv kode-mono-semibold ml-4"> - UX Tester</h4>
          <p className="kode-mono-light pb-6 ml-4">Delivered timely feedback to team leaders on new product features during the staging phase of the company's flagship product.</p>
          <h4 className="gradient-text-cv kode-mono-semibold ml-4">- English Trainer</h4>
          <p className="kode-mono-light pb-10 ml-4 mb-4">Conducted English daily training sessions for the Web Development and Graphic Design teams.</p>
        </div>
        <div>
          <h4 className="w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 shadow shadow-indigo-950 mb-4">2018-2020</h4>
          <h4 className="gradient-text-cv kode-mono-semibold">TELEPERFORMANCE</h4>
          <h4 className="gradient-text-cv kode-mono-semibold ml-4">- Interpreter</h4>
          <p className="kode-mono-light pb-10 ml-4 mb-4">Developed proficiency in various technical languages, including those used in medical, financial, and legal contexts, focusing on accurate and humane communication between parties, all against the backdrop of real-time consecutive interpretation.</p>
        </div>
        <div>
          <h4 className="w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 shadow shadow-indigo-950 mb-4">2014-2024</h4>
          <h4 className="gradient-text-cv kode-mono-semibold">ENGLISH TUTORING</h4>
          <h4 className="gradient-text-cv kode-mono-semibold ml-4">- Private Tutor</h4>
          <p className="kode-mono-light pb-10 ml-4">Developed proficiency in various technical languages, including those used in medical, financial, and legal contexts, focusing on accurate and humane communication between parties, all against the backdrop of real-time consecutive interpretation.</p>
        </div>

        {/* Skills */}
        <div className='w-max gradient-border-cv border-b-4 pb-1 mb-3 kode-mono-regular flex justify-start gap-8'>
          <h3>SKILLS</h3>
          <h3>03</h3>
        </div>
        <div>
          <h4 className="gradient-text-cv kode-mono-semibold">Technical</h4>
          <h4 className='kode-mono-light'>- React.js + Next.js</h4>
          <h4 className='kode-mono-light'>- Vue 3 + Nuxt.js</h4>
          <h4 className='kode-mono-light'>- Astro</h4>
          <h4 className='kode-mono-light'>- TypeScript</h4>
          <h4 className='kode-mono-light'>- Tailwind CSS</h4>
          <h4 className='kode-mono-light'>- GitHub Version Control</h4>
          <h4 className='kode-mono-light'>- State Management</h4>
          <h4 className='kode-mono-light'>- User Experience</h4>
          <h4 className='kode-mono-light'>- Responsiveness</h4>
          <h4 className='kode-mono-light'>- Software Performance</h4>
          <h4 className='kode-mono-light pb-8'>- Documentation</h4>
        </div>
        <div>
          <h4 className="gradient-text-cv kode-mono-semibold">Principles</h4>
          <h4 className='kode-mono-light'>- Effective Communication</h4>
          <h4 className='kode-mono-light'>- Problem-solving</h4>
          <h4 className='kode-mono-light'>- Detail-oriented</h4>
          <h4 className='kode-mono-light'>- Continuous Improvement</h4>
          <h4 className='kode-mono-light pb-10'>- Adaptability</h4>
        </div>

        {/* Languages */}
        <div className='w-max gradient-border-cv border-b-4 pb-1 mb-3 kode-mono-regular flex justify-start gap-8'>
          <h3>LANGUAGES</h3>
          <h3>04</h3>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='lg:w-[30%] grid grid-cols-2 gap-8'>
             <h4 className='kode-mono-light'>* ENGLISH</h4>
             <h4 className='kode-mono-light'>C2</h4>
          </div>
          <div className='lg:w-[30%] grid grid-cols-2 gap-8'>
             <h4 className='kode-mono-light'>* SPANISH</h4>
             <h4 className='kode-mono-light'>C2</h4>
          </div>
          <div className='lg:w-[30%] grid grid-cols-2 gap-8'>
             <h4 className='kode-mono-light'>* FRENCH</h4>
             <h4 className='kode-mono-light pb-10'>C1</h4>
          </div>

          {/* Education */}
          <div className='w-max gradient-border-cv border-b-4 pb-1 mb-3 kode-mono-regular flex justify-start gap-8'>
            <h3>EDUCATION</h3>
            <h3>05</h3>
          </div>
          <div>
            <h4 className="w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 shadow shadow-indigo-950 mb-4">2013</h4>
            <h4 className="gradient-text-cv kode-mono-semibold">Los Angeles College of Music</h4>
            <h4 className="gradient-text-cv text-3xl cormorant-infant-medium-italic mb-12">Associate of Arts</h4>
            <h4 className="w-max gradient-border-cv kode-mono-light border-t-2 px-3 py-1 shadow shadow-indigo-950 mb-4">2007</h4>
            <h4 className="gradient-text-cv kode-mono-semibold">Lycée Français Louis Pasteur</h4>
            <h4 className="gradient-text-cv gradient-border-cv text-3xl cormorant-infant-medium-italic pb-8 border-b-2 ">Baccalauréat Français</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeeVee