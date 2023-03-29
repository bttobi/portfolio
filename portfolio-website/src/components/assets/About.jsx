import React from 'react';

const About = () => {
  return (
    <div className="mockup-code mt-12 text-white text-2xl flex flex-col w-1/2 mr-8 ml-16 shadow-lg shadow-black">
      <div className="avatar w-full align-center justify-center">
        <div className="w-44 h-44 mt-4 rounded-full ring ring-blue-dark backdrop-blur ring-offset-base-100 ring-offset-2">
          <img className="blur-0" src="./photo.jpg" alt="profile picture" />
        </div>
      </div>
      <article className="bio-description mt-8 text-left">
        <p className="mx-8">Hi! I’m a front end web developer and an ICT student at Poznań University of Technology based in Poland.</p>
        <br />
        <p className="mx-8">Currently working at GSK.</p>
      </article>
    </div>
  )
}

export default About