import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { data } from '../data/employment';

const EmploymentHistory = () => {
  const workHistory = data;

  return (<>
      <input type="checkbox" className="modal-toggle" id="employment-history" />
        <label htmlFor="employment-history" className="modal cursor-pointer">
          <label className="modal-box h-min w-1/2 bg-gray-dark">
            <label htmlFor="employment-history" className="close-btn cursor-pointer rounded-lg p-2 absolute right-3 top-3 bg-red-500"><AiOutlineCloseCircle /></label>
            <ul className="flex flex-col justify-center align-center items-center mt-8 mb-2">
            <p className="text-xl text-center">For more information visit my <a className="linkedin-link underline" href="https://www.linkedin.com/in/bartosz-tobinski/" target="_blank">LinkedIn</a></p>
              {workHistory.map((el, index)=>
              <li key={index} className="employment-history-item modal-action rounded-lg pt-2 btn w-1/2 h-min">
                <a className="flex flex-col justify-center items-center " href="https://www.linkedin.com/in/bartosz-tobinski/" target="_blank">
                  <img className="company-logo mb-2" src={el.logo_url} width={el.img_width} alt={el.company + " logo"} />
                  <p className="text-xl text-center text-blue-light">{el.position}</p>
                  <p className="py-2 text-center text-white">{el.date}</p>
                </a>
              </li>
              )}
            </ul>
          </label>
        </label>
      </>
  )
}

export default EmploymentHistory