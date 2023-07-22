import React from "react";
import EmploymentHistory from "./EmploymentHistory";

const About = () => {
  return (
    <>
      <div className="order-2 mx-12 flex w-2/3 flex-col rounded-xl bg-gray-dark p-4 text-xl text-white shadow-lg shadow-black sm:text-2xl lg:order-1 lg:w-1/2">
        <div className="align-center avatar w-full justify-center">
          <div className="mt-4 h-24 w-24 rounded-full ring ring-blue-dark ring-offset-2 ring-offset-base-100 backdrop-blur md:h-44 md:w-44">
            <img
              className="blur-0"
              src="profile_picture.jpg"
              alt="profile picture"
            />
          </div>
        </div>
        <article className="bio-description mt-8 flex flex-col justify-center text-left font-article">
          <p
            className="text-article mx-8 text-justify text-white"
            style={{ fontSize: "clamp(0.95rem, 3vw, 1.5rem)" }}
          >
            I am frontend software and ICT engineer based in Poland.
          </p>
          <div className="employment-history-wrapper mt-4 flex w-full justify-center">
            <button
              className="m-4 font-main text-xl"
              aria-label="See work history"
            >
              <label
                htmlFor="employment-history"
                className="modal-action btn m-0 h-min w-auto rounded-lg border-none p-3 font-bold text-white"
              >
                <span className="w-full py-0 text-center text-sm lg:py-1 lg:text-lg">
                  See work history
                </span>
              </label>
            </button>
          </div>
        </article>
      </div>
      <EmploymentHistory />
    </>
  );
};

export default About;
