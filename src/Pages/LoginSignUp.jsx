import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import './CSS/LoginSignup.css'

const LoginSignUp = () => {

const recaptchaRef = React.createRef();
  
  const handleRecaptcha = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
  
  };


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email || !password) {
      setError('Iltimos, email va parolni toldiring');
      return;
    }

    console.log('Form yuborildi:', { email, password });
  };
  return (
    <form onSubmit={handleSubmit} className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" value={email} onChange={handleEmailChange} placeholder='Email Address' />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password'/>
        </div>
        <div style={{ color: 'red' }}>{error}</div>
        <ReCAPTCHA className='captcha' ref={recaptchaRef} sitekey="6LcF-4ApAAAAAFl3fMAkELOBfpW4vsp_v8Bup6KN" />
        <button onClick={handleRecaptcha}>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By contiuning, i agree to the terms of & privacy policy.</p>
        </div>
      </div>
    </form>
  )
}

export default LoginSignUp
