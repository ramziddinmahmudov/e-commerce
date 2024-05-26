import React from 'react';
import './Company.css';

const Company = () => {
  return (
    <div className="company">
      <header>
        <h1 className='h1_header'>About the company</h1>
      </header>
      <main>
        <section className="about-us">
          <h2 className='h2_header'>About Us</h2>
          <p className='p_header'>Our company was founded in 2000, and today it is one of the leading companies in Uzbekistan. We offer quality products and services.</p>
        </section>
        <section className="mission">
          <h2 className='h2_header'>Our Mission</h2>
          <p>Our mission is to meet the needs of our customers by providing the best service and products.</p>
        </section>
        <section className="values">
          <h2>Our values</h2>
          <ul className='ccc'>
            <li className='hhh'><strong>Honesty:</strong> We maintain integrity in all our activities.</li>
            <li><strong>Innovation:</strong>We seek and apply new technologies and methods.</li>
            <li><strong>Customers:</strong> Customers are our top priority.</li>
          </ul>
        </section>
        <section className="history">
          <h2>Our History</h2>
          <p>Our company started its activity in 2000 and has been continuously developing since then.</p>
        </section>
      </main>
    </div>
  );
}

export default Company;
