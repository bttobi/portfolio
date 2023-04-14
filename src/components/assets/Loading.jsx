import React from 'react';
import { TailSpin } from 'react-loading-icons';

const Loading = () => {
  return (
    <div className="loading w-full h-full flex flex-col align-center items-center justify-center">
      <TailSpin />
      <span>Loading...</span>
    </div>
  )
}

export default Loading