import React from "react";
import { GrClose } from "react-icons/gr";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { data } from "../data/employment";

const EmploymentHistory = () => {
  const workHistory = data;

  return (
    <>
      <input type="checkbox" className="modal-toggle" id="employment-history" />
      <label htmlFor="employment-history" className="modal cursor-pointer">
        <label className="modal-box mx-4 h-min w-auto bg-gradient-to-r from-cyan-600 to-cyan-400">
          <button aria-label="Close modal">
            <label
              htmlFor="employment-history"
              className="close-btn absolute right-3 top-3 cursor-pointer rounded-lg bg-red-500 p-2"
            >
              <GrClose size={20} />
            </label>
          </button>
          <p className="mt-2 text-center font-article text-xl text-white">
            For more information click on the button
          </p>
          <ul className="align-center mt-2 mb-2 flex w-auto flex-col items-center justify-center">
            {workHistory.map((el, index) => (
              <div className="flex flex-col items-center" key={el.date}>
                <li className="employment-history-item mt-4 flex h-min w-64 flex-col justify-center rounded-lg border-0 bg-white px-4 pt-2 font-article font-bold shadow-md shadow-blue-dark transition-all duration-150 hover:bg-slate-200 active:scale-95 active:bg-blue-light">
                  <button className="font-primary" aria-label="Go to LinkedIn">
                    <a
                      className="font-primary flex flex-col items-center justify-center"
                      href="https://www.linkedin.com/in/bartosz-tobinski/"
                      target="_blank"
                    >
                      <img
                        className="company-logo mb-2"
                        src={el.logo_url}
                        width={el.img_width}
                        alt={el.company + " logo"}
                      />
                      <p className="text-center text-xl text-blue-dark">
                        {el.position}
                      </p>
                      <p className="pb-2 text-center text-black">{el.date}</p>
                    </a>
                  </button>
                </li>
                {index + 1 != workHistory.length && (
                  <BsFillArrowDownCircleFill size={32} className="mt-4" />
                )}
              </div>
            ))}
          </ul>
        </label>
      </label>
    </>
  );
};

export default EmploymentHistory;
