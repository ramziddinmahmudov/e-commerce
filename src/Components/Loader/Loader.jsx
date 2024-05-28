import React from 'react';
import './Loader.css';

import img_loader from "../Asset/iphone14.png"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"><img src={img_loader} alt="" /></div>
    </div>
  );
};

export default Loader;
