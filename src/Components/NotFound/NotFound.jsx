import React from 'react'
import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className='con5'>
      <div class="content">
        <div class="er-nu">4</div>
        <div class="rnd">
            <div class="eyes">
                <div class="ey"></div>
                <div class="ey"></div>
                <div class="muth"></div>
            </div>
        </div>
        <div class="er-nu">4</div>
      </div>
      <div class="ermsg">The page could not be found</div>
        <Link to="/"><button className='btn4'>Bosh sahifaga qaytish</button></Link>
    </div>
  )
}

export default NotFound