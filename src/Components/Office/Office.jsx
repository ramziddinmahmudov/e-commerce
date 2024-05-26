import React from 'react';
import './Office.css';
import Jamoa from "../Jamoa/Jamoa"

const Office = () => {
  return (
    <div className="office">
      <header>
        <h1>Our Office</h1>
      </header>
      <main>
        <section className="contact-info">
          <h2>Contact</h2>
          <p><strong>Location:</strong> London </p>
          <p><strong>Phone:</strong> +999 99 999 9 90</p>
          <p><strong>Email:</strong> info@kompaniya.uz</p>
        </section>
        <section className="office-hours">
          <h2>Office hours</h2>
          <p><strong>Monday-Friday:</strong> 09:00 - 18:00</p>
          <p><strong>Saturday:</strong> 10:00 - 14:00</p>
          <p><strong>Sunday:</strong> Rest day </p>
        </section>
        <section className="team">
          <Jamoa/>
        </section>
      </main>
    </div>
  );
}

export default Office;
