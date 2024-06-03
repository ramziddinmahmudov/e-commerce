import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Prodyct';
import Cart from './Pages/Cart';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Bank from './Components/Bank/PaymentForm';
import NotFound from './Components/NotFound/NotFound';
import Office from './Components/Office/Office';
import Company from './Components/Company/Company';
import Auth from './Components/Login/Auth';
import Loader from './Components/Loader/Loader';
import { stripePromise } from './StripeConfig';

import samsung_banner from './Components/Asset/samsung banner.avif';
import iphone_banner from './Components/Asset/iphone banner.png';
import nokia_banner from './Components/Asset/nokia banner.jpg';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkmode');
    if (isDarkMode === 'true') {
      setDarkmode(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 7000);

    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
      if (registeredUser && registeredUser.email === savedEmail && registeredUser.password === savedPassword) {
        setAuthenticated(true);
        setUser(registeredUser);
      }
    }
  }, []);

  const handleDarkMode = () => {
    const updatedDarkMode = !darkmode;
    setDarkmode(updatedDarkMode);
    localStorage.setItem('darkmode', updatedDarkMode.toString());
  };

  const handleLogin = (user, success) => {
    setAuthenticated(true);
    setUser(user);
    if (success) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUser(null);
  };

  if (loading) {
    return <Loader />;
  }

  if (!authenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div id="Parent" className={darkmode ? 'darkMode' : ''}>
      <Navbar darkmode={darkmode} handleDarkMode={handleDarkMode} authenticated={authenticated} user={user} onLogout={handleLogout} />
      <div className="con" id='custom-cursor'>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/samsung" element={<Shopcategory banner={samsung_banner} category="samsung" />} />
          <Route path="/iphone" element={<Shopcategory banner={iphone_banner} category="iphone" />} />
          <Route path="/nokia" element={<Shopcategory banner={nokia_banner} category="nokia" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Elements stripe={stripePromise}><Bank /></Elements>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/office" element={<Office />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </div>
      <Footer />
      {showSuccess && (
        <div className="success-notification">
          Success
        </div>
      )}
    </div>
  );
}

export default App;
