import React, { useState, useEffect } from 'react';
import './Auth.css';

const Auth = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    } else {
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        setError('');
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        onLogin(registeredUser, true); // pass success flag
      } else {
        setError('Invalid email or password.');
      }
    }
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
          <button type="submit" className="auth-button">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
        <div className="toggle-link">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={toggleMode}>{isRegister ? 'Login' : 'Register'}</span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
