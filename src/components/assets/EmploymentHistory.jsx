import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { data } from '../data/employment';

const EmploymentHistory = () => {
  const workHistory = data;

  return (<>
      <input type="checkbox" className="modal-toggle" id="employment-history" />
        <label htmlFor="employment-history" className="modal cursor-pointer">
          <label className="modal-box h-min w-auto mx-4 bg-gray-dark">
            <button aria-label="Close modal">
              <label htmlFor="employment-history" className="close-btn cursor-pointer rounded-lg p-2 absolute right-3 top-3 bg-red-500"><AiOutlineCloseCircle size={20}/></label>
            </button>
            <ul className="flex flex-col justify-center align-center items-center mt-8 mb-2 w-auto">
            <p className="text-xl text-center">For more information visit my <a className="linkedin-link underline" href="https://www.linkedin.com/in/bartosz-tobinski/" target="_blank">LinkedIn</a></p>
              {workHistory.map((el, index)=>
              <li key={index} className="employment-history-item modal-action rounded-lg pt-2 btn w-auto h-min">
                <button className="font-primary" aria-label="Go to LinkedIn">
                  <a className="flex flex-col justify-center items-center font-primary" href="https://www.linkedin.com/in/bartosz-tobinski/" target="_blank">
                    <img className="company-logo mb-2" src={el.logo_url} width={el.img_width} alt={el.company + " logo"} />
                    <p className="text-xl text-center text-blue-light">{el.position}</p>
                    <p className="py-2 text-center text-white">{el.date}</p>
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