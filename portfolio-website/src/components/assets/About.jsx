import React from 'react';
import EmploymentHistory from './EmploymentHistory';

const About = () => {
  return (<>
      <div className="order-2 rounded-xl p-4 lg:order-1 text-white text-xl mt-8 sm:text-2xl flex flex-col mx-12 w-2/3 lg:w-1/2 shadow-lg shadow-black bg-gray-dark">
        <div className="avatar w-full align-center justify-center">
          <div className="w-24 h-24 md:w-44 md:h-44 mt-4 rounded-full ring ring-blue-dark backdrop-blur ring-offset-base-100 ring-offset-2">
            <img className="blur-0" src="./photo.jpg" alt="profile picture" />
          </div>
        </div>
        <article className="bio-description mt-8 text-left flex flex-col justify-center">
          <p className="mx-8 lg:text-2xl md:text-xl text-lg">Hi! I’m a front-end web developer and an ICT student at Poznań University of Technology based in Poland.</p>
          <div className="employment-history-wrapper w-full flex justify-center mt-4">
            <label htmlFor="employment-history" className="modal-action btn border-none font-bold p-3 rounded-lg text-white mx-8 w-auto h-min"><span className="text-center w-full">See work history</span></label>
          </div>
        </article>
      </div>
      <EmploymentHistory />
    </>
  )
}

export default About