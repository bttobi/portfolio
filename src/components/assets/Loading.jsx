import React from "react";
import { TailSpin } from "react-loading-icons";

const Loading = () => {
  return (
    <div className="align-center loading flex h-full w-full flex-col items-center justify-center">
      <TailSpin />
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
