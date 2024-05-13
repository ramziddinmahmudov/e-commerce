import React from 'react';
import './bank.css'

function Bank ( props ) {
   return (
     <form className="bank" >
        <article >
           <h1 >Bank number</h1 >
           <input type="text" className="namber" />
        </article >
        <article >
           <h1 >Data </h1 >
           <input type="text" className="data" />
        </article >
        <article >
           <h1 >Amount </h1 >
           <input type="text" className="data" />
        </article >
        <button className="sub" >Submit</button >
     </form >
   );
}

export default Bank;