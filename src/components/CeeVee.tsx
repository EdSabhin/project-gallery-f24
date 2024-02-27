import React from 'react'
import '../styles/global.css'

const CeeVee = () => {
  return (
    <div className="w-full p-8 bg-gradient-to-br from-stone-200 from-35% to-indigo-100">
      <div className="">

        <div className="w-full flex">
          <img src="/assets/images/cv-icon.svg" alt="" className="w-1/3" />
          <div className="flex flex-col pt-4 pb-8 gap-3">
            <h1 className="kode-mono-bold text-2xl">Eduardo Sabogal</h1>
            <h2 className="kode-mono-bold text-2xl">Front-end Developer</h2>
          </div>
        </div>   
        
      </div>
      <div className="flex flex-col">
        <div className='kode-mono-regular flex justify-start gap-7'>
          <h3>CONTACT</h3>
          <h3>01</h3>
        </div>  
        <ul className="kode-mono-light flex flex-col">
          <a>edsabhin.dev</a>
          <a>github.com/Edsabhin</a>
          <a href="mailto:edsabhin@yahoo.com">Send E-mail</a>
          <p>(+57) 313-228-30-13</p>
        </ul>
      </div>
      <div className="flex flex-col py-12">
        <div className='kode-mono-regular flex justify-start gap-8'>
          <h3>EXPERIENCE</h3>
          <h3>02</h3>
        </div>
        <div className="pt-1 pb-8">
          <h4 className="kode-mono-light">2022-2024</h4>
          <h4 className="kode-mono-semibold">IT LOOKS SIMPLE</h4>
          <h4 className="kode-mono-semibold">- Front-end Development Internship</h4>
          <p className="kode-mono-light">Collaborated closely with a dynamic development team, following Agile Scrum methodologies. Worked with essential project management tools such as Jira, and fostered efficient team communication through Slack.</p>
          <h4>- Technical Writer</h4>
          <p>Provided end-user documentation for a successfully launched product.</p>
          <h4>- UX Tester</h4>
          <p>Delivered timely feedback to team leaders on new product features during the staging phase of the company's flagship product.</p>
          <h4>- English Trainer</h4>
          <p>Conducted English daily training sessions for the Web Development and Graphic Design teams.</p>
        </div>
        <div>
          <h4>2018-2020</h4>
          <h4>TELEPERFORMANCE</h4>
          <h4>- Interpreter</h4>
          <p>Developed proficiency in various technical languages, including those used in medical, financial, and legal contexts, focusing on accurate and humane communication between parties, all against the backdrop of real-time consecutive interpretation.</p>
        </div>
        <div>
          <h4>2014-2024</h4>
          <h4>ENGLISH TUTORING</h4>
          <h4>- Private Tutor</h4>
          <p>Developed proficiency in various technical languages, including those used in medical, financial, and legal contexts, focusing on accurate and humane communication between parties, all against the backdrop of real-time consecutive interpretation.</p>
        </div>
      </div>
    </div>
  )
}

export default CeeVee