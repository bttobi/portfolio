import React from 'react'

const Home = () => {
  return (
    <div className="home w-full h-full pt-20 flex flex-col align-center justify-center items-center">
      <div className="KAPIBARA"></div>
      <div className="about flex flex-col align-center justify-center items-center mt-80">
        <div className="avatar">
          <div className="w-44 h-44 rounded-full ring ring-blue-dark backdrop-blur ring-offset-base-100 ring-offset-2">
            <img className="blur-0" src="./photo.jpg" alt="profile-pic" />
          </div>
        </div>
        <article className="mockup-code mt-12 text-white text-2xl">
          <p className="mx-8">Hi! I’m a front end web developer and an ICT student at Poznań University of Technology based in Poland.</p>
          <p className="mx-8">Currently working at GSK.</p>
        </article>
      </div>
    </div>
  )
}

export default Home