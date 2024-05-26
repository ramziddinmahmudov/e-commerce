import React from 'react'
import './NotFound.css'
import not from "../Asset/icon.jpg"
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className='con5'>
      <img src={not} alt="" />
        <Link to="/"><button className='btn4'>Bosh sahifaga qaytish</button></Link>
    </div>
  )
}

export default NotFound