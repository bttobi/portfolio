import React from 'react'

const Home = () => {
  return (
    <div className="home w-full h-full pt-20 flex flex-col align-center justify-center">
      <div className="KAPIBARA"></div>
      <div className="about w-full flex align-center justify-center">
        <div className="avatar">
          <div className="w-48 rounded-full ring ring-blue-dark backdrop-blur ring-offset-base-100 ring-offset-2">
            <img className="blur-0" src="./photo.jpg" alt="profile-pic" />
          </div>
        </div>
        <article></article>
      </div>
    </div>
  )
}

export default Home