import React from 'react';
import './Loader.css';

import img_loader from "../Asset/3dphone.png"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
