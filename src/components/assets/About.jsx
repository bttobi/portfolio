import React from 'react';
import EmploymentHistory from './EmploymentHistory';

const About = () => {
  return (<>
      <div className="order-2 rounded-xl p-4 lg:order-1 text-white text-xl sm:text-2xl flex flex-col mx-12 lg:mt-auto w-2/3 lg:w-1/2 shadow-lg shadow-black bg-gray-dark">
        <div className="avatar w-full align-center justify-center">
          <div className="w-24 h-24 md:w-44 md:h-44 mt-4 rounded-full ring ring-blue-dark backdrop-blur ring-offset-base-100 ring-offset-2">
            <img className="blur-0" src="https://media.licdn.com/dms/image/D4D03AQH5fVqq6APlNQ/profile-displayphoto-shrink_800_800/0/1675385469991?e=1686787200&v=beta&t=Pu0k_JzflkjnVWeHBaiTxhDLBVHGnKgVIV-ewV1XDkw" alt="profile picture" />
          </div>
        </div>
        <article className="bio-description mt-8 text-left flex flex-col justify-center font-article">
          <p className="mx-8 text-article text-white" style={{fontSize: "clamp(0.95rem, 3vw, 1.5rem)"}}>I'm front-end web developer and an ICT student at Poznań University of Technology based in Poland.</p>
          <div className="employment-history-wrapper w-full flex justify-center mt-4">
            <button className="m-4 font-main text-xl" aria-label="See work history">
              <label htmlFor="employment-history" className="modal-action btn border-none font-bold p-3 m-0 rounded-lg text-white w-auto h-min">
                <span className="text-center w-full lg:text-lg lg:py-1 text-sm py-0">See work history</span>
              </label>
            </button>
          </div>
        </article>
      </div>
      <EmploymentHistory />
    </>
  )
}

export default About