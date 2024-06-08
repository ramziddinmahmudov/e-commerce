import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Auth.css';

const Auth = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [randomNumber, setRandomNumber] = useState("");
  const [userInput, setUserInput] = useState("");

  const generateRandomNumber = () => {
    const number = Math.floor(10000 + Math.random() * 90000).toString();
    setRandomNumber(number);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput !== randomNumber) {
      toast.error("Error! The number you entered is incorrect.");
      generateRandomNumber();
      setUserInput("");
      return;
    }

    if (isRegister) {
      if (password.length < 7) {
        setError('Password must be at least 7 characters long.');
        return;
      }
      localStorage.setItem('registeredUser', JSON.stringify({ username, email, password }));
      setError('');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      onLogin({ username, email }, true); // pass success flag
      toast.success("Registration successful!");
    } else {
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        setError('');
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        onLogin(registeredUser, true);
        toast.success("Login successful!");
      } else {
        setError('Invalid email or password.');
      }
    }

    generateRandomNumber();
    setUserInput("");
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError('');
    generateRandomNumber();
    setUserInput("");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isRegister ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="input-group">
              <label>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <div className="error-message">{error}</div>}
          <p>Enter the 5-digit number shown below:</p>
          <div
            style={{
              display: "inline-block",
              padding: "10px",
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "5px",
              border: "2px solid #ccc",
              borderRadius: "5px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {randomNumber.split("").map((digit, index) => (
              <span key={index} style={{ padding: "0 5px" }}>
                {digit}
              </span>
            ))}
          </div>
          <input
            type="text"
            value={userInput}
            onChange={handleChange}
            maxLength="5"
            className='userbtn'
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "5px",
              marginBottom: "20px",
              textAlign: "center",
            }}
            required
          />
          <button type="submit" className="auth-button">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
        <div className="toggle-link">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={toggleMode}>{isRegister ? 'Login' : 'Register'}</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Auth;
