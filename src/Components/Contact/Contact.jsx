import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/send', formData)  // replace with your backend endpoint
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again later.');
      });
  };

  function sendMessage() {
    let message = document.getElementById('name').value;
    let token = '7322228483:AAETdHnBb8bTJrDJ1CTXLcx6Pup5Q9gQngQ';
    let chat_id = '657921393';
    let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&text=' + message;
  
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
  }

  return (
    <div className="contact-form-container">
      <h1>Contact with me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            id='name'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" onClick={sendMessage}>Submit</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactForm;