import React from 'react';
import { GrClose } from 'react-icons/gr';
import { data } from '../data/employment';

const EmploymentHistory = () => {
  const workHistory = data;

  return (<>
      <input type="checkbox" className="modal-toggle" id="employment-history" />
        <label htmlFor="employment-history" className="modal cursor-pointer">
          <label className="modal-box h-min w-auto mx-4 bg-gradient-to-r from-cyan-600 to-cyan-400">
            <button aria-label="Close modal">
              <label htmlFor="employment-history" className="close-btn cursor-pointer rounded-lg p-2 absolute right-3 top-3 bg-red-500"><GrClose size={20}/></label>
            </button>
            <ul className="flex flex-col justify-center align-center items-center mt-2 mb-2 w-auto">
            <p className="text-xl text-center text-white font-article">For more information click</p>
              {workHistory.map((el, index)=>
              <li key={index} className="employment-history-item rounded-lg pt-2 font-bold px-4 w-auto h-min bg-white border-0 mt-4 transition-all duration-150 hover:bg-slate-200 active:scale-95 active:bg-blue-light font-article shadow-md shadow-blue-dark">
                <button className="font-primary" aria-label="Go to LinkedIn">
                  <a className="flex flex-col justify-center items-center font-primary" href="https://www.linkedin.com/in/bartosz-tobinski/" target="_blank">
                    <img className="company-logo mb-2" src={el.logo_url} width={el.img_width} alt={el.company + " logo"} />
                    <p className="text-xl text-center text-blue-dark">{el.position}</p>
                    <p className="pb-2 text-center text-black">{el.date}</p>
                  </a>
                </button>
              </li>
              )}
            </ul>
          </label>
        </label>
      </>
  )
}

export default EmploymentHistory